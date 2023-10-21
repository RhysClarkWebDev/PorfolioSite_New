import React from 'react'


// STYLES
import './style.scss'

function GithubBanner (): React.ReactElement {
    return (
        <a
            href="https://github.com/RhysClarkWebDev"
            target="_blank"
            rel="noreferrer"

        >
            <div className="github-banner">
                <p>Follow on Github</p>
            </div>
        </a>
    )
}

export default GithubBanner
