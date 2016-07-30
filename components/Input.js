import React, { Component } from 'react'

class Input extends Component {

	handleChange() {
        return () => {
            let node = this.refs.input;
            let title = node.value.trim();
            this.props.onAddClick(title);
            node.value = '';
        }
	}

    render() {
        return (
            <div>
                <input className="new-todo" placeholder="What needs to be done?" type="text" ref="input"/>
                <button className="add-taskItem" onClick={this.handleChange()}>Add</button>
            </div>
        )
    }
}

export default Input