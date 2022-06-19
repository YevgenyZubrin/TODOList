// import logo from './logo.svg';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddItemForm from './components/AddItemForm/AddItemForm'
import './App.css'
import { List } from './components/List'

// const list = [
//   { id: 1, isActive: true, title: 'сделать что нибудь полезное', index: 1 },
// ]

const App = () => {
  const todoList = [...useSelector((state) => state.todoList)]
  const makeIdList = () => {
    const idList = []

    todoList.forEach((item) => {
      idList.push(item.id)
    })

    return idList
  }
  console.log(todoList)
  const [isAddMode, setIsAddMode] = useState(false)

  const dispatch = useDispatch()

  const onAddHandler = () => {
    setIsAddMode(true)
  }

  return (
    <div className='App'>
      {isAddMode ? (
        <AddItemForm
          idList={makeIdList()}
          dispatch={dispatch}
          setIsAddMode={setIsAddMode}
        />
      ) : (
        <button onClick={onAddHandler}>Добавить действие</button>
      )}
      <List dispatch={dispatch} list={todoList} />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  )
}

export default App
