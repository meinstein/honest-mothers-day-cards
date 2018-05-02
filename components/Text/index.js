import { fonts, colors } from '../../styles'

export default ({ style, ...unused }) => (
	<div
		style={{
			fontFamily: fonts.LAUWERIKS,
			color: colors.RED,
			fontSize: '1em',
			lineHeight: 1.4,
			...style
		}}
		{...unused}
	/>
)
