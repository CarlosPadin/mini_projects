import type { Metadata } from "next";
import "./globals.css";
import TopBar from "../components/TopBar";


export const metadata: Metadata = {
  title: "Render Modes",
  description: "Diferent render modes on NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <TopBar />
        {children}
      </body>
    </html>
  );
}
