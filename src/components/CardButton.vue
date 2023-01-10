<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')

const props = defineProps<{
	to?: string
}>()

const buildClasses = computed(() => {
	const classes = [
		'btn',
		'disabled:(!bg-slate-100 !border-slate-200 !text-slate-400)',
		'dark:disabled:(!bg-neutral-700 !border-neutral-600 !text-neutral-500)',
		'duration-100 group border-2 border-b-4 overflow-hidden relative whitespace-nowrap',
		'text-base rounded-3xl',
	]

	classes.push('active:border-b-2')

	classes.push(
		'bg-white border-slate-200 dark:(bg-neutral-800 border-neutral-700)'
	)

	return classes.join(' ')
})
</script>

<template>
	<component
		:is="to !== undefined ? NuxtLink : 'button'"
		:to="to"
		:class="buildClasses"
	>
		<slot />
		<div
			class="absolute duration-100 h-full left-0 top-0 w-full group-hover:bg-slate-200/25 dark:group-hover:bg-neutral-700/25 !group-active:bg-slate-200/50 !dark:group-active:bg-neutral-700/50"
		/>
	</component>
</template>

<style>
.flex-col > .btn:not(:first-child):active {
	margin-bottom: 2px;
	transform: translateY(2px);
}
.flex-col > .btn:first-child:active {
	margin-top: 2px;
}
.btn:not(.flex-col > .btn):active {
	margin-top: 2px;
}
</style>
