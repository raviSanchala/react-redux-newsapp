import {configureStore } from '@reduxjs/toolkit'
import newsSlices from '../features/newsSlices'

export const store = configureStore({
    reducer :{
        news : newsSlices
    }
})