import axios from "axios"
import { config } from "shared/config"

// Create axios instance.
export default axios.create({
	baseURL: config.apiUrl,
	withCredentials: false,
	headers: {
		Service: config.Service,
	},
})
