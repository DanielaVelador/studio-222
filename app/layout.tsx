import type { Metadata } from "next";
import { Fredoka, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}