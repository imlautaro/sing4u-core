export default defineNuxtPlugin(nuxtApp => {
	const supabase = useSupabaseClient()
	const supaAuth = useSupabaseAuthClient().auth
	const user = useSupabaseUser()

	const products = useState('products', () => [])

	const sync = async () => {
		if (user.value) {
			const { data } = await supabase
				.from('properties')
				.select('*')
				.eq('user_email', user.value.email)

			products.value = data || []
		} else {
			products.value = []
		}
	}

	sync()

	nuxtApp.hooks.hook('app:mounted', () => {
		supaAuth.onAuthStateChange(() => {
			sync()
		})
	})
})
