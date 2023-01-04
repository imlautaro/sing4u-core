import colors from 'windicss/colors'

export default defineNuxtConfig({
	extends: '..',
	typescript: {
		includeWorkspace: true,
	},
	windicss: {
		config: {
			theme: {
				extend: {
					colors: {
						primary: colors.teal,
					},
				},
			},
		},
	},
})
