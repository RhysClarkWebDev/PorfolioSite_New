import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '@/Hooks/customReduxThunk'
import { useDispatch } from 'react-redux'

// SLICES
import { updatePageLoading } from '@/Slices/PageChangingSlice'

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
