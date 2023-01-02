export default () => {
	const gender = useState<'female' | 'male'>('gender', () => 'female')

	onMounted(() => {
		gender.value =
			(localStorage.getItem('gender') as 'female' | 'male') || 'female'
	})

	watch(gender, value => {
		localStorage.setItem('gender', value)
	})

	const genderPrefix = computed(() => {
		return gender.value[0] as 'm' | 'f'
	})

	return { gender, genderPrefix }
}
