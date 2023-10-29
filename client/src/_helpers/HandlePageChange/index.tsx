import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// SLICES
import { updatePageLoading } from '@/Slices/PageChangingSlice'

export function useHandlePageChange (): (to: string) => void {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (to: string) => {
        dispatch(updatePageLoading({ isPageChanging: true }))

        const timeout1 = setTimeout(() => {
            navigate(to)
        }, 1000)

        const timeout2 = setTimeout(() => {
            dispatch(updatePageLoading({ isPageChanging: false }))
        }, 2500)

        return () => {
            // Clean up timeouts if the component unmounts before the timeouts complete
            clearTimeout(timeout1)
            clearTimeout(timeout2)
        }
    }
}



export default useHandlePageChange
