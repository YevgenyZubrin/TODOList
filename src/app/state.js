// import { configureStore } from '@reduxjs/toolkit'

// export default configureStore({
//   reducer: {}
// })

import { createStore } from 'redux'
import todoListReducer from './reducer'

const store = createStore(todoListReducer)
