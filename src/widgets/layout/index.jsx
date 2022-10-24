// Import Style
import style from "./Layout.module.scss"

export const Layout = ({ children }) => {
	return <div className={style.rootPage}>{children}</div>
}
