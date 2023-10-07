import { configureStore, combineReducers } from '@reduxjs/toolkit'


// SLICES
import PageChangingSlice from './Slices/PageChangingSlice'


const rootReducer = combineReducers({
    pageChanging: PageChangingSlice
})



export const store = configureStore({
    reducer: rootReducer
})
