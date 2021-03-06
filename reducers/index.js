import { combineReducers } from 'redux'
import { getInitState } from '../localStorage'

const todos = (state = getInitState.initTodos, action) => {
    switch (action.type) {
        /*修改state的方式要返回一个新的对象，才会自动渲染页面
        state 必须是不可变数据结构，splice 方法会修改原始数据，不能用于 Reducer*/
        case 'ADD_TODO':
            {
                return [
                    ...state,
                    {
                        title: action.title,
                        completed: false
                    }
                ]
            }

        case 'SWI_COM':
            {
                let todos = state.map((todo, i) => {
                    if(i == action.index) {
                        return Object.assign({}, todo, {completed: !todo.completed})
                    }
                    else {
                        return todo
                    }
                })
                return todos
            }

        case 'DEL_TASK':
            {
                let todos = state.filter((todo, i) => {
                    if(i != action.index) {
                        return todo
                    }
                })
                return todos
            }

        case 'DEL_COM':
            {
                let todos = state.filter((todo) => {
                    if(!todo.completed){
                        return todo
                    }
                })
                return todos
            }

        default:
            return state
    }
}

const visibleFilter = (state = getInitState.initType, action) => {

    switch(action.type) {
        case "VISIBLE_FILTER":
            switch(action.filter) {
                case "All":
                    return {
                        filter: action.filter,
                        classname: ["selected", "", ""]
                    };
                    break;
                case "Active":
                    return {
                        filter: action.filter,
                        classname: ["", "selected", ""]
                    }
                    break;
                case "Completed":
                    return {
                        filter: action.filter,
                        classname: ["", "", "selected"]
                    };
                    break;
                default:
                    return state
            }
        default:
            return state
    }
}

const mytodos = combineReducers({
    todos,
    visibleFilter
})


export default mytodos