import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '../slices/basketSlices'

// The global store
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
