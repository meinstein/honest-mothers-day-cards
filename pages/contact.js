import { Container, Head } from '../components'
// local
import { colors, fonts } from '../styles'

const styles = {
	container: {
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		color: colors.RED,
		fontFamily: fonts.LAUWERIKS
	}
}

const Contact = () => (
	<Container>
		<Head />
		<div style={styles.container}>HonestMothersDayCards@gmail.com</div>
	</Container>
)

export default Contact
