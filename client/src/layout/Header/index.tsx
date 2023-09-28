import React, { useState } from 'react'


// STYLE
import './style.scss'



function Footer (): React.ReactElement {
    const [menuHover, setMenuHover] = useState(false)

    const toggleMenu = (): void => {

    }

    const handleHover = (): void => {
        this.classList.toggle('hover')
    }


    return (
        <header className="site-header">
            <nav></nav>
            <div className={menuHover ? 'menu-toggle hover' : 'menu-toggle'}
                onClick={toggleMenu}
                onMouseOver={() => {
                    setMenuHover(true)
                }}
                onMouseLeave={() => {
                    setMenuHover(false)
                }}
            >
                <i></i>
                <i></i>
                <i></i>
            </div>
        </header>
    )
}




export default Footer
