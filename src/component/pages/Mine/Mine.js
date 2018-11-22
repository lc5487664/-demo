import React,{ Component } from 'react'
import './index.scss'

import Login from './login'
import User from './user'
import Register from './register'
import {GroupCommon} from '../../../modules/group'

import { Route} from 'react-router-dom'
//创建组件
class Mine extends Component{
    constructor( props ){
        super(props)
    }
    componentWillReceiveProps( props ){
      //如果有传入props参数，说明是当前的props,如果不传入，表示的是上一个状态的属性

      let { userInfo } = props
      //当我们点击了退出按钮之后，我们当前props 和 this.props这两个就会变得不同
      let { pathname } = props.location
      if( props.userInfo !== this.props.userInfo || pathname === '/mine'){
        this.checkLogin( props )
      }
    //   this.checkLogin()
    }
    componentWillMount(){
      //组件一 出现就要去验证 userInfo是否有传入
      this.checkLogin()
    }
    checkLogin( props ){
      let { userInfo } = (props || this.props)
      let { replace } = this.props.history
      //路由跳转
      if( userInfo ){
        //说明登录信息已经有了，页面就可以跳转套/mine/user‘
        replace('/mine/user')
      }else{
        //userInfo不存在，那就去登录页面
        replace('/mine/login')
      }
    }
    render(){
        console.log( this.props.userInfo )
        return (
            <div className='mine-box'>
                <Route path = '/mine/login' component = { Login }></Route>
                <Route path = '/mine/user' component = { User }></Route>
                <Route path = '/mine/register' component = { Register }></Route>
            </div>
        )
    }
}

export default GroupCommon(Mine)
