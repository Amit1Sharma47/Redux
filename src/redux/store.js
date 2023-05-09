import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice.js"
export default configureStore({
    reducer: {
        counter: counterReducer,
    }
})