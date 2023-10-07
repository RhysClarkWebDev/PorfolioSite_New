import React from 'react'

// SVG
import Github from '@/SVG/github.svg'
import Linkedin from '@/SVG/linkedin.svg'

// STYLES
import './style.scss'



function HomeSocials (): React.ReactElement {
    return (
        <div className='home-socials'>
            <a href="https://github.com/RhysClarkWebDev" target='_blank' rel="noreferrer">
                <div className='social-link github'>
                    <Github fill='white'/>
                </div>
            </a>

            <a href="" target='_blank'>
                <div className='social-link linkedin'>
                    <Linkedin fill='white'/>
                </div>
            </a>
        </div>
    )
}



export default HomeSocials
