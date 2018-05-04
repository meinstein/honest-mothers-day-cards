import React from 'react'

class Card extends React.Component {
	constructor() {
		super()
		this.state = {
			loaded: false
		}
	}

	componentDidMount() {
		if (this.img.complete) {
			this._handleImageLoaded()
		}
		// just to be safe
		setTimeout(() => this._handleImageLoaded(), 1000)
	}

	_handleImageLoaded() {
		if (!this.state.loaded) {
			this.setState({ loaded: true })
		}
	}

	render() {
		const { title, link, style } = this.props

		return (
			<img
				ref={node => (this.img = node)}
				className={this.state.loaded ? 'fade-in-card' : 'hidden-card'}
				onLoad={() => this._handleImageLoaded()}
				style={{ maxWidth: '100%', height: 'auto', ...style }}
				src={`/static/cards/png/${link}.png`}
			/>
		)
	}
}

export default Card
