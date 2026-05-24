import Link from "next/link"

export const metadata = {
  title: "Miglior Smartphone 2026 | TechScanner",
  description:
    "Scopri i migliori smartphone del 2026 per qualità prezzo, gaming, fotocamera e autonomia.",
}

export default function SmartphoneGuide() {
  return (
    <main className="min-h-screen bg-zinc-100">

      <article className="max-w-5xl mx-auto px-6 py-20">

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

          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Migliore premium
          </p>

          <h2 className="text-5xl font-black mt-4">
            iPhone 17 Pro Max
          </h2>

          <p className="text-zinc-600 text-xl leading-relaxed mt-6">
            iPhone 17 Pro Max è il miglior smartphone premium
            del 2026 grazie a prestazioni eccezionali,
            autonomia elevata e fotocamere professionali.
          </p>

          <ul className="mt-8 space-y-4 text-lg">

            <li>✅ Display OLED premium</li>
            <li>✅ Prestazioni gaming top</li>
            <li>✅ Fotocamera professionale</li>
            <li>✅ Batteria migliorata</li>

          </ul>

          <Link
            href="/prodotto/iphone-17-pro-max"
            className="mt-10 inline-block bg-black text-white px-8 py-5 rounded-2xl text-lg font-semibold hover:scale-[1.02] transition"
          >
            Confronta prezzi
          </Link>

        </div>

        <div className="mt-10 bg-white rounded-3xl p-10 shadow-sm">

          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Miglior Android
          </p>

          <h2 className="text-5xl font-black mt-4">
            Samsung Galaxy Ultra
          </h2>

          <p className="text-zinc-600 text-xl leading-relaxed mt-6">
            Il miglior smartphone Android del 2026 per
            multitasking, fotografia e produttività.
          </p>

          <ul className="mt-8 space-y-4 text-lg">

            <li>✅ Zoom incredibile</li>
            <li>✅ Display AMOLED top gamma</li>
            <li>✅ Autonomia eccellente</li>

          </ul>

        </div>

        <div className="mt-10 bg-white rounded-3xl p-10 shadow-sm">

          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Miglior qualità prezzo
          </p>

          <h2 className="text-5xl font-black mt-4">
            Google Pixel
          </h2>

          <p className="text-zinc-600 text-xl leading-relaxed mt-6">
            Uno degli smartphone più equilibrati del 2026
            grazie a ottime fotocamere e software fluido.
          </p>

        </div>

        <div className="mt-10 bg-white rounded-3xl p-10 shadow-sm">

          <h2 className="text-5xl font-black">
            Come scegliere uno smartphone nel 2026
          </h2>

          <p className="text-zinc-600 text-xl leading-relaxed mt-8">
            Prima di acquistare uno smartphone bisogna valutare:
            qualità della fotocamera, autonomia,
            processore, aggiornamenti software e qualità prezzo.
          </p>

          <p className="text-zinc-600 text-xl leading-relaxed mt-6">
            Gli smartphone premium sono ideali per gaming,
            video, fotografia e utilizzo professionale.
          </p>

          <p className="text-zinc-600 text-xl leading-relaxed mt-6">
            Gli smartphone di fascia media invece offrono
            il miglior equilibrio tra prezzo e prestazioni.
          </p>

        </div>

      </article>

    </main>
  )
}