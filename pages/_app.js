import React, { Suspense } from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Suspense>
                <Component {...pageProps} />
            </Suspense>
        </Layout>
    )
}

export default MyApp