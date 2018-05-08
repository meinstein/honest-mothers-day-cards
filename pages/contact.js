// local
import { Container, Head, Text } from '../components'
import { getInitialProps } from '../util'
import { colors, fonts } from '../styles'

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		color: colors.RED,
		fontFamily: fonts.LAUWERIKS,
		textAlign: 'center'
	}
}

const Contact = ({ pathname }) => (
	<Container pathname={pathname}>
		<Head />
		<div style={styles.container}>
			<Text>Contact Clare Jensen and Taylor Black at:</Text>
			<Text style={{ marginTop: 4 }}>HonestMothersDayCards@gmail.com</Text>
		</div>
	</Container>
)

Contact.getInitialProps = getInitialProps

export default Contact
