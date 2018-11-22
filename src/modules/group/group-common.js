//这个是用来获取store 里面的state
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../store/common/actionCreator'

const GroupCommon = connect( state => state.common , dispatch => {
  return bindActionCreators( actionCreator , dispatch )
})

export default GroupCommon
