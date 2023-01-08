import { colors } from '@unocss/preset-mini'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

const range = (size: number, startAt = 1) =>
	Array.from(Array(size).keys()).map(i => i + startAt)

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
		'@unocss/nuxt',
		'@nuxtjs/google-fonts',
		'@nuxtjs/color-mode',
		'@kevinmarrec/nuxt-pwa',
		'@nuxt/content',
		'@vueuse/nuxt',
		'@nuxtjs/supabase',
	],
	runtimeConfig: {
		public: {
			baseURL: process.env.BASE_URL || 'http://localhost:3000',
			gtmContainerId: process.env.GTM_CONTAINER_ID,
		},
	},
	srcDir: 'src',
	unocss: {
		preflight: true,
		typography: true,
		transformers: [transformerDirectives(), transformerVariantGroup()],
		shortcuts: {
			'bg-primary': 'bg-primary-600 dark:bg-primary-400',
			'text-body': 'text-slate-900 dark:text-neutral-100',
			'text-primary': 'text-primary-600 dark:text-primary-400',
			'text-secondary': 'text-slate-600 dark:text-neutral-400',
			'border-default': 'border-slate-200 dark:border-neutral-700',
			'btn-ghost':
				'hover:bg-slate-200/25 !active:bg-slate-200/50 dark:(hover:bg-neutral-700/25 !active:bg-neutral-700/50)',
			'text-link': 'font-bold text-primary',
			'bg-surface': 'bg-white dark:bg-neutral-800',
		},
		safelist: [
			...range(12).map(i => `space-x-${i}`),
			...range(12).map(i => `space-y-${i}`),
			'items-start',
			'items-baseline',
			'items-center',
			'items-stretch',
			'items-end',
			'justify-start',
			'justify-end',
			'justify-center',
			'justify-between',
			'justify-around',
			'justify-evenly',
		],
		theme: {
			colors: {
				neutral: colors!.neutral,
				slate: colors!.slate,
				error: colors!.red,
				success: colors!.green,
				warning: colors!.yellow,
				info: colors!.sky,
			},
		},
		wind: true,
	},
})
