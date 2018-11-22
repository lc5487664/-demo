import React,{ Component } from 'react'
import './index.scss'
import { GroupCommon } from '../../../../modules/group'
import LoginText from './loginText'
import LoginPhone from './loginPhone'
import { NavBar,Icon } from 'antd-mobile'
//创建组件
class Login extends Component{
    constructor( props ){
        super(props)
        this.state = {
          urlType: 'text'
        }
      
    }
   
    renderForm(){
      //问题?urlType为什么要在这里再拿一次
      let { urlType } = this.state
      let title = '短信快捷登录'
      let type = 'phone'
      let Form = LoginText
      let login = this.props.loginText
      if( urlType !== 'text'){
        title = '账号密码登录'
        Form = LoginPhone
        type = 'text'
        login = this.props.loginPhone
      }
      let handleLogin = () => {
        this.setState({
          urlType: type
        })
      }
      //当满足什么条件的时候，我们title 还有组件要改变呢？
      return (
        <div className = 'content'>
          <Form login = { login }/>
          <button onClick = { handleLogin } className = 'checklogin'>
            { title }
          </button>
        </div>
      )
    }
    render(){
        let { urlType } = this.state ;
        return (
            <div className='login-box'>
              <NavBar
                mode="dark"
                icon={<Icon type="left" />}
               >
                    { urlType === 'text'?'账号密码登录' : '短信快捷登录' }
               </NavBar>
               { this.renderForm() }

            </div>
        )
    }
}

export default GroupCommon(Login)
