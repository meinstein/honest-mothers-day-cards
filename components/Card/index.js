import React from 'react'
import styles from './styles'

const Card = ({ title, link, style }) => {
	return (
		<img
			style={{
				maxWidth: '100%',
				height: 'auto',
				...style
			}}
			src={`/static/cards/${link}.png`}
		/>
	)
}

export default Card
