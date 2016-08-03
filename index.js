import './css/app.css'
import './css/base.css'

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import App from './components/App'
import { setLocalStorage } from './localStorage'

function newrender() {
	render(
		<Provider store={store}>
		    <App />
		</Provider>,
		document.getElementById('root')
	)
}

store.subscribe(setLocalStorage);
newrender();

