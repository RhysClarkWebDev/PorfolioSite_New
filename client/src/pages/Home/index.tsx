import React from 'react'
import { Helmet } from 'react-helmet'

// COMPONENTS
import HomeSocials from '@/Components/HomeSocials'

// META DATA
import meta from '@/Data/metaData'

// STYLES
import './style.scss'

function Home (): React.ReactElement {
    const thisPage = 'home'

    return (

        <div className={'body-content'}>

            <Helmet>
                <title>{meta[thisPage].title}</title>
                <meta name="description" content={meta[thisPage].description} />
            </Helmet>

            <main id="page-content">
                <HomeSocials/>
                <section className="current">

                </section>
                <section className="loader">

                </section>
            </main>
        </div>
    )
}




export default Home
