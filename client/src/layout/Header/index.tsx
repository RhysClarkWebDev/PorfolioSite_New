import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCursor } from '@/Contexts/CursorContext'

// CV
import Resume from '@/Downloads/rhys-clark_resume.pdf'

// STYLE
import './style.scss'



function Footer (): React.ReactElement {
    const [menuActive, setMenuActive] = useState(false)
    const menuToggleRef = useRef<HTMLDivElement | null>(null)

    const cursor = useCursor()
    const mouseOuter = cursor?.mouseOuter
    const mouseInner = cursor?.mouseInner


    // ADD HOVER EFFECTS TO PARAGRAPHS AND LINK ELEMENTS ON EVERY PAGE CHANGING
    useEffect(() => {
        const handleMouseOver = (): void => {
            mouseOuter?.current?.classList.add('cursor-menu-toggle')
            mouseInner?.current?.classList.add('cursor-menu-toggle')
        }

        const handleMouseLeave = (): void => {
            mouseOuter?.current?.classList.remove('cursor-menu-toggle')
            mouseInner?.current?.classList.remove('cursor-menu-toggle')
        }




        menuToggleRef.current?.addEventListener('mouseover', handleMouseOver)
        menuToggleRef.current?.addEventListener('mouseleave', handleMouseLeave)




        return () => {
            menuToggleRef.current?.removeEventListener('mouseover', handleMouseOver)
            menuToggleRef.current?.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [location])


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
                <Link to="/skills" onClick={toggleMenu}>
                    Skills
                </Link>
                <Link to="/contact" onClick={toggleMenu}>
                    Contact
                </Link>
                <a href={Resume} target="_blank" onClick={toggleMenu} rel="noreferrer">
                    Resume
                </a>
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
