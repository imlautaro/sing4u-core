export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.hooks.hook('vue:setup', () => {
		const themeColor = useThemeColor()

		useHead(() => ({
			meta: [
				{
					name: 'theme-color',
					content: themeColor.value,
					tagPriority: 1,
					tagDuplicateStrategy: 'replace',
				},
			],
		}))
	})
})
