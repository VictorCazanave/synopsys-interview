module.exports = {
	// Access SCSS variables in all components
	css: {
		loaderOptions: {
			sass: {
				prependData: '@import "@/styles/_variables.scss";',
			},
		},
	},
}
