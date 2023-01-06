export default defineNuxtPlugin(nuxtApp => {
	const supabase = useSupabaseClient()
	const supaAuth = useSupabaseAuthClient().auth
	const user = useSupabaseUser()

	const properties = useProperties()

	const sync = async () => {
		if (user.value) {
			const { data } = await supabase
				.from('properties')
				.select('user_email, product:product_id (id, name, price)')
				.eq('user_email', user.value.email)

			properties.value = (data as Property[]) || []
		} else {
			properties.value = []
		}
	}

	sync()

	nuxtApp.hooks.hook('app:mounted', () => {
		supaAuth.onAuthStateChange((_event, session) => {
			user.value = session?.user || null
			sync()
		})
	})
})
