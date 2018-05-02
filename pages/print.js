import data from '../data'
import { Head } from '../components'

class PrintView extends React.Component {
	componentDidMount() {}

	render() {
		return (
			<React.Fragment>
				<Head>
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/styles/print-view.css"
					/>
				</Head>
			</React.Fragment>
		)
	}
}

PrintView.getInitialProps = ({ query }) => query

export default PrintView
