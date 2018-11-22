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