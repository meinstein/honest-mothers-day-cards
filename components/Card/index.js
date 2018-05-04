import React from 'react'

const Card = ({ title, link, style }) => {
	return (
		<img
			style={{
				maxWidth: '100%',
				height: 'auto',
				...style
			}}
			src={`/static/cards/png/${link}.png`}
		/>
	)
}

export default Card
