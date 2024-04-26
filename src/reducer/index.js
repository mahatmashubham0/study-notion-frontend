import {combineReducers} from '@reduxjs/toolkit'

import authReducer from '../slices/authScline'

const rootReducer = combineReducers({   // combine all reducer to one reducer
    auth: authReducer,
})

export default rootReducer