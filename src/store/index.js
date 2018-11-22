import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'//为了解决某些事件点击出现效果需要等待之后再去渲染视图
import reducer from './reducer'
const store = createStore( reducer,applyMiddleware( thunk ) )

export default store
