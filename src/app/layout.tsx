import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Danish Shaikh - Software Developer",
  description:
    "Explore Danish Shaikh's portfolio showcasing web development projects and skills. Specializing in full-stack development and creating responsive web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
