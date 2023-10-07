import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


// PAGES
import Home from '@/Pages/Home'
import Contact from '@/Pages/Contact'
import Portfolio from '@/Pages/Portfolio'
import Skills from '@/Pages/Skills'

// LAYOUTS
import LayoutWithHeaderFooter from '@/Layout/LayoutWithHeaderFooter'

// STYLES
import './globalStyle.scss'


function App (): React.ReactElement {
    return (
        <Router>
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<LayoutWithHeaderFooter />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/skills" element={<Skills />} />
                    </Route>
                </Routes>
            </AnimatePresence>
        </Router>
    )
}


export default App
