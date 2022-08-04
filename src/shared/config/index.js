let url

process.env.DEV_STATUS === "dev" ? (url = "") : (url = "")

export const config = {
	apiUrl: url,
	Service: "",
	limit: 10,
}
