<script setup lang="ts">
defineProps<{ modelValue: boolean }>()
defineEmits(['update:modelValue'])
</script>

<template>
	<button
		@click="$emit('update:modelValue', !modelValue)"
		:class="modelValue ? 'bg-primary-600' : 'bg-gray-400'"
		class="duration-200 p-1 w-12 rounded-full"
	>
		<div
			:class="{ 'translate-x-5': modelValue }"
			class="bg-white duration-200 h-5 rounded-full transform w-5"
		/>
	</button>
</template>
