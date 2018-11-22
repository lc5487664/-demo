##项目开发流程

####git( GitHub  码云) 团队级的开发  git
1. 组长： 创建一个远程的仓库
2. 邀请各个组员，给赋予权限
3. 给每一个组员创建一个分支，创建好公共的分支
4. 克隆仓库到本地，多复制一份出来（这一份作为我们分支的开发目录）， 有的同学直接在仓库代码中开发，代码提交的时候，代码丢失，
5. 首先，当我们开发完之后，在开发目录中先做好测试，然后再去提交远程分支
6. 组长： 统管项目

####开发---》基础配置
1. 使用脚手架新建项目  
    create-react-app siku
2. 项目抽离
    yarn eject
3. 安装依赖
4. 配置我们自己的项目目录结构（ 目录可以按照自己的方式来走 ）
    assets ---> base64
    component  组件
        common
        pages
    modules --> 基础工具
        rem.js
    stylesheets --> scss目录
        _base.scss
        _mixin.scss
        _reset.scss
        _common.scss
        main.scss
5. 配置rem
    将 rem引入到src/index.js
6. 配置sass环境
    cnpm i node-sass sass-loader -D
    如果你出问题了： webpack配置有些问题，
    在项目入口文件 src/index.js 中引入全局的基础sass配置

7. 数据--》 redux 应用状态管理，同意管理整个项目中的各种数据
    新建一个store 文件夹
        index.js  store
        reducer.js
        新建一个公共的common
            state.js  数据
            const.js  常量（reducer  actionCreator）
            reducer.js 数据管理者
            actionCreator 动作触发者
8. axios ---->挂载在全局的Component原型上
    modules/axios-util
        get.js
            import axios from 'axios'
            import {Component} from 'react'
            //跨域问题
            axios.defaults.crossDomain = true //是否允许跨域
            axios.defaults.withCredentials  = true//默认形式可以进行跨域，并且可以对cookie做一些设置
            const Get = ()=> {
                return axios.get( {url,{
                    params: data
                }})
            }
            export default Get

        post.js
            import axios from 'axios'
            import {Component} from 'react'
            //跨域问题
            axios.defaults.crossDomain = true //是否允许跨域
            axios.defaults.withCredentials  = true//默认形式可以进行跨域，并且可以对cookie做一些设置
            const config = {
                headers: {
                    "Content-Type":  'application/x-www-form-urlencoded'
                }
            }
            const Post = ({url,data})=> {
                return axios.post( url,data,config )
            }
            export default Get
        index.js
            //目的，要想vue一样讲两个方法挂在实例
            import {Component} from 'react'
            //导入两个方法
            import Get from './get'
            import Post from './post'

            Component.prototype.$get = Get
            Component.prototype.$post = Post

            export default {
                Get , Post
            }

9. 在component中新建
        common
        pages
            Home
            Buycar
            List
            Mine
            index.js
                    import  Home from './Home/Home'
                    import  Buycar from './Buycar/Buycar'
                    import  List from './List/List'
                    import  Mine from './Mine/Mine'
                    export {
                        Home,Buycar,List,Mine
                    }

10.搞搞react路由
1. 我们在react 16.0的版本，我们已经不再使用'react-router'了，我们使用的是react-router-dom

2. 路由一共有两种，一种叫做 BrowserRouter  另一种叫做HashRouter

3.引入路由 ,使用Router代替BrowserRouter
    import { BrowserRouter as Router} from 'react-router-dom'

4. 使用路由工具
    import { Route } from 'react-router-dom'

    <Router>
        <Route ></Route>
    </Router>

6. 给Route添加一个path和component属性
    path = '/home'
    component = { Home }

7. exact作用，
    1. Router中只能有一个，所以我们使用exact一次只渲染一个
    2. 当我们存在 如： /list/a 这种形式，我们要给/list 路由组件加一个exact

8. 当我们Router中需要多个的时候，我们要使用Switch的工具

    import { Switch,Link } from 'react-router-dom'
        <Switch>
            <Route path='/' component = {Home} exact></Route>
            <Route path='/list' component = {List} exact></Route>
            <Route path='/mine' component = {Mine} ></Route>
            <Route path='/buycar' component = {Buycar} ></Route>
        </Switch>

    Link类似于我们的router-link 身上也是有to属性

    NavLink 类似     于active-class ,点击Navlink之后给我们的a标签身上添加一个active类名（相当于当前样式）


9. 底部栏的开发
    1. 新建一个appFooter的组件
    2. 底部栏和我们的路由渲染之间的关系
        1. 他们是非父子组件，但是我们现在要做通信 ？
            1.1 我们可以在每一个路由组件中引入一个AppFooter组件， 这样每一个路由组件就成为了父组件，但是每一个组件都要引用，消耗很大，
            1.2 我们可以直接将AppFooter放在App组件身上
    移动端底部栏一般高度是40-55px之间

10. 底部栏（ 效果 有的人家是有底部栏，有的路由是没有底部栏）
    1. Mine组件: react当中不需要像vue一样有路由钩子，因为react中组件全部被Route组件包裹住了，而Route组件会给我们的Mine等组件自动添加上一些属性

    2. 但是这些性质只适用于 路由组件 ，比如App组件就不是路由组件，它身上就没有这些属性

    3. 解决办法： react-router-dom中提供了一个withRouter的工具： 可以将一个基础组件变成一个伪路由，withRouter(App)






### 我们每一个项目都是有一个主题色
