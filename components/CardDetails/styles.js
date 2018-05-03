import { fonts, colors } from '../../styles'

const chevronBase = {
	position: 'absolute',
	transform: 'translateY(-50%)',
	color: 'white',
	fontSize: '2.5em',
	top: '50%'
}

export default {
	container: {
		display: 'flex',
		flexGrow: 1
	},
	textContainer: {
		marginTop: 32,
		color: colors.RED,
		fontSize: '1.1em'
	},
	buttons: {
		display: 'flex',
		alignItems: 'center',
		marginTop: 12,
		flexWrap: 'wrap'
	},
	btn: {
		marginTop: 12
	},
	btnTxt: {
		paddingTop: 2
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
	},
	chevronLeft: {
		...chevronBase,
		left: 32
	},
	chevronRight: {
		...chevronBase,
		right: 32
	}
}
