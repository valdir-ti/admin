import {
  MdErrorOutline,
  MdSupervisedUserCircle,
  MdProductionQuantityLimits,
  MdOutlineFormatListBulleted
} from 'react-icons/md'

type CardIconProps = {
  type: string
}
function CardIcon({ type }: CardIconProps) {
  let icon

  switch (type) {
    case 'todos':
      icon = <MdOutlineFormatListBulleted />
      break
    case 'users':
      icon = <MdSupervisedUserCircle />
      break
    case 'products':
      icon = <MdProductionQuantityLimits />
      break

    default:
      icon = <MdErrorOutline />
      break
  }
  return icon
}

export default CardIcon
