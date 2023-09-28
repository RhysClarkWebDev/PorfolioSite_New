import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// PAGES
import Home from '@/Pages/Home'
import Contact from '@/Pages/Contact'
import Portfolio from '@/Pages/Portfolio'

// LAYOUTS
import LayoutWithHeaderFooter from '@/Layout/LayoutWithHeaderFooter'

// STYLES
import './globalStyle.scss'


function App (): React.ReactElement {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<LayoutWithHeaderFooter/>}>
                    <Route path="/" element={<Home/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/portfolio" element={<Portfolio/>} />
                </Route>



            </Routes>
        </Router>
    )
}


export default App
