import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Vaishnavi | Legal Professional",
  description: "Legal professional specializing in US and Indian jurisdictions with expertise in Contract Management, International Legal Compliance, and Legal Documentation.",
  keywords: ["legal", "attorney", "advocate", "Indian law", "US law", "international law", "legal documentation", "contract management"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased bg-rich-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
