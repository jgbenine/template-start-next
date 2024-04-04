import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/scss/main.scss";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import QueryProvider from "@/components/Provider/QueryProvider/QueryProvider";
import GoogleAnalitycs from "@/components/SEO/GoogleAnalitycs/GoogleAnalitycs";
const opensans = Open_Sans({ subsets: ["latin"] });

export default async function RootLayout({children,}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={opensans.className}>
      <body>
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
      <GoogleAnalitycs />
    </html>
  );
}
