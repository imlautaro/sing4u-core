import { colors } from '@unocss/preset-mini'

export default defineAppConfig({
	colors: {
		primary: colors!.teal,
	},
})

declare module '@nuxt/schema' {
	interface AppConfigInput {
		colors?: object
	}
}
