import React from 'react';
import ReactDOM from 'react-dom';
//引入全局的rem
import './modules/rem'
import 'swiper/dist/css/swiper.min.css'
//引入ant desigin 的css样式
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

//引入全局的基础sass
import './stylesheets/main.scss'

//引入全局的axios
import './modules/axios-util'

import './assets/font/css/font-awesome.min.css'


import App from './App';
import * as serviceWorker from './serviceWorker';

//路由测试

/*
  1. 在react router 1-3的版本中，我们使用的是react-router这个包
  2. 但是现在react router 4版本中（今年出的） 我们不在使用react-router，我们使用的是react-router-dom
  3. 在新本中，路由有两种： HashRouter   另一个叫做 BrowserRouter
  4. 要在我们组件的外层抱着路由 <HashRouter><App/></HashRouter>
*/
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
// 在原应用组件上包裹一层，使原来整个应用成为Provider的子组件
// 接收Redux的store作为props，通过context对象传递给子孙组件上的connect
import store from './store'
ReactDOM.render(
    <Provider store = {store}>
      <Router>
        <App/>
      </Router>
    </Provider>
    , document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
