import React from 'react'
import { Helmet } from 'react-helmet'

// META DATA
import meta from '@/Data/metaData'

function Portfolio (): React.ReactElement {
    const thisPage = 'portfolio'

    return (
        <>
            <Helmet>
                <title>{meta[thisPage].title}</title>
                <meta name="description" content={meta[thisPage].description} />
            </Helmet>

            <main id="page-content">
                Portfolio Page
            </main>
        </>
    )
}




export default Portfolio
