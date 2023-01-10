import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
	content: {
		markdown: {
			anchorLinks: false,
		},
	},
	css: [resolve('./src/assets/css/transitions.css')],
	extends: 'oxeui',
	modules: ['@kevinmarrec/nuxt-pwa', '@nuxt/content', '@nuxtjs/supabase'],
	runtimeConfig: {
		public: {
			baseURL: process.env.BASE_URL || 'http://localhost:3000',
			gtmContainerId: process.env.GTM_CONTAINER_ID,
		},
	},
	srcDir: 'src',
})
