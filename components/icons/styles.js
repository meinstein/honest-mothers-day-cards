import { colors } from '../../styles'

export default {
	container: {
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
	svg: {
		width: 20,
		height: 20,
		fill: colors.RED
	}
}
