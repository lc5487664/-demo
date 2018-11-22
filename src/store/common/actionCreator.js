import { CHANGE_USER_INFO } from './const'
const actionCreator = {
    //放很多的方法
    getInitUser(){
      let userInfo=localStorage.userInfo ?JSON.parse(localStorage.userInfo):null
      return {
        type:CHANGE_USER_INFO,
        userInfo:userInfo
      }
    },
    loginText( {username,password,success,fail} ){
      //是由组件中的事件来的
      //发送一个action 给reducer
      return dispatch => {
        //后台的逻辑 通过id来帮助我们取两个数据
        //axios去请求数据
        setTimeout(()=>{
          let user=JSON.parse(localStorage.user)
            if( username === user.username &&  password === user.password){
                let userInfo={
                  username:user.username
                }

                dispatch({
                  type:CHANGE_USER_INFO,
                  userInfo:{
                    userInfo:user.username
                  }
                })
                if( success ) success()
                localStorage.userInfo=JSON.stringify(userInfo)
                return false;
              }
              if( fail ) fail()
        },1000)

      }
    },
    loginPhone( {phone,code,success,fail} ){
      //是由组件中的事件来的
      //发送一个action 给reducer
      return dispatch => {
        //后台的逻辑 通过id来帮助我们取两个数据
        setTimeout(()=>{
            if( phone === '13872559249' &&  code === "123"){
                dispatch({
                  type:CHANGE_USER_INFO,
                  userInfo: {
                    username: 'lc'
                  }
                })
                if( success ) success()
                return false;
              }
              if( fail ) fail()
        },1000)

      }
    },
    exit(){
      return {
        type: CHANGE_USER_INFO,
        userInfo: null
      }
    }
}


export default actionCreator
