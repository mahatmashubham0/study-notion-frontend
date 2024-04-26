import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: null,
}

const profileSlice = createSlice({  // here we create slice in which slice has name , initial values , reducers means collection of function 
    name: "profile",               // setToken is function that update the initial vales
    initialState: initialState,
    reducers: {
        setUser(state , value) {
            state.token = value.payload;
        },
        getUser(state , value) {
            state.token = value.payload;
        },
    }
})

export const {setUser  , getUser} = profileSlice.actions;  // profileSlice ke function ko export kr rhe hai actions means function
export default profileSlice.reducer
