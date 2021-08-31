import { Fragment, useContext, useEffect } from 'react'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { AuthContext } from '../contexts/AuthContext'
import { api } from '../services/api'
import { GetServerSideProps } from 'next'
import { getAPIClient } from '../services/axios'
import { Container } from '../styles/pages/Home'

const navigation = ['Dashboard', 'Team', 'Projects', 'Calendar', 'Reports']
const profile = ['Your Profile', 'Settings']

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        api.get('/profile/');
    }, [])

    return (
        <Container>
            <Head>
                <title>Dashboard</title>
            </Head>
            <main>
                <h1>Dashboard</h1>

            </main>
        </Container>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const apiClient = getAPIClient(ctx);
    const { ['nextauth.token']: token } = parseCookies(ctx)

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    await apiClient.get('/profile/')

    return {
        props: {}
    }
}




