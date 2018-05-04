// external
import React from 'react'
// local
import Logo from './Logo'
import styles from './styles'

const Header = ({ style }) => (
	<a href="/">
		<header style={{ ...styles.container, ...style }}>
			<Logo style={styles.img} />
		</header>
	</a>
)

export default Header
