import React from 'react'
class Card extends React.Component {
	state = {
		img: null
	}

	componentDidMount() {
		var img = new Image()
		img.src = `/static/cards/png/${this.props.link}.png`
		img.onload = () => this.setState({ img })
	}

	render() {
		const { title, link, style, bgColor } = this.props

		return (
			<React.Fragment>
				{!this.state.img ? (
					<svg
						width="600"
						height="777"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						style={{ maxWidth: '100%', height: 'auto' }}
					>
						<rect width="100%" height="100%" y="0" x="0" fill={bgColor} />
					</svg>
				) : (
					<img
						style={{ maxWidth: '100%', height: 'auto', ...style }}
						src={this.state.img.src}
					/>
				)}
			</React.Fragment>
		)
	}
}

export default Card
