<script setup lang="ts">
import { v4 as uuid } from 'uuid'

const id = uuid()

withDefaults(
	defineProps<{
		type?: string
		modelValue: string
		label: string
		icon?: string
		hint?: string
		error?: string
	}>(),
	{ type: 'text' }
)
defineEmits(['update:modelValue'])
const show = ref(false)
</script>

<template>
	<Stack gap="2" vertical>
		<label :for="id">{{ label }}: </label>
		<div
			class="bg-slate-100 dark:(bg-neutral-900 border-neutral-700) border-2 relative rounded-2xl"
		>
			<Icon
				v-if="icon"
				class="absolute top-1/2 transform -translate-y-1/2 left-4 text-secondary"
				:name="icon"
			/>
			<input
				:id="id"
				class="bg-transparent px-5 py-3 relative rounded-2xl text-lg w-full"
				:class="{ 'pl-14': icon, 'pr-14': type === 'password' }"
				:value="modelValue"
				@input="
					$emit(
						'update:modelValue',
						($event.target as HTMLInputElement).value
					)
				"
				:type="
					type === 'password' ? (show ? 'text' : 'password') : type
				"
				:placeholder="label"
			/>
			<div
				v-if="type === 'password'"
				@click.prevent="show = !show"
				class="toggle-btn flex p-2 -mx-2 absolute top-1/2 transform -translate-y-1/2 right-4 rounded-lg"
			>
				<Icon
					:name="show ? 'lucide:eye' : 'lucide:eye-off'"
					class="duration-100"
				/>
			</div>
		</div>
		<small v-if="error" class="text-sm text-error-600 dark:text-error-400">
			{{ error }}
		</small>
		<small v-else-if="hint" class="text-sm text-secondary">
			{{ hint }}
		</small>
	</Stack>
</template>

<style scoped>
.toggle-btn:active svg {
	transform: translateY(2px);
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
	@apply bg-transparent;
	-webkit-text-fill-color: inherit;
	transition: background-color 5000s ease-in-out 0s;
}
.dark input:-webkit-autofill,
.dark input:-webkit-autofill:hover,
.dark input:-webkit-autofill:focus,
.dark textarea:-webkit-autofill,
.dark textarea:-webkit-autofill:hover,
.dark textarea:-webkit-autofill:focus,
.dark select:-webkit-autofill,
.dark select:-webkit-autofill:hover,
.dark select:-webkit-autofill:focus {
	@apply bg-transparent;
	-webkit-text-fill-color: white;
	transition: background-color 5000s ease-in-out 0s;
}
</style>
