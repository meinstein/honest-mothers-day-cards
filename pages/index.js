import Link from 'next/link'
import { Head, Card, Container } from '../components'
import { colors } from '../styles'
import data from '../data'

const styles = {
	gridContainer: {
		width: '100%',
		display: 'grid',
		gridGap: 36,
		gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))'
	}
}

export default () => (
	<Container>
		<Head />
		<section style={styles.gridContainer}>
			{data.map((cardData, idx) => (
				<a key={idx} href={`/card/${cardData.link}`}>
					<Card {...cardData} />
				</a>
			))}
		</section>
	</Container>
)
