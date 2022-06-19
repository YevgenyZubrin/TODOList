import clsx from 'clsx'
import { useState } from 'react'
import { removeTodoItem, toggleTodoItem, editTodoItem } from '../../app/action'
import './Item.css'

const Item = ({ className, dispatch, id, isActive, title }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [value, setValue] = useState(title)
  const onRemoveItemHandle = () => {
    dispatch(removeTodoItem(id))
  }

  const onToggleHandle = () => {
    dispatch(toggleTodoItem(id))
  }

  const onEditModeToggle = () => {
    setIsEditMode(!isEditMode)
  }

  const onEditItemHandle = () => {
    onEditModeToggle()
    dispatch(editTodoItem(id, value))
  }

  const onChangeValueHandle = (e) => {
    setValue(e.target.value)
  }

  return (
    // isActive && (
    <li key={id} className={clsx('item', className)}>
      <div className='item__wrapper'>
        {/* <p className='item__index'>{`${index}. `}</p> */}
        {isEditMode ? (
          <>
            <input type='text' onChange={onChangeValueHandle} value={value} />
            <button type='submit' onClick={onEditItemHandle}>
              Сохранить
            </button>
          </>
        ) : (
          <>
            {' '}
            <p className='item__title'>{title}</p>
            <button className='item__edit-button' onClick={onEditModeToggle}>
              Редактировать задачу
            </button>
            <button
              className='item__delete-button'
              onClick={onRemoveItemHandle}
            >
              Удалить задачу
            </button>
            <input
              type='checkbox'
              checked={isActive}
              id={title}
              onChange={onToggleHandle}
            />
          </>
        )}
      </div>
    </li>
  )
  // )
}

export default Item
