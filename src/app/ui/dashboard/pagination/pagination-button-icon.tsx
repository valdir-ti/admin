import {
  MdErrorOutline,
  MdChevronRight,
  MdChevronLeft,
  MdLastPage,
  MdFirstPage
} from 'react-icons/md'

type PaginationButtonProps = {
  type: string
}

function PaginationButtonIcon({ type }: PaginationButtonProps) {
  let icon

  switch (type) {
    case 'first':
      icon = <MdFirstPage />
      break
    case 'prev':
      icon = <MdChevronLeft />
      break
    case 'next':
      icon = <MdChevronRight />
      break
    case 'last':
      icon = <MdLastPage />
      break

    default:
      icon = <MdErrorOutline />
      break
  }
  return icon
}

export default PaginationButtonIcon
