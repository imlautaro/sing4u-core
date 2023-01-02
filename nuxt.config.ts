import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

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
	css: [
		resolve('./src/assets/css/globals.css'),
		resolve('./src/assets/css/transitions.css'),
	],
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
		'@nuxtjs/supabase',
	],
	srcDir: 'src',
})
