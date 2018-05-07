import React from 'react'
class Card extends React.Component {
	state = {
		loaded: false
	}

	componentDidMount() {
		if (this.img.complete) {
			this.setState({ loaded: true })
		}
	}

	render() {
		const { title, link, style, bgColor } = this.props
		return (
			<div style={{ position: 'relative' }}>
				<svg
					width="600"
					height="777"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					style={{ maxWidth: '100%', height: 'auto' }}
				>
					<rect width="100%" height="100%" y="0" x="0" fill={bgColor} />
				</svg>
				<img
					ref={node => (this.img = node)}
					className={this.state.loaded ? 'fade-in-card' : 'hidden-card'}
					style={{
						maxWidth: '100%',
						height: 'auto',
						position: 'absolute',
						top: 0,
						left: 0,
						...style
					}}
					onLoad={() => this.setState({ loaded: true })}
					src={`/static/cards/png/${this.props.link}.png`}
				/>
			</div>
		)
	}
}

export default Card
