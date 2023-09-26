import React from 'react'
import { Helmet } from 'react-helmet'

// META DATA
import meta from '@/Data/metaData'

function Contact (): React.ReactElement {
    const thisPage = 'home'

    return (
        <>
            <Helmet>
                <title>{meta[thisPage].title}</title>
                <meta name="description" content={meta[thisPage].description} />
            </Helmet>

            <p>Contact Page</p>
        </>
    )
}




export default Contact
