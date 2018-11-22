import React,{ Component } from 'react'
import './index.scss'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import {Link} from 'react-router-dom'
//创建组件
class LoginText extends Component{
    constructor( props ){
        super(props)
        this.handlerSubmit = this.handlerSubmit.bind( this )
    }
    handlerSubmit(e){
      e.preventDefault()
      this.props.login({
        username: this.username.value,
        password: this.password.value,
        success(){
           Toast.success('Load success !!!');
        },
        fail(){
            Toast.fail('Load failed !!!');
        }
      })
    }
    render(){
        return (
            <div className='login-text-box'>
              <form onSubmit = { this.handlerSubmit }>
                <div className = 'form-group'>
                  <input ref = { el => this.username = el } type = 'text' placeholder = '用户名'/>
                </div>
                <div className = 'form-group'>
                  <input ref = { el => this.password = el } type = 'text' placeholder = '密码'/>
                </div>
                <button>登录</button>
              </form>
              <Link to='/mine/register'>去注册</Link>
            </div>
        )
    }
}

export default LoginText
