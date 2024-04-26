import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
}

const authSlice = createSlice({  // here we create slice in which slice has name , initial values , reducers means collection of function 
    name: "auth",               // setToken is function that update the initial vales
    initialState: initialState,
    reducers: {
        setToken(state , value) {
            state.token = value.payload;
        }
    }
})

export const {setToken} = authSlice.actions; 
export default authSlice.reducer
