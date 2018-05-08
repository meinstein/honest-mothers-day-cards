import React from 'react'
import Link from 'next/link'
// local
import { BASE_URL } from '../CardDetails'
import { Header, IconFacebook, IconTwitter } from '..'
import Heart from './Heart'
import styles from './styles'

const Footer = ({ pathname }) => (
	<footer style={styles.container}>
		{console.log(pathname)}
		<a style={styles.link} href="/about">
			About
		</a>
		<div style={{ width: '33.33%', textAlign: 'center' }}>
			{pathname ? (
				<div style={styles.social}>
					<IconFacebook
						href={`https://www.facebook.com/sharer?u=${BASE_URL}${pathname}`}
					/>
					<div style={{ width: 6 }} />
					<IconTwitter
						href={`https://www.twitter.com/share?text=${"Honest Mother's Day Cards"}&url=${BASE_URL}${pathname}`}
					/>
				</div>
			) : (
				<a href="/">
					<Heart style={styles.heart} />
				</a>
			)}
		</div>
		<a style={styles.link} href="/contact">
			Contact
		</a>
	</footer>
)

export default Footer
