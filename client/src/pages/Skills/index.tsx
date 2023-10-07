import React from 'react'
import { Helmet } from 'react-helmet'

// META DATA
import meta from '@/Data/metaData'

function Skills (): React.ReactElement {
    const thisPage = 'skills'

    return (
        <>
            <Helmet>
                <title>{meta[thisPage].title}</title>
                <meta name="description" content={meta[thisPage].description} />
            </Helmet>

            <main id="page-content">
                Skills Page
            </main>
        </>
    )
}




export default Skills
