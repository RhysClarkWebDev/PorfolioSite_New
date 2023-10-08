import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isPageChanging: false,
    pageChangeState: null,
    pageChangeDirection: null
}

const pageChangingSlice = createSlice({
    name: 'pageChanging',
    initialState,
    reducers: {
        updatePageLoading: (state, action) => {
            const { isPageChanging, pageChangeState, direction } = action.payload

            state.isPageChanging = isPageChanging
            state.pageChangeState = pageChangeState
            state.pageChangeDirection = direction
        },
        resetPageState: (state, action) => {
            state = initialState
        }
    }
})



export const {
    updatePageLoading
} = pageChangingSlice.actions


export default pageChangingSlice.reducer
