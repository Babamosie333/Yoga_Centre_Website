import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RK Chiro Yoga Centre",
  description: "Expert chiropractic care meets traditional yoga. Restore your natural alignment and revitalize your spirit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
