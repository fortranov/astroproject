import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NeoAstrology - Ваш личный астролог',
  description: 'Откройте тайны звёзд с NeoAstrology - современным подходом к древней мудрости',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  )
}

