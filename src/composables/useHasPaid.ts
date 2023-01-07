export default (productName?: string) => {
	const properties = useState('properties')
	const appConfig = useAppConfig()

	const hasPaid = computed(() => {
		return !!(properties.value as { product: { name: string } }[]).find(
			i => i.product.name === productName || appConfig.product?.name
		)
	})

	return hasPaid
}
