import { Open_Sans } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/app.footer";
import Header from "@/components/app.header";
import { AppProvider } from '@/context/context.app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['300', '600', '700'],
});


export default function RootLayout({ children }) {

  return (
    <AppProvider>
      <html lang="en">
        <body className={`${openSans.variable}`}>
          <Header />
          {children}
          <Footer />
          <ToastContainer autoClose={1000} theme="colored" />
        </body>
      </html>
    </AppProvider>
  );
}
