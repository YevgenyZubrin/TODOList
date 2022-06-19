import clsx from 'clsx'
import { Item } from '../Item'

const List = ({ className, dispatch, list }) => {
  return (
    <ol className={clsx('list', className)}>
      {list.map(({ title, id, isActive }, index) => (
        <Item
          dispatch={dispatch}
          className='list__item'
          id={id}
          index={index}
          isActive={isActive}
          title={title}
        />
      ))}
    </ol>
  )
}

export default List
