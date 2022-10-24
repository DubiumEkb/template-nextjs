// Import Library
import classnames from "classnames"

// Import Framework

// Import Components
import { Header, Layout } from "widgets"

// Import Store

// Import Style
import "assets/styles/globals.scss"

// Import Hooks

function MyApp({ Component, pageProps }) {
	const classname = classnames("container", "main")
	return (
		<Layout>
			<Header />
			<main className={classname}>
				<Component {...pageProps} />
			</main>
		</Layout>
	)
}

export default MyApp
