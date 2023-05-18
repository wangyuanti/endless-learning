import {configureStore} from '@reduxjs/toolkit'
import { userSlice } from './festures'

 const store = configureStore({
    reducer:{
        user:userSlice
    }
})
export default store;