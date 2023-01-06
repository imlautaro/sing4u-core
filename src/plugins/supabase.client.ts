export default defineNuxtPlugin(nuxtApp => {
	const supabase = useSupabaseClient()
	const supaAuth = useSupabaseAuthClient().auth
	const user = useSupabaseUser()

	const properties = useState('properties', () => [])

	const sync = async () => {
		if (user.value) {
			const { data } = await supabase
				.from('properties')
				.select('*, product:product_id (*)')
				.eq('user_email', user.value.email)

			properties.value = data || []
		} else {
			properties.value = []
		}
	}

	sync()

	nuxtApp.hooks.hook('app:mounted', () => {
		supaAuth.onAuthStateChange(() => {
			sync()
		})
	})
})
