import Link from "next/link"

type Props = {
  title: string
  description: string
  productName: string
  productSlug: string
}

export default function SeoGuide({
  title,
  description,
  productName,
  productSlug,
}: Props) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-6xl font-black leading-tight">
          {title}
        </h1>

        <p className="text-zinc-400 text-xl mt-8 leading-relaxed">
          {description}
        </p>

        <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-4xl font-black">
            {productName}
          </h2>

          <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
            Uno dei migliori prodotti disponibili online nel 2025.
          </p>

          <Link
            href={`/prodotto/${productSlug}`}
            className="inline-block mt-8 bg-green-500 text-black px-8 py-4 rounded-2xl font-bold"
          >
            Vedi offerta →
          </Link>

        </div>

      </section>
    </main>
  )
}