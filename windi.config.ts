import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

const range = (size: number, startAt = 1) =>
	Array.from(Array(size).keys()).map(i => i + startAt)

export default defineConfig({
	plugins: [typography({ dark: true })],
	safelist: [
		range(12).map(i => `space-x-${i}`),
		range(12).map(i => `space-y-${i}`),
		[
			'items-start',
			'items-baseline',
			'items-center',
			'items-stretch',
			'items-end',
		],
		[
			'justify-start',
			'justify-end',
			'justify-center',
			'justify-between',
			'justify-around',
			'justify-evenly',
		],
	],
	shortcuts: {
		'bg-primary': 'bg-primary-600 dark:bg-primary-400',
		'text-body': 'text-slate-900 dark:text-neutral-100',
		'text-primary': 'text-primary-600 dark:text-primary-400',
		'text-secondary': 'text-slate-600 dark:text-neutral-400',
		'border-default': 'border-slate-200 dark:border-neutral-700',
		'btn-ghost':
			'nt:hover:bg-slate-200/25 !active:bg-slate-200/50 dark:(nt:hover:bg-neutral-700/25 !active:bg-neutral-700/50)',
		'text-link': 'font-bold text-primary',
		'bg-surface': 'bg-white dark:bg-neutral-800',
	},
	theme: {
		extend: {
			borderWidth: {
				DEFAULT: '2px',
			},
			colors: {
				neutral: colors.neutral,
				slate: colors.slate,
				error: colors.red,
				success: colors.green,
				warning: colors.yellow,
				info: colors.sky,
			},
			screens: {
				nt: { raw: '(hover: hover)' },
			},
		},
		fontFamily: {
			sans: ['Nunito', 'sans-serif'],
		},
	},
})
