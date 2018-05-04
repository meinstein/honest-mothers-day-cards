import NextHead from 'next/head'
import { string } from 'prop-types'
import { BASE_URL } from '../CardDetails'

const defaultDescription =
	"Mom's are awesome. For real, honest reasons. This Mother's Day, tell your mom why you really love her with a free, honest Mother's Day card."
const defaultOGURL = BASE_URL
const defaultOGImage = `${BASE_URL}/static/logo.png`
const defaultOGImageWidth = 1092
const defaultOGImageHeight = 505

const Head = props => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>Honest Mother's Day Cards</title>
		<meta
			name="description"
			content={props.description || defaultDescription}
		/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/static/favicon.png" />
		<link rel="stylesheet" type="text/css" href="/static/styles/reset.css" />
		<link rel="stylesheet" type="text/css" href="/static/styles/styles.css" />
		<meta property="og:url" content={props.url || defaultOGURL} />
		<meta property="og:title" content={props.title || ''} />
		<meta
			property="og:description"
			content={props.description || defaultDescription}
		/>
		<meta name="twitter:site" content={props.url || defaultOGURL} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image" content={props.ogImage || defaultOGImage} />
		<meta
			property="og:image:width"
			content={props.ogImageWidth || defaultOGImageWidth}
		/>
		<meta
			property="og:image:height"
			content={props.ogImageHeight || defaultOGImageHeight}
		/>
		<script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js" />
		{props.children}
	</NextHead>
)

Head.propTypes = {
	title: string,
	description: string,
	url: string,
	ogImage: string
}

export default Head
