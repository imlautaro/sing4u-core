<script setup>
const show = ref(false)

onMounted(async () => {
	const workbox = await window.$workbox
	if (workbox) {
		workbox.addEventListener('installed', event => {
			if (event.isUpdate) {
				show.value = true
			}
		})
	}
})

const update = () => {
	window.location.reload()
}
</script>

<template>
	<Stack
		v-if="show"
		@click="update"
		class="bg-black duration-200 text-white shadow-xl ring-2 ring-transparent dark:(ring-white) p-4 px-6 rounded-full fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
		component="button"
		gap="4"
		items="center"
	>
		<div class="transform rotate-90">
			<Icon
				class="animate-bounce text-base"
				name="fluent-emoji-flat:backhand-index-pointing-up"
			/>
		</div>
		<span class="flex-1 whitespace-nowrap">Nueva versión disponible</span>
	</Stack>
</template>
