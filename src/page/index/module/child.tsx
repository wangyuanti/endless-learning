import React,{FC} from 'react'
import {useGetTodosQuery,useGetPostMutation} from "@/store/globalReducer";
const Child:FC<any> = (props:any)=>{
    // const { isLoading, data, isError, isSuccess } = useGetPostMutation({name:'wyt'})
    const [addNewPost, { isLoading }] = useGetPostMutation()
    // console.log('%c [  ]-16', 'font-size:13px; background:pink; color:#bf2c9f;',data)
    const a = async()=>{
        await addNewPost({}).unwrap()
    }
    return <div><button onClick={()=>{a()}}>123</button></div>
}
export default Child