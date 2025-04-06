import { Product } from './product'
import { Todo } from './todo'
import { User } from './user'

export interface DataCardProps {
  count: number
  totalDone?: number
  totalOpen?: number
  data: (User | Todo | Product)[]
}

export interface CardProps {
  index: string
  data: DataCardProps
}

export type CardDragContainerProps = {
  data: CardProps[]
}
