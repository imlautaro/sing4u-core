import { Provider } from '@supabase/gotrue-js'

export default () => {
	const supaAuth = useSupabaseAuthClient().auth

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

		pending.value = true

		const { error } = await supaAuth.signInWithOAuth({
			provider,
		})

		pending.value = false

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
