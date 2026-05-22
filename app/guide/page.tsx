import Link from "next/link"

const guides = [
  {
    title: "Miglior Smartphone 2026",
    slug: "miglior-smartphone-2026",
    description:
      "Scopri i migliori smartphone del 2026 per qualità prezzo.",
  },

  {
    title: "Miglior Monitor Gaming 2026",
    slug: "miglior-monitor-gaming-2026",
    description:
      "I migliori monitor gaming 4K e ultrawide del 2026.",
  },

  {
    title: "Miglior Laptop 2026",
    slug: "miglior-laptop-2026",
    description:
      "I migliori notebook e laptop del 2026.",
  },
]

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-zinc-100">

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-7xl font-black">
          Guide Tech
        </h1>

        <p className="text-zinc-600 text-2xl mt-6">
          Le migliori guide tech aggiornate.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {guides.map((guide) => (

            <Link
              key={guide.slug}
              href={`/guide/${guide.slug}`}
              className="bg-white rounded-3xl p-10 shadow-sm hover:scale-[1.02] transition"
            >

              <h2 className="text-5xl font-black leading-none">
                {guide.title}
              </h2>

              <p className="text-zinc-600 text-xl mt-6 leading-relaxed">
                {guide.description}
              </p>

              <div className="mt-8 inline-block bg-black text-white px-6 py-4 rounded-2xl">
                Leggi guida
              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  )
}