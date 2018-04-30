import React from 'react'
// local
import styles from './styles'

const Button = ({ children, style, onClick }) => (
	<div style={{ ...styles.container, ...style }}>{children}</div>
)

export default Button
