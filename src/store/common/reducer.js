import state from './state'
import { CHANGE_USER_INFO } from './const'
const reducer = ( previousState = state , action ) => {
    //设置新状态
    let new_state = { ...previousState }
    //这个是actionCreator.js发送过来的action
    switch ( action.type ){
        case CHANGE_USER_INFO:
          new_state.userInfo = action.userInfo
          break;
        default: break;
    }

    return new_state
}


export default reducer
