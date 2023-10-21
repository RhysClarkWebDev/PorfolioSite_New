import React, { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
import { useCursor } from '@/Contexts/CursorContext'


// STYLES
import './style.scss'

function Cursor (): React.ReactElement {
    // const location = useLocation()

    const cursor = useCursor()
    const mouseOuter = cursor?.mouseOuter
    const mouseInner = cursor?.mouseInner


    // FUNCTION TO MAKE CURSOR ALIGN WITH THE GENERIC CURSOR
    const handleMouseMove = (event: MouseEvent): void => {
        const { clientX, clientY } = event

        if (mouseOuter?.current != null) {
            mouseOuter.current.style.top = clientY + 'px'
            mouseOuter.current.style.left = clientX + 'px'
        }

        // Update the CSS properties for mouseInner
        if (mouseInner?.current != null) {
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


    // ADD CLICK EVENTS TO THE MOUSE
    useEffect(() => {
        const handleMouseDown = (): void => {
            mouseInner?.current?.classList.add('cursor-pressed')
        }

        const handleMouseUp = (): void => {
            mouseInner?.current?.classList.remove('cursor-pressed')
        }

        document.addEventListener('mousedown', handleMouseDown)

        document.addEventListener('mouseup', handleMouseUp)


        return () => {
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    return (
        <div className='cursor'>
            <div
                className="cursor-outer"
                ref={mouseOuter}
            />

            <div
                className="cursor-inner"
                ref={mouseInner}
            />
        </div>
    )
}



export default Cursor
