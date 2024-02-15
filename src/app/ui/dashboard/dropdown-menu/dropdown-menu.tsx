import { TypesColors } from '@/app/enum/typeColors'
import LogoutButton from '@/app/ui/dashboard/logout-button/logout-button'

type DropDownMenuProps = {
  isHidden: boolean
}

export default function DropDownMenu({ isHidden }: DropDownMenuProps) {
  return (
    <div
      id="dropdown"
      className={`rounded border-[1px] border-gray-500 bg-white absolute top-8 w-80 right-1 z-10 shadow-md ${
        isHidden ? 'hidden' : ''
      }`}
    >
      <div className="text-gray-800 cursor-pointer hover:bg-slate-400 p-2">
        Account Settings
      </div>
      <div className="text-gray-800 cursor-pointer hover:bg-slate-400 p-2">
        Suport
      </div>
      <div className="text-gray-800 cursor-pointer hover:bg-slate-400 p-2">
        License
      </div>
      <LogoutButton color={TypesColors.secondary} />
    </div>
  )
}
