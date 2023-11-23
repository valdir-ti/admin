'use client'

import { Fragment, useEffect, useState } from "react";
import { format, parseISO } from "date-fns";

import Link from "next/link";
import Image from "next/image";

import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

import { Product } from "@/app/types";

export default function Home() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(process.env.NEXT_PUBLIC_API_URL + 'products')
      const response = await query.json()
      setProducts(response.data)
    }
    getData()
  }, [])

  return (
    <div className="mt-4 bg-[--bgSoft] p-4 rounded-md">
      <div className="flex items-center justify-between mb-4">
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button
            className="p-2 bg-[--purpleColor] rounded-md text-white border-0 cursor-pointer"
          >
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {

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
      </table>
      <Pagination disabled={true} />
    </div>
  )
}
