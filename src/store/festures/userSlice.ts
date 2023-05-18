import {createSlice} from '@reduxjs/toolkit'
export interface userState{
    userInfo:{
        name:string
    }
}
const initialState:userState = {
    userInfo:{name:''}
}
export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserInfoName:(state)=>{
            state.userInfo.name = 'wyt'
        }
    }
})
export const {setUserInfoName} =userSlice.actions;
export default userSlice.reducer