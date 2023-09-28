import React from 'react'
import { Helmet } from 'react-helmet'

// META DATA
import meta from '@/Data/metaData'

function Home (): React.ReactElement {
    const thisPage = 'home'

    return (
        <>
            <Helmet>
                <title>{meta[thisPage].title}</title>
                <meta name="description" content={meta[thisPage].description} />
            </Helmet>

            <main id="page-content">
                Home Page
            </main>
        </>
    )
}




export default Home
