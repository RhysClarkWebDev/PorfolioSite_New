import React, { useRef, useEffect } from 'react'

import './style.scss'

function Cursor (): React.ReactElement {
    const mouseOuter = useRef<HTMLDivElement>(null)
    const mouseInner = useRef<HTMLDivElement>(null)

    const handleMouseMove = (event: MouseEvent): void => {
        console.log('MouseMove')
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


    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)


        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <>
            <div
                className="cursor-outer"
                ref={mouseOuter}
                onMouseDown={() => {
                    mouseOuter.current != null &&
                    (mouseOuter.current).classList.add('cursor-pressed')
                }}
            />

            <div
                className="cursor-inner"
                ref={mouseInner}
                onMouseDown={() => {
                    mouseInner.current != null &&
                    (mouseInner.current).classList.add('cursor-pressed')
                }}
            />
        </>
    )
}



export default Cursor
