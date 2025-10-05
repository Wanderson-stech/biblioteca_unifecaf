import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Biblioteca Virtual UniFECAF - Acesso ao Conhecimento",
  description:
    "Biblioteca virtual da UniFECAF com acesso completo ao acervo digital de livros, artigos e recursos acadêmicos.",
  generator: "Next.js",
}

const RootLayout: React.FC = ({ children }) => {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
