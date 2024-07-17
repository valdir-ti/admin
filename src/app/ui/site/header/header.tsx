import React from 'react'

import { IoMdSearch } from 'react-icons/io'
import { IoMdCart } from 'react-icons/io'
import { FaUser } from 'react-icons/fa6'
import { GoHeartFill } from 'react-icons/go'

const Header = () => {
  return (
    <div className="h-[80px] bg-slate-100 text-zinc-900 font-semibold flex items-center justify-between">
      <div className="flex items-center">
        <div className="ml-16 font-extrabold text-[32px] italic cursor-pointer">
          BIKE PRO
        </div>
        <ul className="flex ml-36 gap-12 font-bold text-[18px]">
          <li className="cursor-pointer">BICICLETAS</li>
          <li className="cursor-pointer">E-BIKES</li>
          <li className="cursor-pointer">EQUIPAMENTOS</li>
          <li className="cursor-pointer">OUTLET</li>
        </ul>
      </div>
      <ul className="flex justify-end mr-12 gap-8">
        <li className="cursor-pointer h-[24px] w-[24px]">
          <IoMdSearch />
        </li>
        <li className="cursor-pointer h-[24px] w-[24px]">
          <FaUser />
        </li>
        <li className="cursor-pointer h-[24px] w-[24px]">
          <IoMdCart />
        </li>
        <li className="cursor-pointer h-[24px] w-[24px]">
          <GoHeartFill />
        </li>
      </ul>
    </div>
  )
}

export default Header
