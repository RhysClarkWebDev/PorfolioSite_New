import React from 'react'
import { Helmet } from 'react-helmet'
import AnimatedPage from '@/Layout/AnimatedPage'


// DATA
import meta from '@/Data/metaData'
import PortfolioItems from '@/Data/portfolioItems'

// COMPONENTS
import PageIntro from '@/Components/PageIntro'
import PortfolioItem from './Components/PortfolioItem'

// STYLES
import './style.scss'

function Portfolio (): React.ReactElement {
    const thisPage = 'portfolio'

    return (
        <>
            <Helmet>
                <title>{meta[thisPage].title}</title>
                <meta name="description" content={meta[thisPage].description} />
            </Helmet>

            <main id="page-content">
                <div className="wrapper">
                    <PageIntro
                        title="Full Stack Portfolio"
                        paragraphs={[
                            `I use multiple languages and tools such as Node.JS, 
                            React, Webpack, MongoDB & Express to create a varying portfolio.`,
                            'Check out my Full-Stack & Front-End Portfolio.'
                        ]}
                    />

                    <section className="portfolio-items-grid">
                        {Object.entries(PortfolioItems).map(([key, value]) => (
                            <PortfolioItem reference={key} key={key} project={value} />
                        ))}
                    </section>


                </div>
            </main>
        </>
    )
}




export default AnimatedPage(Portfolio)
