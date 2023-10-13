import React from 'react'
import { Helmet } from 'react-helmet'

// META DATA
import meta from '@/Data/metaData'


// COMPONENTS
import ContactForm from './Components/ContactForm'

function Contact (): React.ReactElement {
    const thisPage = 'home'

    return (
        <>
            <Helmet>
                <title>{meta[thisPage].title}</title>
                <meta name="description" content={meta[thisPage].description} />
            </Helmet>

            <main id="page-content" className="page-centered">
                <div className="wrapper">
                    <ContactForm/>
                </div>
            </main>
        </>
    )
}




export default Contact
