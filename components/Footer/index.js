import React from 'react'
import Link from 'next/link'
// local
import { Header } from '..'
import styles from './styles'

const Footer = () => (
	<footer style={styles.container}>
		<a style={styles.link} href="/about">
			About
		</a>
		<div style={{ width: '33.33%', textAlign: 'center' }}>
			<img src="/static/heart.svg" style={{ width: 60 }} />
		</div>
		<a style={styles.link} href="/contact">
			Contact
		</a>
	</footer>
)

export default Footer
