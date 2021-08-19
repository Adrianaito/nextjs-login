import Head from 'next/head'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Create Next App</title>
            </Head>
            <main>
                <h1>
                    Hello!
                </h1>
            </main>
        </Container>
    )
}
export default Home
