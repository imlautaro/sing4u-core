export default defineNuxtConfig({
	appConfig: {
		nuxtIcon: {
			size: '1.5em',
		},
	},
	googleFonts: {
		download: true,
		families: {
			Nunito: [600, 700, 800],
		},
	},
	modules: ['nuxt-icon', 'nuxt-windicss', '@nuxtjs/google-fonts'],
	srcDir: 'src',
})
