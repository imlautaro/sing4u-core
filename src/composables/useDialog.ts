export default (emit?: any) => {
	const showDialog = ref(false)

	const backdrop = useBackdrop()

	if (emit) {
		watch(showDialog, value => {
			if (value) {
				return emit('update:modelValue', false)
			}
		})
	}

	watch(showDialog, value => {
		if (value) {
			backdrop.value = true
		} else {
			backdrop.value = false
		}
	})

	return showDialog
}
