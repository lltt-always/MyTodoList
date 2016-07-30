import React, { Component } from 'react'

class TodoItem extends Component {

    comChange() {
        return () => {
            let index = this.props.index;
            this.props.switchCompleted(index);
        }
    }

    delTask() {
        return () => {
            let index = this.props.index;
            this.props.deleteTask(index);
        }
    }

    render() {
        return (
            <li className = { this.props.classname }>
            	<div className = "view">
            		<input className = "toggle" type = "checkbox" checked = { this.props.ifchecked } onChange = {this.comChange()}/>
            		<label>{ this.props.todo.title }</label>
            		<button className = "destroy" onClick = {this.delTask()}> </button>
            	</div>
            </li>
        )
    }
}

export default TodoItem