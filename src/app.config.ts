export default defineAppConfig({
	product: {
		name: 'Vocalizar',
	},
})

declare module '@nuxt/schema' {
	interface AppConfigInput {
		product?: {
			name?: string
		}
	}
}
