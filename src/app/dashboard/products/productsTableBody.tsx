'use client'

import { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { Product } from '@/app/types'
import ZoomImage from '@/app/ui/dashboard/zoomImage/zoomImage'
import ViewButton from '@/app/ui/dashboard/view-button/view-button'
import { convertParseISODate } from '@/app/utils/convertParseISODate'
import DeleteButton from '@/app/ui/dashboard/delete-button/delete-button'
import { deleteProductServerAction } from '@/app/actions/products/delete-product-action'

type ProductsTableProps = {
  data: Array<Product>
}

export default function ProductsTableBody({ data }: ProductsTableProps) {
  const [products, setProducts] = useState<Product[]>()

  const deleteProductClientAction = async (formData: FormData) => {
    const result = await deleteProductServerAction(formData)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Product deleted')
    }
  }

  useEffect(() => {
    setProducts(data)
  }, [data])

  return (
    <tbody>
      {products?.map((product) => {
        const formattedDate = convertParseISODate(product.createdAt!)

        const productImage = product.image || '/noproduct.jpg'

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
                  <DeleteButton
                    action={deleteProductClientAction}
                    id={product._id!}
                  />
                </div>
              </td>
            </tr>
          </Fragment>
        )
      })}
    </tbody>
  )
}
