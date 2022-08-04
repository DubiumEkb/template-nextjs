// Import Style
import "assets/styles/globals.css"

// Import Widgets
import { Header } from "widgets/header"
import { Container } from "widgets/container"
import { Footer } from "widgets/footer"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Container>
				<Component {...pageProps} />
			</Container>
			<Footer />
		</>
	)
}

export default MyApp
