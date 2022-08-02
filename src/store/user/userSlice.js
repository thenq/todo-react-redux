import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    addUser: (state, action) => {
      return state
    },
  },
})

export default userSlice
