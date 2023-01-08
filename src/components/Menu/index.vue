<script setup lang="ts">
defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])

const user = useSupabaseUser()
const darkMode = useDarkMode()
const { share, isSupported } = useShare()
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
const supaAuth = useSupabaseAuthClient().auth
const { gender } = useGender()
const genderDialog = useDialog(emit)
const logoutDialog = useDialog(emit)
const backdrop = useBackdrop()

const close = () => {
	backdrop.value = false
	emit('update:modelValue', false)
}

onMounted(() => {
	const firstOpen = localStorage.getItem('first-open') === null
	if (firstOpen) {
		localStorage.setItem('first-open', 'true')
		genderDialog.value = true
	}
})

const logout = async () => {
	logoutDialog.value = false
	const { error } = await supaAuth.signOut()
	if (error) {
		alert('Ha ocurrido un error')
	}
}
</script>

<template>
	<Transition
		enter-active-class="duration-500 transform"
		leave-active-class="duration-500 transform"
		enter-from-class="lt-sm:translate-y-full sm:translate-x-full"
		leave-to-class="lt-sm:translate-y-full sm:translate-x-full"
	>
		<List
			v-if="modelValue"
			class="duration-100 lt-sm:rounded-t-3xl sm:(rounded-tl-3xl mt-2 pb-6 border-t-2) fixed right-0 top-0 h-screen w-full sm:max-w-sm sm:border-l-2 bg-white border-transparent shadow-xl dark:(bg-neutral-800 border-neutral-700) z-40 p-4"
		>
			<div class="flex sm:hidden justify-end">
				<Button icon="lucide:x" @click="close" />
			</div>
			<ListItemButton
				class="sm:(!mt-0)"
				@click="genderDialog = true"
				icon="lucide:smile"
			>
				Género
			</ListItemButton>
			<div
				class="flex items-center px-5 py-4 sm:(px-4 py-3) rounded-2xl space-x-4 w-full"
			>
				<Icon name="lucide:moon" class="text-secondary" />
				<span class="flex-1 w-full">Modo oscuro</span>
				<Toggle v-model="darkMode" />
			</div>
			<ListItemButton
				v-if="isSupported"
				@click="
					share({
						title: appConfig.product?.name || 'Sing4U',
						text: appConfig.product?.name || 'Sing4U',
						url: runtimeConfig.public.baseURL,
					})
				"
				icon="lucide:share-2"
			>
				Compartir
			</ListItemButton>
			<ListItemLink to="/privacy-policy" icon="lucide:shield-check">
				Políticas de privacidad
			</ListItemLink>
			<ListItemLink to="/terms-and-conditions" icon="lucide:scale">
				Términos y condiciones
			</ListItemLink>

			<Stack class="!mt-auto" gap="2" vertical>
				<MenuAction />
				<Button
					@click="logoutDialog = true"
					icon="lucide:log-out"
					v-if="user"
				>
					Cerrar sesión
				</Button>
				<Button icon="lucide:log-in" to="/login" v-else>
					Iniciar sesión
				</Button>
			</Stack>
		</List>
	</Transition>
	<Dialog v-model="genderDialog">
		<Stack class="p-8" gap="6" vertical>
			<Stack gap="4" vertical>
				<span class="font-bold text-2xl"> Selecciona tu género </span>
				<p class="text-base">
					Esto es necesario porque si eres mujer, los audios deben
					empezar desde una octava más alta.
				</p>
			</Stack>
			<div class="relative">
				<Transition
					name="gender-icon"
					enter-active-class="duration-200"
					leave-active-class="duration-200"
					enter-from-class="opacity-0"
					leave-to-class="opacity-0"
				>
					<Icon
						v-if="gender === 'male'"
						name="twemoji:male-sign"
						class="absolute top-1/2 left-4 transform -translate-y-1/2"
					/>
					<Icon
						v-else
						name="twemoji:female-sign"
						class="absolute top-1/2 left-4 transform -translate-y-1/2"
					/>
				</Transition>
				<select
					v-model="gender"
					class="bg-slate-100 dark:(bg-neutral-800 border-neutral-700) appearance-none border-2 pl-14 pr-5 py-3 rounded-2xl w-full"
				>
					<option value="female">Mujer</option>
					<option value="male">Hombre</option>
				</select>
				<Icon
					name="lucide:chevron-down"
					class="absolute top-1/2 right-4 transform -translate-y-1/2 text-secondary"
				/>
			</div>
		</Stack>
	</Dialog>
	<Dialog v-model="logoutDialog">
		<Stack class="p-6" gap="6" vertical>
			<Stack gap="2" vertical>
				<span class="font-bold text-2xl">
					¿Estás seguro de que quieres cerrar sesión?
				</span>
			</Stack>
			<Stack class="items-center justify-end" gap="4">
				<Button @click="logoutDialog = false">Cancelar</Button>
				<Button color="primary" @click="logout">Cerrar sesión</Button>
			</Stack>
		</Stack>
	</Dialog>
</template>
