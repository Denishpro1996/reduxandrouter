import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './ReduxSlice/counterSlice'
import ApiSlice from './ReduxSlice/ApiSlice'
import ApiSecond from './ReduxSlice/ApiSecond'

export const store = configureStore({
  reducer: {
    counterSlice,
    ApiSlice,
    ApiSecond
  },
})