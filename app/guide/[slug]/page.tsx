const guides = [
  {
    slug: "miglior-smartphone-2025",
    title: "Miglior Smartphone 2025",
    content:
      "Scopri i migliori smartphone del 2025 confrontando prezzi e caratteristiche.",
  },

  {
    slug: "miglior-pc-gaming",
    title: "Miglior PC Gaming",
    content:
      "Confronta i migliori PC gaming disponibili online al prezzo più basso.",
  },

  {
    slug: "miglior-scopa-elettrica",
    title: "Miglior Scopa Elettrica",
    content:
      "Le migliori scope elettriche Dyson e alternative economiche.",
  },
]

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const guide = guides.find((g) => g.slug === slug)

  if (!guide) {
    return <div>Guida non trovata</div>
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-6xl font-black">
          {guide.title}
        </h1>

        <p className="text-2xl text-zinc-600 mt-10 leading-relaxed">
          {guide.content}
        </p>

        <div className="mt-16 bg-zinc-100 rounded-3xl p-10">
          <h2 className="text-3xl font-black">
            Confronta i prezzi ora 🚀
          </h2>

          <a
            href="/"
            className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-2xl"
          >
            Vai al comparatore
          </a>
        </div>
      </section>
    </main>
  )
}