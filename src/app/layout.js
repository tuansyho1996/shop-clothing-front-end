'use client'
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/app.footer";
import Header from "@/components/app.header";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isAdminRoute = pathname.startsWith('/admin')
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-12 font-semibold bg-lime-100 text-lime-600 flex justify-center items-center">Enjoy free shipping on all orders over $100!</div>
        {!isAdminRoute && <Header />}
        {children}
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
