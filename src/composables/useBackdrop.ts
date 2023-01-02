export default () => {
	const backdrop = useState('backdrop', () => false)
	const route = useRoute()

	watch(route, () => {
		backdrop.value = false
	})

	return backdrop
}
