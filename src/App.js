import React, { Component } from 'react';
//我们react router 没有路由表，但是提供了一个Route的路由工具
import { Home,List,Buycar,Mine } from './component/pages'
import AppFooter from './component/common/appFooter'
import { Route,Switch,withRouter } from 'react-router-dom'
import { GroupCommon } from './modules/group';
class App extends Component {
  constructor( props ){
    super(props)
    // this.state = {
    //   isRoute: true
    // }
  }
  componentWillMount(){
    this.props.getInitUser()
  }
 
  renderRoutes(){
    //渲染函数
    let { routes } = this.props
    return (
      <Switch>
        {  routes.map( item => <Route key = { item.id } path = { item.path } component = { item.component } exact = { item.exact }></Route> ) }
      </Switch>
    )
  }
  renderFooter(  ){
    //如何书写呢    this.props
    let { pathname } = this.props.location
    //根据一波分析，我们最好将要去掉底部栏的路由pathname全部用一个数组存起来
    let no_footer_nav = [''] ;
    if( no_footer_nav.indexOf(pathname) > -1){
      return ''
    }
    return <AppFooter/>
  }
  render() {
    //console.log( this )//?get post
    //里面可以书写很多的路由了
    //Route身上有两个属性： path  component
    //exact,霸道性要高，只有匹配到当前的path之后，它才渲染,但是弊端是当页面有很多其他的子路由的时候，我们的Route会携带很多的exact,所以react-router为了解决这个问题，提出了Switch工具
    //我们希望每一次只出来一个路由： 为了解决这个问题，我们使用一个Switch的工具
    //使用Switch要放在Route的外面
    //但是Switch中Route其中一个path='/'，这个Route上要加一个exact
    // let { isRoute } = this.state
    return (
      <div className="App">
        { this.renderRoutes() }
        { this.renderFooter() }
      </div>
    );
  }
}

App.defaultProps = {
  routes: [
    {
      id: 1,
      path: '/',
      component: Home,
      exact: true
    },
    {
      id: 2,
      path: '/list',
      component: List,
      exact: false
    },
    {
      id: 3,
      path: '/buycar',
      component: Buycar,
      exact: false
    },
    {
      id: 4,
      path: '/mine',
      component: Mine,
      exact: false
    }
  ]
}

export default withRouter(GroupCommon(App));
