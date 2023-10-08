import { configureStore, combineReducers } from '@reduxjs/toolkit'


// SLICES
import PageChangingSlice from './Slices/PageChangingSlice'


export interface RootState {
    pageChanging: {
        isPageChanging: boolean
        pageChangeState: unknown
        pageChangeDirection: string
    }
}



const rootReducer = combineReducers({
    pageChanging: PageChangingSlice
})



export const store = configureStore({
    reducer: rootReducer
})
