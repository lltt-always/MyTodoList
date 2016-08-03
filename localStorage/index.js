import { store } from '../store'

function initLocalStorage() {
    if(!localStorage.getItem("todos")) {
        let initTodos = [{
            title: "learn react",
            completed: false
        },{
            title: "learn redux",
            completed: false
        }];
        localStorage.setItem("todos", JSON.stringify(initTodos));
    }

    if(!localStorage.getItem("visibleFilter")) {
        let initType = {
            filter: "All",
            classname: ["selected", "", ""]
        }
        localStorage.setItem("visibleFilter", JSON.stringify(initType));
    }
}

initLocalStorage();

export let getInitState = {
    initTodos: JSON.parse(localStorage.getItem("todos")),
    initType: JSON.parse(localStorage.getItem("visibleFilter"))
}

export const setLocalStorage = function() {
    let state = store.getState();
    localStorage.setItem("todos", JSON.stringify(state.todos));
    localStorage.setItem("visibleFilter", JSON.stringify(state.visibleFilter));
}