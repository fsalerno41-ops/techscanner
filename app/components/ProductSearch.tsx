"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { products } from "@/app/data/products"

export default function ProductSearch() {

  const [query, setQuery] = useState("")

  const filteredProducts = useMemo(() => {

    if (!query.trim()) {
      return []
    }

    return products.filter((product) => {

      const search = query.toLowerCase()

      return (
        String(product.name || "")
          .toLowerCase()
          .includes(search) ||

        String(product.category || "")
          .toLowerCase()
          .includes(search) ||

        String(product.description || "")
          .toLowerCase()
          .includes(search)
      )
    })

  }, [query])

  return (

    <div className="w-full max-w-3xl">

      <input
        type="text"
        placeholder="Cerca prodotti..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-5 text-white outline-none"
      />

      <div className="mt-6 flex flex-col gap-4">

        {filteredProducts.map((product) => (

          <Link
            key={product.id}
            href={`/prodotto/${product.slug}`}
            className="bg-zinc-900 p-5 rounded-2xl hover:bg-zinc-800 transition"
          >

            <p className="text-zinc-500 text-sm uppercase">
              {product.category}
            </p>

            <h3 className="text-2xl font-bold mt-2">
              {product.name}
            </h3>

            <p className="text-green-500 text-xl mt-3">
              €{product.price}
            </p>

          </Link>

        ))}

      </div>

    </div>
  )
}