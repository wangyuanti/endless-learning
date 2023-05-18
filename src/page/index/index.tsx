import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setUserInfoName} from '@/store/festures/userSlice'
interface IIndexProps{
    userInfo:any
    setUserInfoName:()=>void
}
class index extends Component<IIndexProps,any> {

    render() {
        const {userInfo,setUserInfoName} = this.props
        return (
            <div>
                <p>{userInfo.name}</p>
                <button onClick={()=>{
                    setUserInfoName()
                }}>获取名称</button>
            </div>
        );
    }
}
const mapStateToProps = (state:any) => {
    return {
        userInfo: state.user.userInfo
    }
}
const mapDispatchToProps = {setUserInfoName}
export default connect(mapStateToProps,mapDispatchToProps)(index);