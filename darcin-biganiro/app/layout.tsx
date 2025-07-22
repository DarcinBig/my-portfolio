import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darcin Biganiro — Software Developer & Graphic Designer",
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
        className={`${outfit.className} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
