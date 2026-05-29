import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Marinero Family Restaurant",
  description:
    "Mexican food and fresh seafood in Norwalk, California. Open daily from 8:00 AM to 10:00 PM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
