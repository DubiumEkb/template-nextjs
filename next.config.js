/** @type {import('next').NextConfig} */

const path = require("path")
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "/src/assets/styles")],
	},
	webpack: (config) => {
		config.resolve.modules.push(path.resolve("./"))

		return config
	},
}

module.exports = nextConfig
