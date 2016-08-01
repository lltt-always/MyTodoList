export const addTodo = (title) => {
  return {
    type: 'ADD_TODO',
    title
  }
}

export const switchCompleted = (index) => {
  return{
    type: 'SWI_COM',
    index
  }
}

export const visibleFilter = (filter, classname) => {
	return{
		type: 'VISIBLE_FILTER',
		filter,
		classname
	}
}

export const deleteTask = (index) => {
	return{
		type: 'DEL_TASK',
		index
	}
}

export const deleteCompleted = () => {
	return{
		type: 'DEL_COM'
	}
}