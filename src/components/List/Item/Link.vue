<script setup lang="ts">
defineProps<{ icon?: string; endIcon?: string }>()
</script>

<template>
	<NuxtLink
		class="duration-100 btn-ghost flex items-center px-5 py-4 sm:(px-4 py-3) rounded-2xl space-x-4 w-full"
	>
		<slot name="icon" />
		<Icon v-if="icon" class="text-secondary" :name="icon" />
		<span class="flex-1 w-full">
			<slot />
		</span>
		<slot name="end-icon" />
		<Icon v-if="endIcon" class="text-secondary" :name="endIcon" />
	</NuxtLink>
</template>
