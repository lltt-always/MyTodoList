import { connect } from 'react-redux'
import { switchCompleted, deleteTask } from '../actions'
import TodoList from '../components/TodoList'

function getVisibleTodos(todos, filter) {
	switch(filter) {
		case "All":
			return todos;
			break;
		case "Active":
			return todos.filter((todo) => {
				if(todo.completed == false){
					return todo
				}
			})
			break;
		case "Completed":
			return todos.filter((todo) => {
				return todo.completed == true
			})
	}
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibleFilter)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    switchCompleted: (index) => dispatch(switchCompleted(index)),
    deleteTask: (index) => dispatch(deleteTask(index))
  };
}

const TodoListMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListMap
