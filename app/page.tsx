import Image from "next/image"
import Link from "next/link"
import { products } from "./data/products"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-100">
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-3xl p-10 shadow-sm"
            >

              <div className="relative w-full h-[260px] mb-8">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />

              </div>

              <span className="uppercase text-sm text-zinc-500">
                {product.category}
              </span>

              <h2 className="text-5xl font-black mt-4 leading-none">
                {product.name}
              </h2>

              <p className="text-6xl font-black text-green-600 mt-8">
                €{product.price}
              </p>

              <p className="text-zinc-600 text-xl mt-6">
                {product.description}
              </p>

              <Link
                href={`/prodotto/${product.slug}`}
                className="mt-10 block bg-black text-white text-center py-5 rounded-2xl text-xl font-semibold"
              >
                Confronta prezzi
              </Link>

            </div>

          ))}

        </div>

      </section>
    </main>
  )
}