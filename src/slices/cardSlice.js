import {createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-hot-toast'

const initialState = {
    totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
    notPresent: null
}

const cardSlice = createSlice({  // here we create slice in which slice has name , initial values , reducers means collection of function 
    name: "cart",               // setToken is function that update the initial vales
    initialState: initialState,
    reducers: {
        setTotalItems(state , value) {
            state.token = value.payload;
        },
        // addToCart: (state, action) => {
        //     const course = action.payload
        //     const index = state.cart.findIndex((item) => item._id === course._id)
      
        //     if (index >= 0) {
        //       // If the course is already in the cart, do not modify the quantity
        //       toast.error("Course already in cart")
        //       return
        //     }
        //     // If the course is not in the cart, add it to the cart
        //     state.cart.push(course)
        //     // Update the total quantity and price
        //     state.totalItems++
        //     state.total += course.price
        //     // Update to localstorage
        //     localStorage.setItem("cart", JSON.stringify(state.cart))
        //     localStorage.setItem("total", JSON.stringify(state.total))
        //     localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
        //     // show toast
        //     toast.success("Course added to cart")
        //   },
    }
})

export const { setUser  } = cardSlice.actions;  // profileSlice ke function ko export kr rhe hai actions means function
export default cardSlice.reducer
