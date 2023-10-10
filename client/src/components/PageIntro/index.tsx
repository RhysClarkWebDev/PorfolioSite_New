import React from 'react'


import './style.scss'

interface PageIntroTypes {
    title: string
    paragraphs: string[]
}

function PageIntro ({ title, paragraphs }: PageIntroTypes): React.ReactElement {
    return (
        <section className="page-intro">
            <h1 className="page-title">{title}</h1>
            <div className="page-intro-paragraphs">
                {
                    paragraphs.map((text, index) => {
                        return <p key={index}>{text}</p>
                    })
                }
            </div>
        </section>
    )
}



export default PageIntro
