<script setup lang="ts">
const backdrop = useBackdrop()

const route = useRoute()

watch(route, () => {
	backdrop.value = false
})

const darkMode = useDarkMode()
const themeColor = useThemeColor()

const originalThemeColor = useState<string | null>(
	'original-theme-color',
	() => null
)

watch(backdrop, value => {
	if (!originalThemeColor.value) {
		originalThemeColor.value = themeColor.value
	}
	if (value) {
		themeColor.value = darkMode.value ? '#080808' : '#333333'
	} else {
		themeColor.value = originalThemeColor.value
		originalThemeColor.value = null
	}
})
</script>

<template>
	<transition name="backdrop">
		<button
			v-if="backdrop"
			@click="backdrop = false"
			class="bg-black/80 fixed h-screen left-0 top-0 w-screen z-30"
		/>
	</transition>
</template>

<style scoped>
.backdrop-enter-active,
.backdrop-leave-active {
	-webkit-transition-duration: 250ms;
	-o-transition-duration: 250ms;
	transition-duration: 250ms;
}
.backdrop-enter-from,
.backdrop-leave-to {
	opacity: 0;
}
</style>
