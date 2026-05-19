"use client"

import { useState } from "react"
import { products } from "./data/products"

export default function Home() {
  const [search, setSearch] = useState("")

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-zinc-100">
      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-7xl font-black">
            TechScanner 🚀
          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-2xl">
            Trova il prezzo più basso online per smartphone,
            gaming ed elettrodomestici.
          </p>

          <div className="mt-10 relative max-w-2xl">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl">
              🔍
            </span>

            <input
              type="text"
              placeholder="Cerca prodotto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl bg-white px-14 py-5 text-black text-xl shadow-2xl outline-none"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <span className="uppercase text-sm text-zinc-500">
                {product.category}
              </span>

              <h2 className="text-3xl font-black mt-4">
                {product.name}
              </h2>

              <p className="text-5xl font-black text-green-600 mt-6">
                €{product.price}
              </p>

              <p className="text-zinc-600 mt-4">
                {product.description}
              </p>

              <a
                href={`/prodotto/${product.slug}`}
                className="block text-center mt-8 rounded-2xl bg-black text-white py-4"
              >
                Confronta prezzi
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}