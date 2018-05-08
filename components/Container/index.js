// local
import { initGA, logPageView } from '../../util'
import { Header, Footer } from '..'
import styles from './styles'

class Container extends React.Component {
	componentDidMount() {
		// import ReactGA from 'react-ga'
		if (!window.GA_INITIALIZED) {
			initGA()
			window.GA_INITIALIZED = true
		}
		logPageView()
	}

	render() {
		return (
			<div style={styles.container}>
				<div style={styles.subContainer}>
					<Header style={styles.header} />
					{this.props.children}
					<Footer pathname={this.props.pathname} />
				</div>
			</div>
		)
	}
}

export default Container
