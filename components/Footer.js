import React, { Component } from 'react'

class Footer extends Component {

	filter(type) {       
		return () => {
			this.props.visibleFilter(type)
		}
	}

	findleft(todos) {
		let lefted = todos.reduce((acc, todo) => {
        	return todo.completed ? acc : acc+1;
    		}, 0);
    	return lefted;
	}

	delCom() {
        return () => {
            this.props.deleteCompleted();
        }
    }

    render() {
        return(
            <footer className="footer">
                <span className="todo-count">{this.findleft(this.props.todos)} items left</span>
                <ul className="filters">
                    <li> <a href="#/" onClick={this.filter("All")} className={this.props.classname[0]}> All </a> </li>
                    <li> <a href="#/active" onClick={this.filter("Active")} className={this.props.classname[1]}> Active </a> </li> 
                    <li> <a href="#/completed" onClick={this.filter("Completed")} className={this.props.classname[2]}> Completed </a> </li>
                </ul>
                <button className="clear-completed" onClick = {this.delCom()}>
                    Clear completed
                </button>
            </footer>
        )
    }
}

export default Footer