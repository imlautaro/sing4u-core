export default defineNuxtConfig({
	appConfig: {
		nuxtIcon: {
			size: '1.5em',
		},
	},
	colorMode: {
		classSuffix: '',
	},
	content: {
		markdown: {
			anchorLinks: false,
		},
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
		'@kevinmarrec/nuxt-pwa',
		'@nuxt/content',
		'@vueuse/nuxt',
	],
	srcDir: 'src',
})
