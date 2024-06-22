import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import SubMenu from "../components/subMenu";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import siteMetadata from "../utils/siteMetaData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  icons: {
    icon: ["/icon.ico?v=4"],
    apple: ["/icon.io?v=4"],
    shortcut: ["icon.io"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0b7555" />
      </head>
      <body className={inter.className}>
          <Navbar />
          <main>
            <SubMenu />
            <div className="flex px-5 md:px-[90px] my-9">
              <Sidebar />
              <div className="w-full">{children}</div>
            </div>
          </main>
          <Footer />
      </body>
    </html>
  );
}
