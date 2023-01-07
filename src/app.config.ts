import { colors } from '@unocss/preset-mini'

export default defineAppConfig({
	colors: {
		primary: colors!.teal,
	},
	product: {
		name: 'Vocalizar',
	},
})

declare module '@nuxt/schema' {
	interface AppConfigInput {
		colors?: object
		product?: {
			name?: string
		}
	}
}
