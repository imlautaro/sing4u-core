<script setup lang="ts">
defineProps<{ elevate?: boolean }>()
</script>

<template>
	<nav
		class="bg-surface border-default duration-100 p-4"
		:class="{ 'border-b-2': elevate }"
	>
		<Stack gap="4" items="center" justify="between">
			<slot />
		</Stack>
	</nav>
</template>
