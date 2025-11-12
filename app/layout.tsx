import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suhas Kollur | Software Engineer",
  description:
    "Graduate Software Engineering student at Rutgers University. Specialized in backend engineering, distributed systems, AI systems, and full-stack development.",
  keywords: [
    "Suhas Kollur",
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Engineer",
    "Rutgers University",
    "AI Systems",
    "Distributed Systems",
  ],
  authors: [{ name: "Suhas Kollur" }],
  creator: "Suhas Kollur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suhaskollur.com",
    title: "Suhas Kollur | Software Engineer",
    description:
      "Graduate Software Engineering student at Rutgers University. Specialized in backend engineering, distributed systems, AI systems, and full-stack development.",
    siteName: "Suhas Kollur Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhas Kollur | Software Engineer",
    description:
      "Graduate Software Engineering student at Rutgers University. Specialized in backend engineering, distributed systems, AI systems, and full-stack development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

