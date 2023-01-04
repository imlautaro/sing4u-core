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
	-webkit-transition-duration: 200ms;
	-o-transition-duration: 200ms;
	transition-duration: 200ms;
}
.backdrop-enter-from,
.backdrop-leave-to {
	opacity: 0;
}
</style>
