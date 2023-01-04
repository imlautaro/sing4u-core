<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		color?: 'error' | 'gray' | 'info' | 'primary' | 'success' | 'warning'
	}>(),
	{ color: 'primary' }
)

const buildClasses = computed(() => {
	const classes: string[] = []

	switch (props.color) {
		case 'gray':
			classes.push(
				'bg-slate-200 text-slate-400 dark:(bg-neutral-800 text-neutral-600)'
			)
			break
		case 'error':
			classes.push(
				'bg-error-600/10 text-error-600 dark:(bg-error-400/10 text-error-400)'
			)
			break
		case 'success':
			classes.push(
				'bg-success-600/10 text-success-600 dark:(bg-success-400/10 text-success-400)'
			)
			break
		case 'info':
			classes.push(
				'bg-info-600/10 text-info-600 dark:(bg-info-400/10 text-info-400)'
			)
			break
		case 'warning':
			classes.push(
				'bg-warning-600/10 text-warning-600 dark:(bg-warning-400/10 text-warning-400)'
			)
			break
		case 'primary':
		default:
			classes.push(
				'bg-primary-600/10 text-primary-600 dark:(bg-primary-400/10 text-primary-400)'
			)
	}

	return classes.join(' ')
})
</script>

<template>
	<span
		:class="buildClasses"
		class="duration-100 text-xs uppercase font-extrabold h-min px-2 py-1 rounded-md tracking-wide"
	>
		<slot />
	</span>
</template>
