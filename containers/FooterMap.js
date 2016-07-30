import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { visibleFilter, deleteCompleted } from '../actions'

function mapStateToProps(state) {
  return {
  	todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    visibleFilter: (filter) => dispatch(visibleFilter(filter)),
    deleteCompleted: () => dispatch(deleteCompleted())
  };
}

const FooterMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterMap
