import { createSlice } from "@reduxjs/toolkit"

const initialState = { isRegisted: false }

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      signIn(state) {
         state.isRegisted = true
      },
      removeUser(state) {
         state.isRegisted = false
      }
   }
})

export const { signIn, removeUser } = userSlice.actions
export default userSlice.reducer