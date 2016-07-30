import './css/app.css'
import './css/base.css'

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import mytodos from './reducers'
import App from './components/App'

let store = createStore(mytodos)

function newrender() {
	render(
		<Provider store={store}>
		    <App />
		</Provider>,
		document.getElementById('root')
	)
}

newrender()
