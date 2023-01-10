<template>
	<Stack class="bg-surface flex-1 h-full overflow-hidden" vertical>
		<AppBar>
			<Button icon="lucide:arrow-left" @click="navigateTo('/')" />
			<span class="font-bold text-lg">
				<slot name="title" />
			</span>
			<div class="h-10 w-10" />
		</AppBar>
		<div class="flex-1 h-full overflow-y-auto w-full">
			<div class="max-w-screen-sm mx-auto py-8 sm:py-12 px-6">
				<slot />
			</div>
		</div>
	</Stack>
</template>
