import PaginationButtonIcon from './pagination-button-icon'

type PaginationButtonProps = {
  disabled: boolean
  title: string
  type: string
  handleChangePage: () => void
}

export default function PaginationButton({
  disabled,
  title,
  type,
  handleChangePage
}: PaginationButtonProps) {
  return (
    <button
      className={`flex justify-center p-1 rounded-sm min-w-[60px] ${
        disabled
          ? 'bg-gray-500 text-gray-950 cursor-not-allowed'
          : 'bg-white text-black cursor-pointer hover:bg-slate-300'
      }`}
      disabled={disabled}
      onClick={handleChangePage}
      title={title}
    >
      <PaginationButtonIcon type={type} />
    </button>
  )
}
