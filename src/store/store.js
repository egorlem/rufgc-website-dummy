import { configureStore } from '@reduxjs/toolkit'
import initilReducer from './redux/initialReducer'

export const store = configureStore({
  reducer: {
    init: initilReducer
  },
})



