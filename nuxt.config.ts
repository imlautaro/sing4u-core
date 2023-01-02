export default defineNuxtConfig({
	appConfig: {
		nuxtIcon: {
			size: '1.5em',
		},
	},
	colorMode: {
		classSuffix: '',
	},
	googleFonts: {
		download: true,
		families: {
			Nunito: [600, 700, 800],
		},
	},
	modules: [
		'nuxt-icon',
		'nuxt-windicss',
		'@nuxtjs/google-fonts',
		'@nuxtjs/color-mode',
	],
	srcDir: 'src',
})
