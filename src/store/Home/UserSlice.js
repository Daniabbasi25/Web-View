import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    name: {},
  }
  export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
      
      AddUser: (state, action) => {
        state.name = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { AddUser } = UserSlice.actions
  
  export default UserSlice.reducer