import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Fredoka, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CloverSprite from "./components/CloverSprite";
import CloverTrail from "./components/CloverTrail";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Anak Baik: archivo en app/fonts/ (cambia el nombre si el tuyo es distinto)
const anakBaik = localFont({
  src: "./fonts/AnakBaik.woff2",
  variable: "--font-anak-baik",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio 222 – Marketing & Software",
  description:
    "Marketing y software para crear soluciones digitales: sitios web, ventas en línea, automatización, marca y publicidad.",
  icons: {
    icon: "/logostudio222.ico",
  },
};

// Aplica el tema guardado antes de pintar la página, para evitar el parpadeo
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${spaceMono.variable} ${fredoka.variable} ${anakBaik.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <CloverSprite />
          <CloverTrail />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}