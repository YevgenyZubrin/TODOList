import clsx from 'clsx'
import { Item } from '../Item'

const List = ({ className, list, listName = ''}) => {
  return (
    <ul className={clsx('list', className)}>
      {list.map(({ title, id, isActive }, index) => (
          <Item className='list__item' id={id} index={index} isActive={isActive} title={title} />
        )
      )}
    </ul>
  )
}

export default List