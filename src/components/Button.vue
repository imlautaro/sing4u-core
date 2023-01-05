<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')

const props = withDefaults(
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

const buildClasses = computed(() => {
	const classes = [
		'btn',
		'disabled:(!bg-slate-100 !border-slate-200 !text-slate-400)',
		'dark:disabled:(!bg-neutral-700 !border-neutral-600 !text-neutral-500)',
		'duration-100 group border-2 border-b-4 overflow-hidden relative whitespace-nowrap',
	]

	if (props.block) classes.push('w-full')

	if (props.small) {
		classes.push('text-sm rounded-xl')
	} else {
		classes.push('text-base rounded-2xl')
	}

	classes.push('active:border-b-2')

	if (props.color === 'primary') {
		classes.push('bg-primary-600 border-primary-700 text-white')
	} else {
		classes.push(
			'bg-white border-slate-200 dark:(bg-neutral-800 border-neutral-700)'
		)
	}

	return classes.join(' ')
})
</script>

<template>
	<component
		:is="to !== undefined ? NuxtLink : 'button'"
		:to="to"
		:disabled="pending"
		:class="buildClasses"
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
		<div
			:class="
				color === 'primary'
					? 'group-hover:bg-white/5 !group-active:bg-black/5'
					: 'group-hover:bg-slate-200/25 dark:group-hover:bg-neutral-700/25 !group-active:bg-slate-200/50 !dark:group-active:bg-neutral-700/50'
			"
			class="absolute duration-100 h-full left-0 top-0 w-full"
		/>
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
