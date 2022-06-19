// const addTodoItem = (state, action) => ({
//   ...state,
//   todoList: [
//     ...state.todoList,
//     {
//       id: action.id,
//       title: action.title,
//       isActive: action.isActive,
//     },
//   ],
// })

// const removeTodoItem = (state, action) => {
//   const editedTodoList = [...state.todoList]
//   editedTodoList.filter((item) => item.id !== action.id)
//   return { ...state, todoList: [...editedTodoList] }
// }

import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  EDIT_TODO_LIST,
  TOGGLE_TODO_ITEM,
} from './action'

const initialState = {
  todoList: [],
}

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: action.id,
            title: action.title,
            isActive: true,
          },
        ],
      }

    case REMOVE_TODO_ITEM:
      const todoListAfterRemove = state.todoList.filter(
        // filter() создает новый массив
        (item) => item.id !== action.id,
      )

      return { ...state, todoList: [...todoListAfterRemove] }

    case EDIT_TODO_LIST:
      const todoListAfterEdit = [...state.todoList]
      todoListAfterEdit.forEach((item) => {
        if (item.id === action.id) {
          item.title = action.title
        }
      })
      return { ...state, todoList: [...todoListAfterEdit] }

    case TOGGLE_TODO_ITEM:
      console.log('toggle')
      const tempTodoList = [...state.todoList]
      tempTodoList.forEach((item) => {
        if (item.id === action.id) {
          item.isActive = !item.isActive
        }
      })
      console.log(tempTodoList)
      return { ...state, todoList: [...tempTodoList] }
    // const todoListWithToggledItem = [...state.todoList]
    // todoListWithToggledItem.forEach((item) => {
    //   if (item.id === action.id) {
    //     item.isActive = !item.isActive
    //   }
    // })
    // return { ...state, todoList: [...todoListWithToggledItem] }

    default:
      return state
  }
}

export default todoListReducer
