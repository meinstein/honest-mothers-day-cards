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
		fontFamily: fonts.LAUWERIKS,
		lineHeight: 1.33
	},
	desc: {
		fontFamily: fonts.LAUWERIKS,
		marginTop: 24,
		lineHeight: 1.33
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
