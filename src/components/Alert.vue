<script setup lang="ts">
const props = withDefaults(defineProps<{ type?: AlertType }>(), {
	type: 'warning',
})

const icon = computed(() => {
	switch (props.type) {
		case 'error':
			return 'lucide:x-circle'
		case 'info':
			return 'lucide:info'
		case 'success':
			return 'lucide:check-circle'
		case 'warning':
		default:
			return 'lucide:alert-triangle'
	}
})

const classes = computed(() => {
	switch (props.type) {
		case 'error':
			return 'bg-error-600/10 text-error-600 dark:(bg-error-400/10 text-error-400)'
		case 'info':
			return 'bg-info-600/10 text-info-600 dark:(bg-info-400/10 text-info-400)'
		case 'success':
			return 'bg-success-600/10 text-success-600 dark:(bg-success-400/10 text-success-400)'
		case 'warning':
		default:
			return 'bg-warning-600/10 text-warning-600 dark:(bg-warning-400/10 text-warning-400)'
	}
})
</script>

<template>
	<Stack :class="classes" class="p-6 rounded-2xl" gap="4">
		<Icon :name="icon" />
		<div class="flex-1">
			<slot />
		</div>
	</Stack>
</template>
