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
		<Header style={{ maxWidth: 120 }} />
		<a style={styles.link} href="/contact">
			Contact
		</a>
	</footer>
)

export default Footer
