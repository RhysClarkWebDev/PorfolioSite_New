import React from 'react'


// SLICES



// STYLE
import './style.scss'



function Footer (): React.ReactElement {
    return (
        <footer className={'site-footer'}>
            <p>Copyright {new Date().getFullYear()} - Rhys Clark</p>
        </footer>
    )
}




export default Footer
