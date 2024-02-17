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
            <tr>
              <td>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <ZoomImage image={productImage} title={product.title || ''} />
                  {product.title}
                </div>
              </td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{formattedDate}</td>
              <td>{product.stock}</td>
              <td>
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
