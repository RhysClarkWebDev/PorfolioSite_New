import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '@/Hooks/customReduxThunk'
import { useCursor } from '@/Contexts/CursorContext'
// import { useDispatch } from 'react-redux'



// SLICES
// import { updatePageLoading } from '@/Slices/PageChangingSlice'

// COMPONENTS
import Header from '../Header'
import Footer from '../Footer'
import Cursor from '@/Components/Cursor'
import GithubBanner from '@/Components/GithubBanner'

// STYLES
import './style.scss'




function LayoutWithHeaderFooter (): React.ReactElement {
    const isPageChanging = useAppSelector(store => store.pageChanging?.isPageChanging)
    // const dispatch = useDispatch()
    const cursor = useCursor()
    const mouseOuter = cursor?.mouseOuter
    const mouseInner = cursor?.mouseInner
    const location = useLocation()


    // ADD HOVER EFFECTS TO PARAGRAPHS AND LINK ELEMENTS ON EVERY PAGE CHANGING
    useEffect(() => {
        const allParagraphs = document.querySelectorAll('p')
        const allLinks = document.querySelectorAll('a')

        const handleParagraphMouseOver = (): void => {
            mouseOuter?.current?.classList.add('cursor-hover')
        }

        const handleParagraphMouseLeave = (): void => {
            mouseOuter?.current?.classList.remove('cursor-hover')
        }

        function handleLinkMouseOver (): void {
            mouseInner?.current?.classList.add('cursor-hover-link')
            mouseOuter?.current?.classList.add('cursor-hover-link')
        }

        function handleLinkMouseLeave (): void {
            mouseInner?.current?.classList.remove('cursor-hover-link')
            mouseOuter?.current?.classList.remove('cursor-hover-link')
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
    }, [location])


    useEffect(() => {
        function addAnimatingToBody (): void {
            document.querySelector('body')?.classList.add('animating')
        }

        function removeAnimatingFromBody (): void {
            document.querySelector('body')?.classList.remove('animating')
        }

        isPageChanging ? addAnimatingToBody() : removeAnimatingFromBody()
    }, [isPageChanging])


    // setTimeout(() => {
    //     const flip = !isPageChanging
    //     dispatch(updatePageLoading({ isPageChanging: flip }))
    // }, 1000)



    return (
        <div>
            <Header/>
            <GithubBanner/>
            <div
                className='body-content'
            >
                <Outlet/>
                <Cursor/>
            </div>

            <Footer/>
        </div>
    )
}



export default LayoutWithHeaderFooter
