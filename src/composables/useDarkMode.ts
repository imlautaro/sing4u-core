export default () => {
	const colorMode = useColorMode()
	const darkMode = useState('dark-mode', () => false)

	onMounted(() => {
		darkMode.value = colorMode.value === 'dark'
	})

	watch(darkMode, value => {
		colorMode.preference = value ? 'dark' : 'light'
	})

	return darkMode
}
