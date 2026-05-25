import { products } from "@/app/data/products"

type Props = {
  params: Promise<{
    category: string
  }>
}

export async function generateStaticParams() {

  return [
    { category: "smartphone" },
    { category: "gaming" },
    { category: "laptop" },
    { category: "monitor" },
  ]
}

export default async function CategoryPage({
  params,
}: Props) {

  const resolvedParams = await params

  const category = resolvedParams.category

  const filteredProducts = products.filter((product) => {

    return (
      String(product.category || "") ===
      String(category || "")
    )
  })

  return (
    <main className="p-20">

      <h1 className="text-5xl font-black mb-10">
        {category}
      </h1>

      <div className="flex flex-col gap-4">

        {filteredProducts.map((product) => (

          <div
            key={product.id}
            className="border p-4 rounded-xl"
          >
            {product.name}
          </div>

        ))}

      </div>

    </main>
  )
}