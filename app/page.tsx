import Image from "next/image"
import Link from "next/link"
import { products } from "./data/products"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-100">

      <header className="bg-black text-white border-b border-zinc-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

          <Link
            href="/"
            className="text-4xl font-black tracking-tight"
          >
            TechScanner
          </Link>

          <input
            type="text"
            placeholder="Cerca prodotti..."
            className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-3 w-[320px] outline-none"
          />

        </div>

      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="mb-16">

          <h1 className="text-7xl font-black leading-none">
            Confronta i migliori prezzi tech 🚀
          </h1>

          <p className="text-zinc-600 text-2xl mt-6 max-w-3xl">
            Scopri offerte, confronta prezzi e trova i migliori prodotti online.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition"
            >

              <div className="relative h-[260px] w-full mb-8">

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

              <p className="text-zinc-600 text-xl mt-6 leading-relaxed">
                {product.description}
              </p>

              <Link
                href={`/prodotto/${product.slug}`}
                className="mt-10 block bg-black text-white text-center py-5 rounded-2xl text-xl font-semibold hover:opacity-90 transition"
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