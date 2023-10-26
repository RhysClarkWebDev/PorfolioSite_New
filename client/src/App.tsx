import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


// PAGES
import Home from '@/Pages/Home'
import Contact from '@/Pages/Contact'
import Portfolio from '@/Pages/Portfolio'
import PortfolioTemplate from '@/Pages/PortfolioTemplate'
import Skills from '@/Pages/Skills'

// LAYOUTS
import LayoutWithHeaderFooter from '@/Layout/LayoutWithHeaderFooter'

// STYLES
import './globalStyle.scss'


function App (): React.ReactElement {
    const location = useLocation()

    return (

        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LayoutWithHeaderFooter />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio/:name" element={<PortfolioTemplate />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/skills" element={<Skills />} />
                </Route>
            </Routes>
        </AnimatePresence>

    )
}


export default App
