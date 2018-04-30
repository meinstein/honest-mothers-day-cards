import data from '../data'

const getInitialProps = ({ pathname }) => {
	const param = pathname.split('/')[1]
	const card = data.find(card => `/card/${card.link}` === pathname)
	return {
		card
	}
}

export default getInitialProps
