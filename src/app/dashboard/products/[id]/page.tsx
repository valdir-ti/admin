import { getProductServerAction } from '@/app/actions/products/get-product-action'

import Form from './form'

export default async function EditProduct({
  params: { id }
}: {
  params: { id: string }
}) {
  const product = await getProductServerAction(id)
  return (
    <div className="flex gap-8">
      <Form product={product} />
    </div>
  )
}
