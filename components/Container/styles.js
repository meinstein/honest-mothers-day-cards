import { colors } from '../../styles'

export default {
	container: {
		display: 'flex',
		justifyContent: 'center',
		minHeight: '100vh',
		backgroundColor: colors.PINK
	},
	subContainer: {
		display: 'flex',
		width: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		maxWidth: 1080,
		padding: '48px 36px'
	},
	header: {
		maxWidth: 500,
		marginBottom: 48
	}
}
