<script setup lang="ts">
defineProps<{ title: string; icon?: string }>()

const expand = ref(false)
const content = ref<HTMLDivElement>()

const height = ref(0)

onMounted(() => {
	height.value = content.value!.childElementCount * 56
})
</script>

<template>
	<ListItemButton
		class="<sm:(rounded-none) font-bold"
		@click="expand = !expand"
	>
		<template #icon>
			<div
				class="flex p-2 rounded-full bg-primary-600/5 text-primary-600 dark:(bg-primary-400/5 text-primary-400) -m-2"
			>
				<Icon v-if="icon" :name="icon" />
				<Icon v-else name="lucide:paperclip" />
			</div>
		</template>
		{{ title }}
		<template #end-icon>
			<Icon
				name="lucide:chevron-down"
				class="duration-200 text-secondary transform"
				:class="{ 'rotate-180': expand }"
			/>
		</template>
	</ListItemButton>
	<div
		ref="content"
		class="duration-300 overflow-hidden"
		:style="{ maxHeight: expand ? `${height}px` : '0px' }"
	>
		<slot />
	</div>
</template>
