import { connect } from 'react-redux'
import Input from '../components/Input'
import { addTodo } from '../actions'

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddClick: (text) => {dispatch(addTodo(text))}
  };
}

const InputMap = connect(
	mapStateToProps,
  	mapDispatchToProps
)(Input)

export default InputMap
