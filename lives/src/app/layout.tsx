import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { getAssetPath } from "@/utils/assets"

const heliosExtended = localFont({
  src: [
    {
      path: "../../public/fonts/heliosext.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/heliosext_italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/heliosext_bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/heliosext_bold_italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-helios-extended",
  display: "swap",
})

const imgFavIcon = getAssetPath("/images/favicon.svg")

export const metadata: Metadata = {
  title: "LIVES",
  description: "LIVES - Learn English with the help of videogames.",
  icons: {
    icon: [{ url: imgFavIcon, type: "image/svg+xml" }, { url: imgFavIcon }],
    apple: imgFavIcon,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${heliosExtended.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
