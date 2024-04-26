import {combineReducers} from '@reduxjs/toolkit'

import authReducer from '../slices/authScline'
import profileSlice from '../slices/profileSlice'
import cardSlice from '../slices/cardSlice'

const rootReducer = combineReducers({   // combine all reducer to one reducer
    auth: authReducer,
    profile: profileSlice,
    cart: cardSlice
})

export default rootReducer