import { createSlice } from "@reduxjs/toolkit";
import { callLogin } from "./LoginThunks";
import { saveLocalStorage, getLocalStorage } from "../../common/LocalStorage";
import { KEY_LOCAL_TOKEN } from "../../common/Constant";

const initialState = {
    loginStatus: false,
    accessToken: "empty",
    modalVisible: false,
    user: {
        email: "",
        password: "",
    }
}

const logInSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        onPressLoginButton: (state,action) => {
            state.modalVisible = true
        },
        setUser: (state,action) => {
            state.user = action.payload
        },
        clearLoginData: (state, action) => {
            state.loginStatus = false
            state.accessToken = "empty"
        },
        getAccessToken: (state, action) => {
            getLocalStorage(KEY_LOCAL_TOKEN).then((data) => {
                console.log(`Token: ${data}`)
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(callLogin.fulfilled,(state, action) => {
            let token = action.payload.accessToken
            saveLocalStorage(KEY_LOCAL_TOKEN,token)
            token = getLocalStorage(KEY_LOCAL_TOKEN)
            .then((data) => console.log(`Token: ${data}`))
        
        }).addCase(callLogin.rejected,(state,action) => {
            console.log(action.error)
        }) 
    }
})

export const {onPressLoginButton, setUser, clearLoginData, getAccessToken} = logInSlice.actions
export default logInSlice.reducer