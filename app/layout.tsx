import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Código Cotidiano | Podcast de Tecnología y Comunicación',
  description: 'Podcast universitario sobre tecnología, programación y comunicación digital. Creado por estudiantes para estudiantes en el Taller de Comunicación.',
  keywords: [
    'podcast',
    'tecnología',
    'programación',
    'comunicación digital',
    'universidad',
    'estudiantes',
    'código cotidiano',
    'taller de comunicación'
  ],
  openGraph: {
    title: 'Código Cotidiano | Podcast de Tecnología y Comunicación',
    description: 'Podcast universitario sobre tecnología, programación y comunicación digital.',
    url: 'https://codigocotidiano.com.ar',
    siteName: 'Código Cotidiano',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Código Cotidiano Podcast',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Código Cotidiano | Podcast de Tecnología y Comunicación',
    description: 'Podcast universitario sobre tecnología, programación y comunicación digital.',
    images: ['/logo.png'],
  },
  authors: [{ name: 'Equipo Código Cotidiano' }],
  creator: 'Equipo Código Cotidiano',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
