import React from 'react'
import { Helmet } from 'react-helmet'

// META DATA
import meta from '@/Data/metaData'


// COMPONENTS
import ContactForm from './Components/ContactForm'

// STYLES
import './style.scss'

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
                    <div className="contact-intro">
                        <h1>Get in Touch</h1>
                        <p>If you want to get in touch, either for employment or talk to me about collaboration on a
                        project, fill in the form below and I will get back to you as soon as possible.</p>
                    </div>

                    <ContactForm/>
                </div>
            </main>
        </>
    )
}




export default Contact
