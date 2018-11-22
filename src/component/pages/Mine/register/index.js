import React,{ Component } from 'react'
import './index.scss'
import {  NavBar,Icon,Toast} from 'antd-mobile';
//创建组件
class RegisterText extends Component{
    constructor( props ){
        super(props)
        this.handlerSubmit = this.handlerSubmit.bind( this )
    }

    handlerSubmit(e){
        e.preventDefault()
        let user={
            username:this.username.value,
            password:this.password.value
        }
        Toast.success('Load success !!!');
         Toast.fail('Load failed !!!');
         localStorage.user=JSON.stringify(user)
       
        
    }
    render(){
        return (
            <div className='register-text-box'>
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
               >
                    注册
               </NavBar>
            <form onSubmit = { this.handlerSubmit }>
                <div className = 'form-group'>
                  <input ref = { el => this.username = el } type = 'text' placeholder = '用户名'/>
                </div>
                <div className = 'form-group'>
                  <input ref = { el => this.password = el } type = 'text' placeholder = '密码'/>
                </div>
                <button>注册</button>
              </form>
            </div>
        )
    }
}

export default RegisterText
