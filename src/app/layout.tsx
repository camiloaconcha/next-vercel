import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Camilo Concha Code Generator",
  description: "Barcode Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              <a href="/">
                <li>Home</li>
              </a>
           
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
