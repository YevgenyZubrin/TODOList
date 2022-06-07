import clsx from "clsx"
import './Item.css'

const Item = ({ className, id, isActive, title, index }) => (
    isActive && <li key={id} className={clsx('item', className)}>
      <div className='item__wrapper'>
        <p className='item__index'>{`${index}. `}</p>
        <p className='item__title'>{title}</p>
        <button className='item__edit-button' />
        <button className='item__delete-button' />
      </div>
    </li>
  )

export default Item
