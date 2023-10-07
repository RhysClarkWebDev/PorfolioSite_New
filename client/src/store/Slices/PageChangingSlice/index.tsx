import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isPageChanging: false,
    pageChangeDirection: null
}

const pageChangingSlice = createSlice({
    name: 'pageChanging',
    initialState,
    reducers: {
        updatePageLoading: (state, action) => {
            const { isPageChanging, direction } = action.payload

            state.isPageChanging = isPageChanging
            state.pageChangeDirection = direction
        }
    }
})



export const {
    updatePageLoading
} = pageChangingSlice.actions


export default pageChangingSlice.reducer
