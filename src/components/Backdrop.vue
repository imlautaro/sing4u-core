<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const backdrop = useBackdrop()

const route = useRoute()

watch(route, () => {
	backdrop.value = false
})

const darkMode = useDarkMode()
const themeColor = useThemeColor()
const { colors: appColors } = useAppConfig()

watch(backdrop, value => {
	if (value) {
		themeColor.value = darkMode.value ? '#080808' : '#333333'
	} else {
		if (route.name === 'login' && breakpoints.isGreaterOrEqual('md')) {
			themeColor.value = darkMode.value
				? '#262626'
				: // @ts-ignore
				  appColors.primary[600]
		} else {
			themeColor.value = darkMode.value ? '#262626' : '#ffffff'
		}
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
