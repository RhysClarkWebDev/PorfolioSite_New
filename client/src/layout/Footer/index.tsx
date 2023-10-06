import React from 'react'


// STYLE
import './style.scss'



function Footer (): React.ReactElement {
    return (
        <footer className="site-footer">
            <p>Copyright {new Date().getFullYear()} - Rhys Clark</p>
        </footer>
    )
}




export default Footer
