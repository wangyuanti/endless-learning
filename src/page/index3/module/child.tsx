import React,{FC} from 'react'
// import {useSelector, useDispatch} from 'react-redux';
import {setUserInfoName,getUserData} from '@/store/festures/userSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {useGetTodosQuery} from "@/store/globalReducer";
const Child:FC<any> = (props:any)=>{
    // const {userInfo} = useSelector((store:any)=>store.user)
    // const dispatch = useDispatch()
    const { isLoading, data, isError, isSuccess } = useGetTodosQuery({name:'wyt'})
    const {userInfo}  = useAppSelector(state => state.user);
    const dispatch = useAppDispatch(); 
    return <div>
            <div>函数组件名称：{userInfo.name}</div>
            <button onClick={()=>{dispatch(setUserInfoName())}}>函数组件获取名称</button>
            <button onClick={()=>{dispatch(getUserData() ) }}>函数组件createAsyncThunk获取名称</button>
            {isLoading ? <div>loading...</div> : <div>403......</div>}
        </div>
}
export default Child