import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import portfolioItems from '@/Data/portfolioItems'


// STYLE
import './style.scss'

function PortfolioTemplate (): React.ReactElement {
    // Use the useParams hook to get the variable from the URL
    const { name } = useParams()

    // Use the name variable to retrieve the corresponding page data from the object
    const selectedPage = name !== undefined ? portfolioItems[name] : null

    if (selectedPage !== null) {
        return (
            <>
                <Helmet>
                    <title>{selectedPage.meta.title}</title>
                    <meta name="description" content={selectedPage.meta.description} />
                </Helmet>
                <main id="page-content">


                    <section className="wrapper">
                        <div className="project-container">
                            <div className="project-intro">
                                <h1>{selectedPage.name}</h1>
                                <p>{selectedPage.subtitle}</p>
                            </div>

                            {selectedPage !== null &&
                                <div className="project-images">

                                </div>}


                            {selectedPage !== null &&
                                <div className="project-text-section brief">
                                    <h2>In Brief</h2>
                                </div>}


                            {selectedPage !== null &&
                                <div className="project-text-section creation">
                                    <h2>Creation of Project</h2>
                                </div>}


                            {selectedPage !== null &&
                                <div className="project-text-section future">
                                    <h2>Future Features</h2>
                                </div>}


                            {selectedPage !== null &&
                                <div className="project-text-section technologies">
                                    <h2>Technologies Used</h2>
                                </div>}


                            {selectedPage !== null &&
                                <div className="project-text-section links">
                                    <h2>View Results</h2>
                                </div>}
                        </div>
                    </section>
                </main>
            </>
        )
    }

    return (
        <p>Page Not Found</p>
    )
}

export default PortfolioTemplate
