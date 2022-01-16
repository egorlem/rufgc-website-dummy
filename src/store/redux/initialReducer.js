import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  token: null,
}

const userApi = new Promise((resolve, reject) => {
  setTimeout(() => {
    const token = localStorage.getItem('token')
    resolve(token);
  }, 1000) 
})


export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await userApi;
    return response
  }
)


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.token = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer