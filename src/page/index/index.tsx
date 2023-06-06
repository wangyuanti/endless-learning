import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setUserInfoName,getUserData} from '@/store/festures/userSlice'
import globalReducer from "@/store/globalReducer";
import Child from './module/child'
interface IIndexProps{
    userInfo:any
    setUserInfoName:()=>void
    getUserData:()=>void
}
type UsersProps = typeof globalReducer.endpoints;
class Index extends Component<any,any> {
    componentDidMount(): void {

        console.log('%c [ globalReducer.endpoints ]-16', 'font-size:13px; background:pink; color:#bf2c9f;', globalReducer.endpoints)
        console.log('%c [ getPost ]-21', 'font-size:13px; background:pink; color:#bf2c9f;', this.props)
        // this.props.getPost()
    }
    render() {
        const {
            userInfo,
            getTodos,
            setUserInfoName,getUserData,
        } = this.props

        
        return (
            <div>
                <p>{userInfo.name}</p>
                <button onClick={()=>{
                    setUserInfoName()
                }}>获取名称</button>
                <button onClick={()=>{
                    getUserData()
                }}>获取打印</button>
                <div><button onClick={()=>{getTodos()}}>1111</button></div>
                {/* <Child></Child> */}
            </div>
        );
    }
}
const mapStateToProps = (state:any) => {
    return {
        userInfo: state.user.userInfo
    }
}
const mapDispatchToProps1 = {
    getTodos: globalReducer.endpoints.getTodos.initiate
  };
const mapDispatchToProps = {setUserInfoName,getUserData,}
// globalReducer.endpoints
export default connect(mapStateToProps, {...mapDispatchToProps,...mapDispatchToProps1})(Index);