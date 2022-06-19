import clsx from 'clsx'
import { useState } from 'react'
import { addTodoItem } from '../../app/action'
import { generateId } from './helpers'

const AddItemForm = ({ className, setIsAddMode, dispatch, idList }) => {
  const [value, setValue] = useState('')
  const onInputChangeHandle = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const onSubmitHandle = () => {
    const itemId = generateId(idList)
    dispatch(addTodoItem(value, itemId))
    setIsAddMode(false)
  }

  return (
    <div className={clsx('add-item-form', className)}>
      <input
        type='text'
        autoFocus
        value={value}
        onChange={onInputChangeHandle}
      />
      <button type='submit' onClick={onSubmitHandle}>
        Добавить
      </button>
    </div>
  )
}

export default AddItemForm
