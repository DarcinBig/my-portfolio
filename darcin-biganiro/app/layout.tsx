import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darcin Biganiro — Software Engineer & Graphic Designer",
  description: "Dev portfolio of Darcin Biganiro, showcasing skills in software development and graphic design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
