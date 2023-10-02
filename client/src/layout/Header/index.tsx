import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

// STYLE
import './style.scss'



function Footer (): React.ReactElement {
    const [menuActive, setMenuActive] = useState(false)
    const menuToggleRef = useRef<HTMLDivElement | null>(null)


    const toggleMenu = (): void => {
        if (menuToggleRef.current !== null) {
            switch (menuActive) {
                case true:
                    (menuToggleRef.current).classList.remove('animate-2')
                    setTimeout(() => {
                        if (menuToggleRef.current !== null) {
                            (menuToggleRef.current).classList.remove('animate-1')
                        }
                    }, 500)
                    setMenuActive(false)
                    break
                case false:
                    (menuToggleRef.current).classList.add('animate-1')
                    setTimeout(() => {
                        if (menuToggleRef.current !== null) {
                            (menuToggleRef.current).classList.add('animate-2')
                        }
                    }, 500)
                    setMenuActive(true)
                    break
            }
        }
    }

    return (
        <header className={'site-header ' + (!menuActive ? 'hidden' : '')}>
            <nav>
                <Link to="/" onClick={toggleMenu}>
                    About
                </Link>
                <Link to="/portfolio" onClick={toggleMenu}>
                    Portfolio
                </Link>
                <Link to="/contact" onClick={toggleMenu}>
                    Contact
                </Link>
                <Link to="/downloads/rhys-clark_resume.pdf" onClick={toggleMenu}>
                    Resume
                </Link>
            </nav>
            <div ref={menuToggleRef} className="menu-toggle"
                onClick={toggleMenu}
                onMouseEnter={() => {
                    menuToggleRef.current?.classList.add('hover')
                }}
                onMouseLeave={() => {
                    menuToggleRef.current?.classList.remove('hover')
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
