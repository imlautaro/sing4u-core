<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')

withDefaults(
	defineProps<{
		icon?: string
		pending?: boolean
		color?: 'primary' | 'secondary'
		block?: boolean
		iconLeft?: boolean
		small?: boolean
		to?: string
	}>(),
	{
		color: 'secondary',
	}
)
</script>

<template>
	<component
		:is="to !== undefined ? NuxtLink : 'button'"
		:to="to"
		:disabled="pending"
		:class="{
			[`btn-${color}`]: true,
			'w-full': block,
			'text-sm rounded-xl': small,
			'text-base rounded-2xl': !small,
		}"
		class="disabled:(!bg-slate-100 !border-slate-200 !text-slate-400) dark:disabled:(!bg-neutral-700 !border-neutral-600 !text-neutral-500) btn duration-100 group border-2 border-b-4 overflow-hidden relative whitespace-nowrap"
	>
		<div
			:class="
				(!$slots.default && !!icon) || (!$slots.default && $slots.icon)
					? 'p-2'
					: small
					? 'px-3 py-2'
					: 'px-5 py-3'
			"
			class="flex items-center justify-center relative space-x-2 z-10"
		>
			<template v-if="pending">
				<Icon name="lucide:loader" class="animate-spin" />
			</template>
			<template v-else>
				<slot name="icon" />
				<Icon v-if="icon" :name="icon" />
				<span
					v-if="$slots.default"
					class="font-extrabold tracking-wide uppercase"
					:class="{ 'flex-1 w-full': iconLeft }"
				>
					<slot />
				</span>
			</template>
		</div>
		<div class="overlay absolute duration-100 h-full left-0 top-0 w-full" />
	</component>
</template>

<style>
.flex-col > .btn:not(:first-child):active {
	margin-bottom: 2px;
	transform: translateY(2px);
}
.flex-col > .btn:first-child:active {
	margin-top: 2px;
}
.btn:not(.flex-col > .btn):active {
	margin-top: 2px;
}
.btn-group > .btn:not(:first-child) {
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;
	border-left-width: 1px !important;
}
.btn-group > .btn:not(:last-child) {
	border-top-right-radius: 0px;
	border-bottom-right-radius: 0px;
	border-right-width: 1px !important;
}
</style>

<style scoped>
.btn:active {
	@apply border-b-2;
}
.btn-primary {
	@apply bg-primary-600 border-primary-700 text-white;
}
.btn-secondary {
	@apply bg-white border-slate-200;
}
.dark .btn-secondary {
	@apply bg-neutral-800 border-neutral-700;
}
@media (hover: hover) {
	.btn-primary:hover .overlay {
		@apply bg-white/5;
	}
	.btn-secondary:hover .overlay {
		@apply bg-slate-200/25;
	}
	.dark .btn-secondary:hover .overlay {
		@apply bg-neutral-700/25;
	}
}
.btn-primary:active .overlay {
	@apply bg-black/5 !important;
}
.btn-secondary:active .overlay {
	@apply bg-slate-200/50 !important;
}
.dark .btn-secondary:active .overlay {
	@apply bg-neutral-700/50 !important;
}
</style>
