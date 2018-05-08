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
	chevronLeft: {
		...chevronBase,
		left: 32
	},
	chevronRight: {
		...chevronBase,
		right: 32
	},
	chevron: {
		fill: 'white',
		width: 36,
		height: 36
	}
}
