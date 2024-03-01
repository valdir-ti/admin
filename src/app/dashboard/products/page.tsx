import TableWrapper from '@/app/ui/dashboard/table-wrapper/table-wrapper'
import { getProductsServerAction } from '@/app/actions/products/get-products-action'

type HomeProps = {
  searchParams: {
    q: string
    page: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const q = searchParams?.q || ''
  const page = searchParams?.page || '1'

  const productsData = await getProductsServerAction(q, page)
  const { count, data } = productsData

  const tableColumns = [
    'Title',
    'Description',
    'Price',
    'Creation',
    'Stock',
    'Actions'
  ]

  return (
    <TableWrapper
      link="/dashboard/products/add"
      count={count}
      data={data}
      tableColumns={tableColumns}
      type="products"
      searchPlaceholder="Search for a product..."
    />
  )
}
