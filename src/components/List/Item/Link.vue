<script setup lang="ts">
defineProps<{ icon?: string; endIcon?: string; active?: boolean }>()
</script>

<template>
	<NuxtLink
		class="duration-100 flex items-center px-5 py-4 sm:(px-4 py-3) rounded-2xl space-x-4 w-full"
		:class="
			active
				? 'bg-primary-600/10 dark:bg-primary-400/10 text-primary'
				: 'btn-ghost'
		"
	>
		<slot name="icon" />
		<Icon
			v-if="icon"
			:class="active ? 'text-primary' : 'text-secondary'"
			:name="icon"
		/>
		<span class="flex-1 w-full">
			<slot />
		</span>
		<slot name="end-icon" />
		<Icon v-if="endIcon" class="text-secondary" :name="endIcon" />
	</NuxtLink>
</template>
