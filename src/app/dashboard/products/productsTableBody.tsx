'use client'

import { Fragment, useEffect, useState } from 'react'

import { Product } from '@/types'
import DeleteForm from '@/app/dashboard/products/delete-form'
import ZoomImage from '@/app/ui/dashboard/zoomImage/zoomImage'
import { convertParseISODate } from '@/utils/convertParseISODate'
import ViewButton from '@/app/ui/dashboard/view-button/view-button'

type ProductsTableProps = {
  data: Array<Product>
}

export default function ProductsTableBody({ data }: ProductsTableProps) {
  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    setProducts(data)
  }, [data])

  return (
    <tbody>
      {products?.map((product) => {
        const formattedDate = convertParseISODate(product.createdAt!)
        const productImage = product.image || '/noproduct.png'

        return (
          <Fragment key={product._id}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <ZoomImage image={productImage} title={product.title || ''} />
                  {product.title}
                </div>
              </th>
              <td className="px-6 py-4">{product.description}</td>
              <td className="px-6 py-4">${product.price}</td>
              <td className="px-6 py-4">{formattedDate}</td>
              <td className="px-6 py-4">{product.stock}</td>
              <td className="px-6 py-4">
                <div className="gap-2 flex">
                  <ViewButton id={product._id!} path="products" />
                  <DeleteForm id={product._id!} />
                </div>
              </td>
            </tr>
          </Fragment>
        )
      })}
    </tbody>
  )
}
