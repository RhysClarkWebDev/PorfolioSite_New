import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import portfolioItems from '@/Data/portfolioItems'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'

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

                            {selectedPage?.images !== null &&
                                <div className="project-images">
                                    <AwesomeSlider animation="cubeAnimation">
                                        {
                                            selectedPage?.images.map((image, index) => {
                                                return (
                                                    <div key={index} data-src={image}/>
                                                )
                                            })
                                        }
                                    </AwesomeSlider>
                                </div>}


                            {selectedPage?.brief !== null &&
                                <div className="project-text-section brief">
                                    <h2>In Brief</h2>
                                    {selectedPage?.brief.map((para, index) => {
                                        return (
                                            <p key={index}>{para}</p>
                                        )
                                    })}
                                </div>}


                            {selectedPage?.creation !== null &&
                                <div className="project-text-section creation">
                                    <h2>Creation of Project</h2>
                                    {selectedPage?.creation.map((para, index) => {
                                        return (
                                            <p key={index}>{para}</p>
                                        )
                                    })}
                                </div>}


                            {selectedPage?.futureFeatures !== null && selectedPage?.futureFeatures !== undefined &&
                                <div className="project-text-section future">
                                    <h2>Future Features</h2>
                                    {selectedPage?.futureFeatures.map((para, index) => {
                                        return (
                                            <p key={index}>{para}</p>
                                        )
                                    })}
                                </div>}


                            {selectedPage?.technologies !== null &&
                                <div className="project-text-section technologies">
                                    <h2>Technologies Used</h2>
                                    <ul>
                                        {selectedPage?.technologies.map((tech, index) => {
                                            return (
                                                <li key={index}>{tech}</li>
                                            )
                                        })}
                                    </ul>
                                </div>}


                            {selectedPage?.links !== null && selectedPage?.links !== undefined &&
                                <div className="project-text-section links">
                                    <h2>View Results</h2>

                                    <div>
                                        {selectedPage?.links.live !== null &&
                                        <a href={selectedPage?.links.live}
                                            target="_blank"
                                            className="result-button"
                                            rel="noreferrer"
                                        >
                                        View Live
                                        </a>}


                                        {selectedPage?.links.repo !== null &&
                                        <a href={selectedPage?.links.repo}
                                            target="_blank"
                                            className="result-button"
                                            rel="noreferrer"
                                        >
                                        View Repo
                                        </a>}
                                    </div>

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
