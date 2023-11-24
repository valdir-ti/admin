import { Product } from "@/app/types";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

type ProductsTableProps = {
    data: Array<Product>
}

export default function ProductsTableBody({ data }: ProductsTableProps) {
    return (

        <tbody>
          {data.map((product) => {

            const parsedDate = parseISO(product.createdAt);
            const formattedDate = format(parsedDate, 'dd.MM.yyyy')

            return (<Fragment key={product._id}>
              <tr>
                <td>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/noproduct.jpg"
                      alt="John Doe"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
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
                      <button
                        className="p-1 text-[--text] border-0 cursor-pointer bg-teal-600 rounded-md min-w-[80px]"
                      >
                        View
                      </button>
                    </Link>
                    <Link href="/">
                      <button
                        className="p-1 text-[--text] border-0 cursor-pointer bg-red-600 rounded-md min-w-[80px]"
                      >
                        Delete
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            </Fragment>)
          })}

        </tbody>
    )
}
