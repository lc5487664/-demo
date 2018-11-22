import React,{ Component } from 'react'
import './index.scss'
import { GroupCommon } from '../../../../modules/group'
import {  NavBar,Icon} from 'antd-mobile';
//创建组件
class User extends Component{
    constructor( props ){
        super(props)
    }
    render(){
       let { userInfo } = this.props
        return (
            <div className='user-box'>
              <NavBar
                mode="dark"
                icon={<Icon type="left" />}
               >
                    User
               </NavBar>
              <h4>用户：{ !userInfo || userInfo.username }</h4>
              <button onClick = { this.props.exit }>
                退出
              </button>
            </div>
        )
    }
}

export default GroupCommon(User)
