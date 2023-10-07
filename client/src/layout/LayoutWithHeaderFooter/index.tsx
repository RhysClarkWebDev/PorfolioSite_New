import React from 'react'
import { Outlet } from 'react-router-dom'

// STYLES
import './style.scss'

// COMPONENTS
import Header from '../Header'
import Footer from '../Footer'
import Cursor from '@/Components/Cursor'
import GithubBanner from '@/Components/GithubBanner'

function LayoutWithHeaderFooter (): React.ReactElement {
    return (
        <div>
            <Header/>
            <GithubBanner/>
            <div
                className="body-content"
            >
                <Outlet/>
                <Cursor/>
            </div>

            <Footer/>
        </div>
    )
}



export default LayoutWithHeaderFooter
