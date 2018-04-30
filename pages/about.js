import { fonts, colors } from '../styles'
import { Container, Head } from '../components'

const styles = {
	container: {
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'center',
		flexDirection: 'column',
		maxWidth: 800,
		fontFamily: fonts.MANIFOLD,
		fontWeight: 500,
		lineHeight: 1.33,
		color: colors.RED,
		textAlign: 'center'
	},
	header: {
		fontSize: 24
	},
	spacer: {
		height: 24
	}
}

const About = () => (
	<Container>
		<Head />
		<div style={styles.container}>
			<div>Moms are awesome. For real, honest reasons.</div>
			<div style={styles.spacer} />
			<div>
				But all the cards you find at the store are just a bunch of sappy,
				generic bull shit.
			</div>
			<div style={styles.spacer} />
			<div>
				This Mother’s Day, tell your mom why you really love her. And get honest
				with the woman who taught you just how important honesty is.
			</div>
		</div>
	</Container>
)

export default About
