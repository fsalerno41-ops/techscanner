import { products } from "../../data/products"
import { notFound } from "next/navigation"
import Image from "next/image"

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const product = products.find(
    (p) => p.slug === slug
  )

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-zinc-100">

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16">

          <div className="bg-white rounded-3xl p-12 shadow-sm flex items-center justify-center">

            <div className="relative w-full h-[500px]">

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />

            </div>

          </div>

          <div>

            <span className="uppercase text-sm text-zinc-500">
              {product.category}
            </span>

            <h1 className="text-6xl font-black mt-4 leading-none">
              {product.name}
            </h1>

            <p className="text-zinc-600 text-xl mt-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-10 bg-white rounded-3xl p-8 shadow-sm">

              <p className="text-sm text-zinc-500">
                Prezzo più basso trovato
              </p>

              <p className="text-6xl font-black text-green-600 mt-4">
                €{product.price}
              </p>

            </div>

            <div className="mt-10 space-y-5">

              {product.stores?.map((store: any, index: number) => (

                <a
                  key={index}
                  href={store.url}
                  target="_blank"
                  className="flex items-center justify-between bg-black text-white rounded-3xl p-8 hover:scale-[1.02] transition"
                >

                  <div>

                    <p className="font-bold text-3xl">
                      {store.name}
                    </p>

                    <p className="text-zinc-300 mt-2">
                      Acquista al miglior prezzo online
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-5xl font-black text-green-400">
                      €{store.price}
                    </p>

                    {index === 0 && (
                      <p className="mt-2 text-sm text-green-400">
                        MIGLIOR PREZZO
                      </p>
                    )}

                  </div>

                </a>

              ))}

            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">

                <p className="text-4xl">
                  🚚
                </p>

                <p className="mt-3 font-semibold">
                  Spedizione veloce
                </p>

              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">

                <p className="text-4xl">
                  💳
                </p>

                <p className="mt-3 font-semibold">
                  Miglior prezzo
                </p>

              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">

                <p className="text-4xl">
                  ⭐
                </p>

                <p className="mt-3 font-semibold">
                  Top prodotto
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}