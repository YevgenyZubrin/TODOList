interface ListItemProps {
  id: number
  index: number
  isActive: boolean
  title: string
}

export interface ListProps {
  className?: string
  list: ListItemProps[]
  listName?: string
}

