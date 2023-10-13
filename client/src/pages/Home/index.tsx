import React from 'react'
import { Helmet } from 'react-helmet'

// COMPONENTS
import HomeSocials from '@/Components/HomeSocials'
import ParticleText from './Components/ParticleText'

// META DATA
import meta from '@/Data/metaData'

// STYLES
import './style.scss'

function Home (): React.ReactElement {
    const thisPage = 'home'

    return (

        <>

            <Helmet>
                <title>{meta[thisPage].title}</title>
                <meta name="description" content={meta[thisPage].description} />
            </Helmet>

            <main id="page-content" className="page-centered">
                <HomeSocials/>
                <ParticleText/>
            </main>
        </>
    )
}




export default Home
