import type { MetadataRoute } from "next"
import { products } from "./data/products"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://techscanner.vercel.app"

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/prodotto/${product.slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    ...productUrls,
  ]
}