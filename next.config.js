/** @type {import('next').NextConfig} */
const path = require("path")

const noHashName = (context, _, exportName) => exportName

const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "/src/assets/styles")],
	},
	// TODO: Ссылка откуда брать картинки, если они на строннем сервере
	// images: {
	// 	domains: ["assets.example.com"],
	// },
	webpack(config, { dev }) {
		if (dev) {
			const rules = config.module.rules
				.find((rule) => typeof rule.oneOf === "object")
				.oneOf.filter((rule) => Array.isArray(rule.use))

			rules.forEach((rule) => {
				rule.use.forEach((moduleLoader) => {
					if (moduleLoader.loader?.includes("css-loader") && !moduleLoader.loader?.includes("postcss-loader"))
						moduleLoader.options.modules.getLocalIdent = noHashName
				})
			})
		}

		return config
	},
}

module.exports = nextConfig
