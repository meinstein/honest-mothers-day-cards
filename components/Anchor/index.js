export default ({ href, ...unused }) => (
	<a
		style={{ textDecoration: 'underline' }}
		target="_target"
		href={href}
		{...unused}
	/>
)
