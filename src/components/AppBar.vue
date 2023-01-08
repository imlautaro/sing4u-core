<script setup lang="ts">
withDefaults(defineProps<{ elevate?: boolean }>(), { elevate: true })

const user = useSupabaseUser()
const backdrop = useBackdrop()

const menu = ref(false)

watch(menu, value => {
	if (value) {
		backdrop.value = !!true
	}
})

watch(backdrop, value => {
	if (!value) {
		menu.value = false
	}
})
</script>

<template>
	<nav
		class="bg-surface border-default duration-100 p-4"
		:class="{ 'border-b-2': elevate }"
	>
		<Stack gap="4" items="center" justify="between">
			<slot v-if="$slots.default" />
			<template v-else>
				<Brand />
				<Stack items="center" gap="4">
					<Button @click="menu = true" class="group">
						<template #icon>
							<Icon
								name="lucide:settings"
								class="transform duration-1000 ease-in-out group-hover:rotate-180"
							/>
						</template>
					</Button>
					<Button
						class="hidden sm:flex"
						v-if="!user"
						to="/login"
						color="primary"
						icon="lucide:log-in"
					>
						Iniciar sesión
					</Button>
				</Stack>
			</template>
		</Stack>
	</nav>
	<Menu v-model="menu" />
</template>
