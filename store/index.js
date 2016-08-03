import { createStore } from 'redux'
import mytodos from '../reducers'

export const store = createStore(mytodos);