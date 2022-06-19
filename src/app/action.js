export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM'
export const EDIT_TODO_LIST = 'EDIT_TODO_LIST'
export const TOGGLE_TODO_ITEM = 'TOGGLE_TODO_ITEM'

export const addTodoItem = (title, id) => ({
  type: ADD_TODO_ITEM,
  title,
  id,
})

export const removeTodoItem = (id) => ({
  type: REMOVE_TODO_ITEM,
  id,
})

export const editTodoItem = (id, title) => ({
  type: EDIT_TODO_LIST,
  id,
  title,
})

export const toggleTodoItem = (id) => ({
  type: TOGGLE_TODO_ITEM,
  id,
})
