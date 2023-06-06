import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
export interface userState{
    userInfo:{
        name:string,
        age:number
    }
}
const initialState:userState = {
    userInfo:{name:'',age:0}
}
const getUserApi = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                code:200,
                data:{
                    name:'wangyuanti'
                }
            })
        },1000)
    })
}
export const getUserData=createAsyncThunk('user/getUser',async ()=>{
    const res = await getUserApi()
    return res
})
export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserInfoName:(state)=>{
            state.userInfo.name = 'wyt'
        },
        setUserInfoAge:(state,{payload})=>{
            state.userInfo.age = payload.age
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getUserData.pending,()=>{
        })
        .addCase(getUserData.fulfilled,(state, {payload}:{payload:any})=>{
            state.userInfo.name=payload?.data.name
            console.log(state.userInfo.name)
        })
    },
})
export const {setUserInfoName,setUserInfoAge} =userSlice.actions;
export default userSlice.reducer