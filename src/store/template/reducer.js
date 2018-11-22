import state from './state'
const reducer = ( previousState = state , action ) => {
    //设置新状态
    let new_state = { ...previousState }
    //这个是actionCreator.js发送过来的action
    switch ( action.type ){
        default: break;
    }

    return new_state
}


export default reducer 