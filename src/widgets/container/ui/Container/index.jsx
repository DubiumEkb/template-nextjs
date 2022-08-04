// Import Components

// Import Style
import style from "./container.module.scss"

export const Container = ({ children }) => {
	return <main className={style.main}>{children}</main>
}
