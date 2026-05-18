export default function Home() {
  const products = [
    {
      id: 1,
      name: "iPhone 17 Pro Max",
      price: "€1.189",
      category: "Smartphone",
    },
    {
      id: 2,
      name: "RTX 5090 Gaming",
      price: "€2.099",
      category: "Gaming",
    },
    {
      id: 3,
      name: "Dyson V16",
      price: "€699",
      category: "Elettrodomestici",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-100">
      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-6xl font-black mb-6">
            TechScanner 🚀
          </h1>

          <p className="text-xl text-zinc-300 mb-8">
            Confronta i migliori prezzi online
          </p>

          <input
            placeholder="Cerca smartphone, GPU, TV..."
            className="w-full max-w-2xl rounded-2xl px-6 py-4 text-black"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">
          Offerte popolari
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <span className="text-sm text-zinc-500 uppercase">
                {product.category}
              </span>

              <h3 className="text-2xl font-bold mt-4">
                {product.name}
              </h3>

              <p className="text-4xl font-black text-green-600 mt-6">
                {product.price}
              </p>

              <button className="mt-8 w-full rounded-2xl bg-black text-white py-4">
                Confronta prezzi
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}