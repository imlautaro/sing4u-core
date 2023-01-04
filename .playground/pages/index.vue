<script setup lang="ts">
const user = useSupabaseUser()

const { logout } = useAuth()
</script>

<template>
	<div>
		<AppBar elevate>
			<Brand />
			<ClientOnly>
				<Button v-if="user" @click="logout" icon="lucide:log-out">
					Cerrar sesión
				</Button>
				<Button v-else color="primary" icon="lucide:log-in" to="/login">
					Iniciar sesión
				</Button>
			</ClientOnly>
		</AppBar>
		<h1>Home Page</h1>
	</div>
</template>
