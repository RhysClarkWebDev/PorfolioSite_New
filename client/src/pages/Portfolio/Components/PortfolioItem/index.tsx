import React from 'react'
import { Link } from 'react-router-dom'
import ConvertCamelToWords from '@/Utils/ConvertCamelToWords'

import './style.scss'

interface PortfolioItemTypes {
    project: {
        name: string
        displayImage: string
        subtitle: string
        images: React.ReactElement[]
        brief: string[]
        creation: string[]
        futureFeatures: string[]
        technologies: string[]
        links: {
            live: string
            repo: string
        }
        tags: string[]
        meta: {
            title: string
            description: string
        }
    }
    reference: string
}

function PortfolioItem ({ project, reference }: PortfolioItemTypes): React.ReactElement {
    console.log(reference)
    return (
        <div className="portfolio-item">
            <Link to={`/portfolio/${reference}`}>
                <div className="project-bar">
                    <h2>{project.name}</h2>
                    <i></i>
                </div>
                <div className="project-item-image">
                    <img src={project.displayImage} alt="" />
                </div>
                <div className="project-item-overlay">
                    <div className="project-item-tags">
                        {project?.tags.slice(0, 6).map(tag => {
                            return (
                                <div key={project.name} className="project-tag">
                                    <p>{ConvertCamelToWords(tag)}</p>
                                </div>
                            )
                        })}

                        <div className="more-tag project-tag">
                            <p>More...</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}



export default PortfolioItem
