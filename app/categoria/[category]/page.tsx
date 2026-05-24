import { products } from "@/app/data/products"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  const categories = [
    ...new Set(products.map((product) =>
      product.category.toLowerCase()
    )),
  ]

  return categories.map((category) => ({
    category,
  }))
}

export default function CategoryPage({
  params,
}: {
  params: { category: string }
}) {

  const { category } = params

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === category.toLowerCase()
  )

  if (filteredProducts.length === 0) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-zinc-100">

      <section className="max-w-7xl mx-auto px-6 py-20">

        <p className="uppercase tracking-widest text-sm text-zinc-500">
          Categoria
        </p>

        <h1 className="text-6xl font-black mt-4 capitalize">
          {category}
        </h1>

        <p className="text-zinc-600 text-xl mt-6">
          I migliori prodotti della categoria {category}.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {filteredProducts.map((product) => (

            <Link
              key={product.id}
              href={`/prodotto/${product.slug}`}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >

              <div className="relative h-[300px] bg-zinc-50">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />

              </div>

              <div className="p-8">

                <p className="uppercase text-sm tracking-widest text-zinc-500">
                  {product.category}
                </p>

                <h2 className="text-3xl font-black mt-3 leading-tight">
                  {product.name}
                </h2>

                <p className="text-green-600 text-5xl font-black mt-6">
                  €{product.price}
                </p>

                <p className="text-zinc-600 mt-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-8 bg-black text-white py-4 rounded-2xl text-center font-semibold">
                  Confronta prezzi
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  )
}