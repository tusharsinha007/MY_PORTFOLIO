import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClientBody } from "@/app/ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tushar Sinha - Portfolio",
  description: "Cybersecurity Student & Java Developer. Building secure and efficient software solutions.",
  keywords: ["Tushar Sinha", "Portfolio", "Java Developer", "Cybersecurity", "Software Engineer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
