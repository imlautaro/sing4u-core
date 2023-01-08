export default async (productName?: string) => {
	const supabase = useSupabaseClient()
	const appConfig = useAppConfig()

	const { data: product, pending } = await useLazyAsyncData(
		'product',
		async () => {
			const { data } = await supabase
				.from('products')
				.select('name, price')
				.eq('name', productName || appConfig.product?.name)
				.single()
			return data
		}
	)

	const price = computed(() => {
		if (product.value) {
			return product.value.price
		} else {
			return 0
		}
	})

	return { price, pending }
}
