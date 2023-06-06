import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setUserInfoName,setUserInfoAge,getUserData} from '@/store/festures/userSlice'
import globalReducer from '@/store/globalReducer'
import Child from './module/child'
interface IIndexProps{
    userInfo:any
    setUserInfoName:()=>void
    getUserData:()=>void
    setUserInfoAge:(obj:any)=>void
    getTodos:any
}
class Index extends Component<IIndexProps,any> {
    getTodos=()=>{
        this.props.getTodos().unwrap().then((e:any)=>{
            console.log('data:',e)
        })
    }
    render() {
        const {
            userInfo,
            setUserInfoName,
            setUserInfoAge,
            getUserData
        } = this.props
        return (
            <div>
                <p>name:{userInfo.name}</p>
                <p>age:{userInfo.age}</p>
                <button onClick={()=>{
                    setUserInfoName()
                }}>获取名称</button>
                <button onClick={()=>{
                    setUserInfoAge({age:18})
                }}>获取年龄</button>
                <button onClick={()=>{
                    getUserData()
                }}>createAsyncThunk获取名称</button>
                {/* <p>getTodos函数获取的值:{data}</p> */}
                <button onClick={()=>{
                    this.getTodos()
                }}>getTodos</button>
                <Child></Child>
            </div>
        );
    }
}
const mapStateToProps = (state:any) => {
    return {
        userInfo: state.user.userInfo
    }
}

const mapDispatchToProps = {setUserInfoName,setUserInfoAge,getUserData,getTodos:globalReducer.endpoints.getTodos.initiate}
// globalReducer.endpoints
export default connect(mapStateToProps, mapDispatchToProps)(Index);