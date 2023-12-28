'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { format, parseISO } from 'date-fns'

import { Product } from '@/app/types'
import { deleteProductServerAction } from '@/app/actions/products/delete-product-action'

import ZoomImage from '@/app/ui/dashboard/zoomImage/zoomImage'
import DeleteButton from '@/app/ui/dashboard/delete-button/delete-button'

type ProductsTableProps = {
  data: Array<Product>
}

export default function ProductsTableBody({ data }: ProductsTableProps) {
  const deleteProductClientAction = async (formData: FormData) => {
    const result = await deleteProductServerAction(formData)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Product deleted')
    }
  }

  return (
    <tbody>
      {data.map((product) => {
        const parsedDate = parseISO(product.createdAt)
        const formattedDate = format(parsedDate, 'dd.MM.yyyy')

        const productImage = product.image || '/noproduct.jpg'

        return (
          <Fragment key={product._id}>
            <tr>
              <td>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <ZoomImage image={productImage} title={product.title} />
                  {product.title}
                </div>
              </td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{formattedDate}</td>
              <td>{product.stock}</td>
              <td>
                <div className="gap-2 flex">
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className="p-1 text-[--text] border-0 cursor-pointer bg-teal-600 rounded-md min-w-[80px]">
                      View
                    </button>
                  </Link>
                  <DeleteButton
                    action={deleteProductClientAction}
                    id={product._id}
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
