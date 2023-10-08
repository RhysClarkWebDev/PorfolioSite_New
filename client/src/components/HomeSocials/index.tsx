import React from 'react'
import { useAppSelector } from '@/Hooks/customReduxThunk'


// SVG
import Github from '@/SVG/github.svg'
import Linkedin from '@/SVG/linkedin.svg'



// STYLES
import './style.scss'



function HomeSocials (): React.ReactElement {
    const isPageChanging = useAppSelector(store => store.pageChanging?.isPageChanging)

    return (
        <div className={'home-socials ' + (isPageChanging ? 'hide-home-socials' : '')}>
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
