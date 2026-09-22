import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MotionProvider from "./components/ui/MotionProvider";
import ScrollProgress from "./components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Priyanshu Kumar — Full-Stack Software Engineer",
  description:
    "Priyanshu Kumar is a full-stack software engineer building scalable web and mobile products with React, Next.js, Spring Boot and FastAPI.",
  openGraph: {
    title: "Priyanshu Kumar — Full-Stack Software Engineer",
    description:
      "Selected work, experience and stack of Priyanshu Kumar, full-stack engineer at Cognivac and founder of Krixen.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="grain antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        <MotionProvider>
          <ScrollProgress />
          <Navbar />
          {/* Mobile browsers ignore overflow-x on html/body when sizing the page, so
              clip on a real wrapper: nothing inside can widen the page (and the fixed navbar). */}
          <div className="overflow-x-hidden supports-[overflow:clip]:overflow-x-clip">
            <main id="main">{children}</main>
            <Footer />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
