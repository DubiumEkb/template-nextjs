// Import Next
import { Html, Head, Main, NextScript } from "next/document"

const Document = () => {
	return (
		<Html lang="ru">
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link type="image/x-icon" rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<body>
				<Main />

				<NextScript />
			</body>
		</Html>
	)
}

export default Document
