import Link from 'next/link'
import Table from '../table/table'
import Search from '../search/search'
import Orderby from '../orderby/orderby'

type TableWrapperProps = {
  link: string
  count: number
  data: unknown[]
  tableColumns: string[]
  type: string
  searchPlaceholder: string
}

export default function TableWrapper({
  link,
  count,
  data,
  tableColumns,
  type,
  searchPlaceholder
}: TableWrapperProps) {
  return (
    <div className="mt-4 bg-[--bgSoft] p-4 rounded-md h-auto sm:h-[78vh]">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 flex items-center">
          <Search placeholder={searchPlaceholder} />
          <Orderby order="desc" />
        </div>
        <Link href={link}>
          <button className="p-2 bg-[--purpleColor] rounded-md text-white border-0 cursor-pointer w-20">
            Add
          </button>
        </Link>
      </div>
      <Table columns={tableColumns} data={data} type={type} count={count} />
    </div>
  )
}
