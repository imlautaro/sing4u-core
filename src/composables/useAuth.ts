import { Provider } from '@supabase/gotrue-js'

export default () => {
	const {
		public: { baseURL },
	} = useRuntimeConfig()
	const supaAuth = useSupabaseAuthClient().auth

	const route = useRoute()
	const redirectTo = route.query?.redirect || '/'

	const email = ref('')

	const errors = reactive({
		general: '',
		email: '',
	})

	watch(email, () => {
		errors.email = ''
		errors.general = ''
	})

	const pending = ref(false)

	const login = async () => {
		if (pending.value) return

		if (!validate(email.value)) {
			errors.email = 'Por favor, ingresa un correo válido'
			return
		}

		pending.value = true

		const { error } = await supaAuth.signInWithOtp({
			email: email.value,
			options: {
				emailRedirectTo: `${baseURL}${redirectTo}`,
			},
		})

		pending.value = false

		if (error) {
			errors.general = 'Ha ocurrido un error'
		} else {
			return navigateTo({
				path: '/login',
				query: {
					sent: 'true',
				},
			})
		}
	}

	const loginWith = async (provider: Provider) => {
		if (pending.value) return

		const { error } = await supaAuth.signInWithOAuth({
			provider,
			options: {
				redirectTo: `${baseURL}${redirectTo}`,
			},
		})

		if (error) {
			errors.general = 'Ha ocurrido un error'
		}
	}

	const logout = async () => {
		await supaAuth.signOut()
		return navigateTo('/login')
	}

	return { email, errors, login, loginWith, logout, pending }
}
