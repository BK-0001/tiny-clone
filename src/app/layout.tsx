import Header from "@/components/layouts/header";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiny URL",
  description: "This is kinda clone version of Tiny URL"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${quicksand.className} antialiased`}>
          <Header />

          <main className="container mx-auto p-4">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
