import { fonts, colors } from '../../styles'

export default {
	container: {
		display: 'flex',
		flexGrow: 1
	},
	textContainer: {
		marginTop: 32,
		color: colors.RED
	},
	title: {
		fontFamily: fonts.MANIFOLD,
		fontWeight: 500
	},
	desc: {
		fontFamily: fonts.MANIFOLD,
		fontWeight: 300,
		marginTop: 24
	},
	buttons: {
		display: 'flex',
		alignItems: 'center',
		marginTop: 24
	},
	socialMedia: {
		display: 'flex',
		marginTop: 12
	},
	icon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 32,
		height: 32,
		fontSize: 20,
		border: `1px solid ${colors.RED}`,
		borderRadius: '50%',
		color: colors.RED
	}
}
