import React, {Component} from 'react'
//Link就类似于router-Link,但是没有当前类名
//react-router又提供了一个NavLink的工具，可以有activeClass 类名提供
import { Link,NavLink } from 'react-router-dom'
import './index.scss'
class AppFooter extends Component{
    constructor( props ){
        super( props )
    }
    renderFooter(){
      let { footerNavs } = this.props
      return (
        <ul>
            { footerNavs.map( item => <li  key = { item.id }>
                <NavLink
                  to = { item.path }
                  activeclass = 'active'
                  exact = { item.exact }
                >
                  <i className={"fa " + "fa-" + item.icon}></i>
                  <span>{ item.title }</span>
                </NavLink>
              </li>)}
        </ul>
      )
    }
    render(){
        return (
            <div className = 'footer-box'>
              { this.renderFooter() }
            </div>
        )
    }
}
AppFooter.defaultProps = {
  footerNavs: [
    {
      id: 1,
      icon: 'user-o',
      title: '首页',
      path: '/',
      exact: true
    },
    {
      id: 2,
      icon: 'list',
      title: '列表',
      path: '/list'
    },
    {
      id: 3,
      icon: 'shopping-bag',
      title: '购物袋',
      path: '/buycar'
    },
    {
      id: 4,
      icon: 'smile-o',
      title: '我的',
      path: '/mine'
    },
  ]
}
export default AppFooter
