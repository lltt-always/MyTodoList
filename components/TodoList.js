import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {

    render() {
        return (
        	<ul className = "todo-list">
        		{
        			this.props.todos.map((todo, index) => {
        				let classname = "",
                            ifchecked = "";
        				if(todo.completed){
        					classname = "completed";
                            ifchecked = "checked";
        				}
        				return <TodoItem key={index} index={index} todo={todo}
                                classname={classname} ifchecked={ifchecked}
                                switchCompleted={this.props.switchCompleted}
                                deleteTask={this.props.deleteTask}/>
        			})
        		}
            </ul>
        )
    }
}

export default TodoList