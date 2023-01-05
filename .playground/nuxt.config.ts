import { colors } from '@unocss/preset-mini'

export default defineNuxtConfig({
	extends: '..',
	typescript: {
		includeWorkspace: true,
	},
	unocss: {
		theme: {
			colors: {
				primary: colors!.pink,
			},
		},
	},
})
