import React from 'react'
import { Link } from 'react-router-dom'


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

                </div>
            </Link>
        </div>
    )
}



export default PortfolioItem
