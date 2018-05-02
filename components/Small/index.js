import { fonts, colors } from '../../styles'

export default ({ style, ...unused }) => (
	<div
		style={{
			fontFamily: fonts.LAUWERIKS,
			color: colors.RED,
			fontSize: '0.75em',
			lineHeight: 1.6,
			...style
		}}
		{...unused}
	/>
)
