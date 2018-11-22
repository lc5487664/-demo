import React,{ Component } from 'react'
import './index.scss'
//创建组件
class LoginPhone extends Component{
    constructor( props ){
        super(props)
        this.handlerSubmit = this.handlerSubmit.bind( this )
    }
    handlerSubmit(e){
      e.preventDefault()
      this.props.login({
        phone: this.phone.value,
        code: this.code.value,
        success(){
          alert('登录成功')
        },
        fail(){
          alert('登录失败')
        }
      })
    }
    render(){
        return (
            <div className='login-text-box'>
              <form onSubmit = { this.handlerSubmit }>
                <div className = 'form-group'>
                  <input ref = { el => this.phone = el } type = 'text' placeholder = '手机号'/>
                </div>
                <div className = 'form-group'>
                  <input ref = { el => this.code = el } type = 'text' placeholder = '验证码'/>
                </div>
                <button>登录</button>
              </form>
            </div>
        )
    }
}

export default LoginPhone
