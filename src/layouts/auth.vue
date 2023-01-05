<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { colors } from '@unocss/preset-mini'

const breakpoints = useBreakpoints(breakpointsTailwind)
const darkMode = useDarkMode()
const { colors: appColors } = useAppConfig()

const themeColor = computed(() => {
	if (darkMode.value) {
		// @ts-ignore
		return colors!.neutral[800]
	} else {
		return breakpoints.isGreaterOrEqual('md')
			? // @ts-ignore
			  appColors.primary[600]
			: '#ffffff'
	}
})

useHead(() => ({
	meta: [
		{
			name: 'theme-color',
			content: themeColor,
		},
	],
}))
</script>

<template>
	<div class="grid grid-cols-6 lg:grid-cols-12 lg:grid-rows-12 min-h-screen">
		<div class="fixed left-4 top-4">
			<button
				@click="navigateTo('/')"
				class="duration-100 flex p-2 rounded-full text-current (hover:bg-black/5 !md:hover:bg-white/10) !active:bg-black/10 md:(text-white !active:bg-white/25)"
			>
				<Icon name="lucide:arrow-left" />
			</button>
		</div>
		<div
			class="hidden md:flex bg-primary-600 dark:bg-neutral-800 col-span-12 col-start-1 row-span-5 row-start-1"
		/>
		<div
			class="hidden md:flex bg-slate-100 dark:bg-neutral-900 col-span-12 col-start-1 row-span-7 row-start-6"
		/>
		<div
			class="col-span-6 md:(col-span-4 col-start-2) lg:(col-span-6 col-start-4) xl:(col-span-4 col-start-5) row-span-12 row-start-1 flex flex-col justify-center"
		>
			<Stack
				class="bg-surface border-default duration-200 h-full p-6 md:(p-12 rounded-3xl shadow-2xl) md:(dark:border-2 h-min)"
				justify="center"
				vertical
			>
				<slot />
			</Stack>
		</div>
	</div>
</template>
