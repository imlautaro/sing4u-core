<script setup lang="ts">
definePageMeta({
	layout: 'auth',
	middleware: 'unauthenticated',
})

const { email, errors, login, loginWith, pending } = useAuth()
</script>

<template>
	<Transition
		enter-active-class="duration-300"
		leave-active-class="duration-300"
		enter-from-class="opacity-0 scale-95"
		leave-to-class="opacity-0 scale-95"
		mode="out-in"
	>
		<Stack v-if="$route.query.sent" gap="6" vertical>
			<Stack gap="4" vertical>
				<Stack
					class="border-2 border-default mx-auto p-6 rounded-full text-3xl text-success-600 dark:text-success-400"
				>
					<Icon name="lucide:mail-check" />
				</Stack>
				<Stack class="text-center" gap="2" vertical>
					<h1 class="font-bold text-2xl">
						Te enviamos un enlace a tu correo para ingresar
					</h1>
					<p class="text-secondary">
						Si no lo ves, por favor revisa el apartado de spam
					</p>
				</Stack>
			</Stack>
		</Stack>
		<Stack v-else gap="6" vertical>
			<Stack gap="4" vertical>
				<Stack
					class="dark:bg-white/5 border-2 border-default mx-auto p-6 rounded-full text-3xl"
				>
					<Icon name="lucide:user" />
				</Stack>
				<h1 class="font-bold text-2xl text-center">
					Ingresar a <b>Sing4U</b>
				</h1>
			</Stack>
			<hr class="invisible" />
			<Button
				@click="loginWith('google')"
				icon="logos:google-icon"
				icon-left
			>
				Continuar con Google
			</Button>
			<span class="text-center text-secondary">ó</span>
			<Alert v-if="errors.general" type="error">
				{{ errors.general }}
			</Alert>
			<Stack component="form" gap="6" @submit.prevent="login" vertical>
				<TextField
					v-model="email"
					icon="lucide:mail"
					label="Correo electrónico"
					type="email"
					:error="errors.email"
				/>
				<div class="flex flex-col space-y-2">
					<Button
						:pending="pending"
						color="primary"
						icon="lucide:log-in"
						type="submit"
					>
						Continuar con Email
					</Button>
				</div>
				<hr class="invisible" />
				<small
					class="text-center leading-normal text-sm text-secondary"
				>
					Al continuar aceptas nuestros
					<NuxtLink class="text-link" to="/terms-and-conditions">
						términos y condiciones
					</NuxtLink>
					y nuestras
					<NuxtLink class="text-link" to="/privacy-policy"
						>políticas de privacidad</NuxtLink
					>.
				</small>
			</Stack>
		</Stack>
	</Transition>
</template>
