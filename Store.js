import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./screen/Home/HomeSlice";
import LoginReducer from "./screen/Login/LoginSlice"

export const store = configureStore({
    reducer: {
        home: HomeReducer,
        login: LoginReducer
    }
})