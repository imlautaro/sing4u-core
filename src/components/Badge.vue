<script setup lang="ts">
withDefaults(
	defineProps<{
		color?: 'error' | 'gray' | 'info' | 'primary' | 'success' | 'warning'
	}>(),
	{ color: 'primary' }
)
</script>

<template>
	<span
		:class="`badge-${color}`"
		class="duration-100 text-xs uppercase font-extrabold h-min px-2 py-1 rounded-md tracking-wide"
	>
		<slot />
	</span>
</template>

<style scoped>
.badge-primary {
	@apply bg-primary-600/10 text-primary-600;
}
.dark .badge-primary {
	@apply bg-primary-400/10 text-primary-400;
}
.badge-error {
	@apply bg-red-600/10 text-red-600;
}
.dark .badge-error {
	@apply bg-red-400/10 text-red-400;
}
.badge-success {
	@apply bg-green-600/10 text-green-600;
}
.dark .badge-success {
	@apply bg-green-400/10 text-green-400;
}
.badge-info {
	@apply bg-sky-600/10 text-sky-600;
}
.dark .badge-info {
	@apply bg-sky-400/10 text-sky-400;
}
.badge-warning {
	@apply bg-orange-600/10 text-orange-600;
}
.dark .badge-warning {
	@apply bg-orange-400/10 text-orange-400;
}
.badge-gray {
	@apply bg-slate-200 text-slate-400;
}
.dark .badge-gray {
	@apply bg-neutral-800 text-neutral-600;
}
</style>
