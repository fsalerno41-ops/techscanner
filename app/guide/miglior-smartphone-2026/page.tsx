import Link from "next/link"
import Image from "next/image"

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

        <h1 className="text-5xl md:text-6xl font-black leading-tight mt-6">
          Miglior Smartphone 2026
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 mt-8 leading-relaxed">
          I migliori smartphone del 2026 per fotocamera,
          gaming, autonomia e qualità prezzo.
        </p>

        <div className="mt-16 bg-white rounded-3xl overflow-hidden shadow-sm">

          <div className="relative h-[350px]">

            <Image
              src="/images/iphone-guide.jpg"
              alt="iPhone 17 Pro Max"
              fill
              className="object-cover"
            />

          </div>

          <div className="p-10">

            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Migliore premium
            </p>

            <h2 className="text-4xl font-black mt-4">
              iPhone 17 Pro Max
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed mt-6">
              iPhone 17 Pro Max è il miglior smartphone premium
              del 2026 grazie a prestazioni eccezionali,
              autonomia elevata e fotocamere professionali.
            </p>

            <ul className="mt-8 space-y-3 text-base">

              <li>✅ Display OLED premium</li>
              <li>✅ Prestazioni gaming top</li>
              <li>✅ Fotocamera professionale</li>
              <li>✅ Batteria migliorata</li>

            </ul>

            <Link
              href="/prodotto/iphone-17-pro-max"
              className="mt-10 inline-block bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:scale-[1.02] transition"
            >
              Confronta prezzi
            </Link>

          </div>

        </div>

        <div className="mt-10 bg-white rounded-3xl overflow-hidden shadow-sm">

          <div className="relative h-[350px]">

            <Image
              src="/images/samsung-guide.jpg"
              alt="Samsung Galaxy Ultra"
              fill
              className="object-cover"
            />

          </div>

          <div className="p-10">

            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Miglior Android
            </p>

            <h2 className="text-4xl font-black mt-4">
              Samsung Galaxy Ultra
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed mt-6">
              Il miglior smartphone Android del 2026 per
              multitasking, fotografia e produttività.
            </p>

          </div>

        </div>

        <div className="mt-10 bg-white rounded-3xl overflow-hidden shadow-sm">

          <div className="relative h-[350px]">

            <Image
              src="/images/pixel-guide.jpg"
              alt="Google Pixel"
              fill
              className="object-cover"
            />

          </div>

          <div className="p-10">

            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Miglior qualità prezzo
            </p>

            <h2 className="text-4xl font-black mt-4">
              Google Pixel
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed mt-6">
              Uno degli smartphone più equilibrati del 2026
              grazie a ottime fotocamere e software fluido.
            </p>

          </div>

        </div>

        <div className="mt-10 bg-white rounded-3xl overflow-hidden shadow-sm">

          <div className="relative h-[350px]">

            <Image
              src="/images/rog-guide.jpg"
              alt="ASUS ROG Phone"
              fill
              className="object-cover"
            />

          </div>

          <div className="p-10">

            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Miglior gaming phone
            </p>

            <h2 className="text-4xl font-black mt-4">
              ASUS ROG Phone
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed mt-6">
              Lo smartphone perfetto per gaming competitivo,
              FPS elevati e raffreddamento avanzato.
            </p>

          </div>

        </div>

        <div className="mt-10 bg-white rounded-3xl overflow-hidden shadow-sm">

          <div className="relative h-[350px]">

            <Image
              src="/images/oneplus-guide.jpg"
              alt="OnePlus 13 Pro"
              fill
              className="object-cover"
            />

          </div>

          <div className="p-10">

            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Miglior batteria
            </p>

            <h2 className="text-4xl font-black mt-4">
              OnePlus 13 Pro
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed mt-6">
              Smartphone ideale per autonomia e ricarica ultra rapida.
            </p>

          </div>

        </div>

        <div className="mt-10 bg-white rounded-3xl overflow-hidden shadow-sm">

          <div className="relative h-[350px]">

            <Image
              src="/images/xiaomi-guide.jpg"
              alt="Xiaomi Redmi Note"
              fill
              className="object-cover"
            />

          </div>

          <div className="p-10">

            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Miglior fascia media
            </p>

            <h2 className="text-4xl font-black mt-4">
              Xiaomi Redmi Note
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed mt-6">
              Uno dei migliori smartphone economici del 2026
              per rapporto qualità prezzo.
            </p>

          </div>

        </div>

      </article>

    </main>
  )
}