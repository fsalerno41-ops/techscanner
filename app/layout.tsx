import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TechScanner",
  description: "Confronta i migliori prezzi tech online",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">

      <head>

        <meta
          name="google-site-verification"
          content="cjkGsfJH-i7D2G4HCtbJlqnCUhx-NwMX2RT4EEj7MNA"
        />

      </head>

      <body>
        {children}
      </body>

    </html>
  )
}