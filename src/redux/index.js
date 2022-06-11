import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import userReducer from "./slices/userSlice"

const reducer = {
   user: userReducer
}

const store = configureStore({
   reducer,
   middleware: [thunk],
   devTools: process.env.NODE_ENV !== 'production',
})

export default store