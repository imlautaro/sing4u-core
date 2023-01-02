<script setup lang="ts">
const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])

const backdrop = useBackdrop()

watch(backdrop, value => {
	if (!value) {
		emit('update:modelValue', false)
	}
})

watch(
	computed(() => props.modelValue),
	value => {
		if (!value) {
			backdrop.value = false
		}
	}
)
</script>

<template>
	<div
		class="fixed left-1/2 <sm:bottom-0 sm:(left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2) transform -translate-x-1/2 z-40 max-w-md w-full"
	>
		<transition name="dialog">
			<Stack
				class="max-w-md sm:border border-transparent bg-surface dark:border-neutral-700 shadow-xl <sm:rounded-b-none rounded-3xl w-full"
				v-if="modelValue"
				vertical
			>
				<slot />
			</Stack>
		</transition>
	</div>
</template>

<style scoped>
@media (min-width: 768px) {
	.dialog-enter-active,
	.dialog-leave-active {
		@apply duration-200 transform;
	}
	.dialog-enter-from,
	.dialog-leave-to {
		@apply opacity-0 scale-95;
	}
}
@media (max-width: 768px) {
	.dialog-enter-active,
	.dialog-leave-active {
		@apply duration-200 transform;
	}
	.dialog-enter-from,
	.dialog-leave-to {
		@apply translate-y-full;
	}
}
</style>
