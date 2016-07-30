import React, { Component } from 'react'
import Header from './Header'
import InputMap from '../containers/InputMap'
import TodoListMap from '../containers/TodoListMap'
import FooterMap from '../containers/FooterMap'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        return (
            <div>
            	<Header />
            	<InputMap />
            	<TodoListMap />
            	<FooterMap />
            </div>
        )
    }
}

export default App