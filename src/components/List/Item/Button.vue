<script setup lang="ts">
defineProps<{ icon?: string; endIcon?: string }>()
</script>

<template>
	<button
		class="duration-100 btn-ghost flex items-center px-5 py-4 sm:(px-4 py-3) rounded-2xl space-x-4 text-left w-full"
	>
		<slot name="icon" />
		<Icon v-if="icon" class="text-secondary" :name="icon" />
		<span
			class="flex-1 overflow-ellipsis overflow-hidden w-full whitespace-nowrap"
		>
			<slot />
		</span>
		<slot name="end-icon" />
		<Icon v-if="endIcon" class="text-secondary" :name="endIcon" />
	</button>
</template>
