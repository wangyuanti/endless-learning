import {configureStore} from '@reduxjs/toolkit'
import { userSlice } from './festures'
import globalReducer from './globalReducer'
 const store = configureStore({
    reducer:{
        user:userSlice,
        [globalReducer.reducerPath]: globalReducer.reducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat([globalReducer.middleware])
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;