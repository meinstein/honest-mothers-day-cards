import { fonts, colors } from '../../styles'

export default ({ style, ...unused }) => (
	<div
		style={{
			fontFamily: fonts.LAUWERIKS,
			color: colors.RED,
			fontSize: '1.3em',
			lineHeight: 1.5,
			textTransform: 'uppercase',
			...style
		}}
		{...unused}
	/>
)
