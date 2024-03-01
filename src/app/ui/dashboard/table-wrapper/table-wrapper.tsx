import Link from 'next/link'
import Table from '../table/table'
import Search from '../search/search'

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
    <div className="mt-4 bg-[--bgSoft] p-4 rounded-md h-[82vh] sm:h-[60vh]">
      <div className="flex items-center justify-between mb-4">
        <Search placeholder={searchPlaceholder} />
        <Link href={link}>
          <button className="p-2 bg-[--purpleColor] rounded-md text-white border-0 cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <Table columns={tableColumns} data={data} type={type} count={count} />
    </div>
  )
}
