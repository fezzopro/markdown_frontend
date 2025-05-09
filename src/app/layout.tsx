import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "markdown",
  description: "markdown",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
