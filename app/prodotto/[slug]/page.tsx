import { products } from "@/app/data/products"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

type Props = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {

  return products
    .filter((product) => product?.slug)
    .map((product) => ({
      slug: String(product.slug),
    }))
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const product = products.find(
    (product) =>
      String(product.slug || "") ===
      String(params.slug || "")
  )

  if (!product) {
    return {
      title: "Prodotto non trovato",
    }
  }

  return {
    title: `${product.name} | TechScanner`,
    description: String(product.description || ""),

    openGraph: {
      title: String(product.name || ""),
      description: String(product.description || ""),
      images: [
        {
          url: String(product.image || ""),
        },
      ],
    },
  }
}

export default function ProductPage({
  params,
}: Props) {

  const product = products.find(
    (product) =>
      String(product.slug || "") ===
      String(params.slug || "")
  )

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((item) => {

    return (
      String(item.category || "") ===
        String(product.category || "") &&

      item.id !== product.id
    )
  })

  return (
    <main className="min-h-screen bg-zinc-100">

      <section className="max-w-7xl mx-auto px-6 py-20">

        <Link
          href={`/categoria/${String(
            product.category || ""
          ).toLowerCase()}`}
          className="text-zinc-500 hover:text-black transition"
        >
          ← Torna alla categoria
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 mt-10">

          <div className="bg-white rounded-3xl p-10 relative min-h-[600px]">

            <Image
              src={String(product.image || "/placeholder.png")}
              alt={String(product.name || "Prodotto")}
              fill
              className="object-contain p-10"
              priority
            />

          </div>

          <div>

            <p className="uppercase tracking-widest text-sm text-zinc-500">
              {product.category}
            </p>

            <h1 className="text-6xl font-black mt-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-green-600 text-7xl font-black mt-8">
              €{product.price}
            </p>

            <p className="text-zinc-600 text-xl leading-relaxed mt-10">
              {product.description}
            </p>

            <div className="flex gap-4 mt-12">

              <button className="bg-black text-white px-8 py-5 rounded-2xl font-semibold hover:scale-105 transition">
                Confronta prezzi
              </button>

              <button className="bg-white border border-zinc-300 px-8 py-5 rounded-2xl font-semibold hover:bg-zinc-50 transition">
                Preferiti
              </button>

            </div>

          </div>

        </div>

        {relatedProducts.length > 0 && (

          <div className="mt-32">

            <h2 className="text-4xl font-black">
              Prodotti correlati
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">

              {relatedProducts.map((item) => (

                <Link
                  key={item.id}
                  href={`/prodotto/${item.slug}`}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
                >

                  <div className="relative h-[250px] bg-zinc-50">

                    <Image
                      src={String(item.image || "/placeholder.png")}
                      alt={String(item.name || "Prodotto")}
                      fill
                      className="object-contain p-8"
                    />

                  </div>

                  <div className="p-8">

                    <p className="uppercase text-sm tracking-widest text-zinc-500">
                      {item.category}
                    </p>

                    <h3 className="text-3xl font-black mt-3">
                      {item.name}
                    </h3>

                    <p className="text-green-600 text-4xl font-black mt-6">
                      €{item.price}
                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        )}

      </section>

    </main>
  )
}