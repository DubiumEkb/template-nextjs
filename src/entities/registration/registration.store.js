import { action, makeAutoObservable } from "mobx"
import { enableStaticRendering } from "mobx-react-lite"


enableStaticRendering(typeof window === "undefined")

class Registration {
	// Переменные

	constructor() {
		makeAutoObservable(this)
	}

	// Функции
}

export default new Registration()
