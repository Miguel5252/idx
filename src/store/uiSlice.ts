import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface uiState {
  isLoading: boolean
}

const initialState: uiState = {
  isLoading: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
 
  },
})

// Action creators are generated for each case reducer function
export const { setIsLoading} = uiSlice.actions

export default uiSlice.reducer