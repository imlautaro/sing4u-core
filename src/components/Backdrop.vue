<script setup lang="ts">
const backdrop = useBackdrop()
</script>

<template>
	<transition name="backdrop">
		<button
			v-if="backdrop"
			@click="backdrop = false"
			class="bg-black/80 fixed h-screen left-0 top-0 w-screen z-30"
		/>
	</transition>
</template>

<style scoped>
.backdrop-enter-active,
.backdrop-leave-active {
	@apply duration-200;
}
.backdrop-enter-from,
.backdrop-leave-to {
	@apply opacity-0;
}
</style>
