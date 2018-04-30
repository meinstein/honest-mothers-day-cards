import React from 'react'
import styles from './styles'

const Header = ({ style }) => (
	<a href="/">
		<header style={{ ...styles.container, ...style }}>
			<img src="/static/logo.png" style={styles.img} alt="Logo" />
		</header>
	</a>
)

export default Header
