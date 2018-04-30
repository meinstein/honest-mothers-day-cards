import React from 'react'
// local
import { Card, Button, Container, Head } from '../../components'
import styles from './styles'

class CardDetails extends React.Component {
	render() {
		const { card } = this.props

		return (
			<Container>
				<Head>
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/styles/card-details-container.css"
					/>
				</Head>
				<div className="card-details-container">
					<div className="card-details-section">
						<Card {...card} />
					</div>
					{/* spacer */}
					<div style={styles.textContainer} className="card-details-section">
						<div style={styles.title}>{`"${card.title}"`}</div>
						<div style={styles.desc}>{card.desc}</div>
						<div style={styles.buttons}>
							<a href={`/static/cards/${card.link}.png`} download>
								<Button>download</Button>
							</a>
							<a href={this._href} style={{ marginLeft: 12 }}>
								<Button>email</Button>
							</a>
						</div>
						<div style={styles.socialMedia}>
							<span style={{ ...styles.icon, marginRight: 6 }}>
								<i className="fab fa-facebook-f" />
							</span>
							<span style={{ ...styles.icon, marginRight: 6 }}>
								<i className="fab fa-twitter" />
							</span>
						</div>
					</div>
				</div>
			</Container>
		)
	}

	get _href() {
		const { card } = this.props
		const newLine = '%0D%0A'
		const link = `http://www.honestmothersdaycards.com/card/${card.link}`
		return `mailto:''?subject=${card.title}&body=${
			card.desc
		}${newLine}${newLine}${link}`
	}
}

export default CardDetails
