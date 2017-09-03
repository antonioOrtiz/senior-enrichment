import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from "../reducers";

import component from '../components/StudentView'

const mapStateToProps = function(state, ownProps) {
    return {
        students: state.students
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { fetchStudents } = bindActionCreators(actionCreators, dispatch)

    return {
        fetchStudents
    }
}

export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(component)