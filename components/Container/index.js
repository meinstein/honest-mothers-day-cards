import { Header, Footer } from '..'
import styles from './styles'

export default ({ children }) => (
	<div style={styles.container}>
		<div style={styles.subContainer}>
			<Header style={styles.header} />
			{children}
			<Footer />
		</div>
	</div>
)
