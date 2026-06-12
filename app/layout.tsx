import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistema Escolar",
  description: "Gestión Escolar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <div className="flex min-h-screen bg-slate-100">
          <Sidebar />

          <div className="flex-1 flex flex-col">
            <Header />

            <main className="p-6 flex-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}