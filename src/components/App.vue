<template>
	<div class="text-body lg:text-lg">
		<Stack
			class="bg-white lg:(bg-slate-100 dark:bg-neutral-900) dark:bg-neutral-800 h-screen overflow-hidden"
			vertical
		>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
			<slot />
		</Stack>
		<Backdrop />
		<UpdatePrompt />
	</div>
</template>
