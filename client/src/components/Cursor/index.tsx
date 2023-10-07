import React, { useRef, useEffect } from 'react'

import './style.scss'

function Cursor (): React.ReactElement {
    const mouseOuter = useRef<HTMLDivElement>(null)
    const mouseInner = useRef<HTMLDivElement>(null)

    // FUNCTION TO MAKE CURSOR ALIGN WITH THE GENERIC CURSOR
    const handleMouseMove = (event: MouseEvent): void => {
        const { clientX, clientY } = event

        if (mouseOuter.current != null) {
            mouseOuter.current.style.top = clientY + 'px'
            mouseOuter.current.style.left = clientX + 'px'
        }

        // Update the CSS properties for mouseInner
        if (mouseInner.current != null) {
            mouseInner.current.style.top = clientY + 'px'
            mouseInner.current.style.left = clientX + 'px'
        }
    }

    // ADD THE EVENT LISTENER TO THE CURSOR TO MAKE IT MOVE
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])


    // ADD HOVER EFFECTS TO PARAGRAPHS AND LINK ELEMENTS
    useEffect(() => {
        const allParagraphs = document.querySelectorAll('p')
        const allLinks = document.querySelectorAll('a')

        const handleParagraphMouseOver = (): void => {
            mouseOuter.current?.classList.add('cursor-hover')
        }

        const handleParagraphMouseLeave = (): void => {
            mouseOuter.current?.classList.remove('cursor-hover')
        }

        function handleLinkMouseOver (): void {
            mouseInner.current?.classList.add('cursor-hover-link')
            mouseOuter.current?.classList.add('cursor-hover-link')
        }

        function handleLinkMouseLeave (): void {
            mouseInner.current?.classList.remove('cursor-hover-link')
            mouseOuter.current?.classList.remove('cursor-hover-link')
        }

        allParagraphs.forEach((paragraph) => {
            paragraph.addEventListener('mouseover', handleParagraphMouseOver)
            paragraph.addEventListener('mouseleave', handleParagraphMouseLeave)
        })

        allLinks.forEach((link) => {
            link.addEventListener('mousemove', handleLinkMouseOver)
            link.addEventListener('mouseleave', handleLinkMouseLeave)
        })

        return () => {
            allParagraphs.forEach((paragraph) => {
                paragraph.removeEventListener('mouseover', handleParagraphMouseOver)
                paragraph.removeEventListener('mouseleave', handleParagraphMouseLeave)
            })

            allLinks.forEach((link) => {
                link.removeEventListener('mouseover', handleLinkMouseOver)
                link.removeEventListener('mouseleave', handleLinkMouseLeave)
            })
        }
    }, [])


    // ADD CLICK EVENTS TO THE MOUSE
    useEffect(() => {
        const handleMouseDown = (): void => {
            mouseInner.current?.classList.add('cursor-pressed')
        }

        const handleMouseUp = (): void => {
            mouseInner.current?.classList.remove('cursor-pressed')
        }

        document.addEventListener('mousedown', handleMouseDown)

        document.addEventListener('mouseup', handleMouseUp)


        return () => {
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    return (
        <>
            <div
                className="cursor-outer"
                ref={mouseOuter}
            />

            <div
                className="cursor-inner"
                ref={mouseInner}
            />
        </>
    )
}



export default Cursor
