import Link from "next/link"

export const metadata = {
  title: "Miglior Smartphone 2026 | TechScanner",
  description:
    "Scopri i migliori smartphone del 2026 per qualità prezzo.",
}

export default function SmartphoneGuide() {
  return (
    <main className="min-h-screen bg-zinc-100">

      <article className="max-w-4xl mx-auto px-6 py-20">

        <p className="uppercase tracking-widest text-sm text-zinc-500">
          Guida TechScanner
        </p>

        <h1 className="text-7xl font-black leading-none mt-6">
          Miglior Smartphone 2026
        </h1>

        <p className="text-2xl text-zinc-600 mt-8 leading-relaxed">
          I migliori smartphone del 2026 per fotocamera,
          gaming, autonomia e qualità prezzo.
        </p>

        <div className="mt-16 bg-white rounded-3xl p-10 shadow-sm">

          <h2 className="text-5xl font-black">
            1. iPhone 17 Pro Max
          </h2>

          <p className="text-zinc-600 text-xl leading-relaxed mt-6">
            Il miglior smartphone premium del 2026 grazie
            a performance eccezionali, fotocamere avanzate
            e autonomia elevata.
          </p>

          <ul className="mt-8 space-y-3 text-lg">

            <li>✅ Fotocamera professionale</li>
            <li>✅ Batteria eccellente</li>
            <li>✅ Display OLED top gamma</li>
            <li>✅ Prestazioni gaming incredibili</li>

          </ul>

          <Link
            href="/prodotto/iphone-17-pro-max"
            className="mt-10 inline-block bg-black text-white px-8 py-5 rounded-2xl text-lg font-semibold"
          >
            Confronta prezzi
          </Link>

        </div>

        <div className="mt-10 bg-white rounded-3xl p-10 shadow-sm">

          <h2 className="text-5xl font-black">
            2. Samsung Galaxy Ultra
          </h2>

          <p className="text-zinc-600 text-xl leading-relaxed mt-6">
            Smartphone Android premium ideale per produttività,
            foto e multitasking avanzato.
          </p>

          <ul className="mt-8 space-y-3 text-lg">

            <li>✅ Zoom fotografico incredibile</li>
            <li>✅ Display AMOLED premium</li>
            <li>✅ Ottima autonomia</li>

          </ul>

        </div>

        <div className="mt-10 bg-white rounded-3xl p-10 shadow-sm">

          <h2 className="text-5xl font-black">
            Come scegliere uno smartphone nel 2026
          </h2>

          <p className="text-zinc-600 text-xl leading-relaxed mt-8">
            Prima di acquistare uno smartphone bisogna valutare:
            qualità fotocamera, batteria, prestazioni,
            aggiornamenti software e qualità prezzo.
          </p>

          <p className="text-zinc-600 text-xl leading-relaxed mt-6">
            Gli smartphone premium offrono prestazioni migliori
            nel gaming, nella fotografia e nella durata nel tempo.
          </p>

        </div>

      </article>

    </main>
  )
}