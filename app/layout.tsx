import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import MobileNav from "./components/MobileNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurelian Estate | Architectural Excellence",
  description: "Curated architectural masterpieces designed for the discerning individual who values legacy and form.",
  authors: [{ name: "steve from sitesbysteve.dev" }],
  keywords: ["luxury real estate", "architectural homes", "high-end properties", "exclusive estates", "architectural masterpieces"],
  openGraph: {
    title: "Aurelian Estate | Architectural Excellence",
    description: "Curated architectural masterpieces designed for the discerning individual who values legacy and form.",
    type: "website",
  },
};

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9]/95 backdrop-blur-sm border-b border-transparent hover:border-[#C6C6C6]/20 transition-all duration-500">
      <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-[0.2em] font-[family-name:var(--font-noto-serif)] text-[#000000] hover:opacity-70 transition-opacity">
          <span className="hidden md:inline">AURELIAN ESTATE</span>
          <span className="md:hidden">AE</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm tracking-wider text-[#1A1C1C] hover:text-[#C6A87D] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C6A87D] hover:after:w-full after:transition-all after:duration-300">HOME</Link>
          <Link href="/listings" className="text-sm tracking-wider text-[#1A1C1C] hover:text-[#C6A87D] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C6A87D] hover:after:w-full after:transition-all after:duration-300">LISTINGS</Link>
          <Link href="/about" className="text-sm tracking-wider text-[#1A1C1C] hover:text-[#C6A87D] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C6A87D] hover:after:w-full after:transition-all after:duration-300">ABOUT</Link>
          <Link href="/contact" className="text-sm tracking-wider text-[#1A1C1C] hover:text-[#C6A87D] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C6A87D] hover:after:w-full after:transition-all after:duration-300">CONTACT</Link>
          <Link href="/contact" className="px-6 py-2 bg-[#000000] text-[#E2E2E2] text-sm tracking-wider hover:bg-[#3B3B3B] hover:scale-[1.02] transition-all duration-200">
            ENQUIRE
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerif.variable}`}>
      <body className="min-h-full flex flex-col bg-[#F9F9F9] overflow-x-hidden">
        <Header />
        <main className="flex-1 pt-[85px]">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <footer className="bg-[#000000] text-[#E2E2E2] py-20 px-8 overflow-x-hidden">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div>
                <h4 className="font-[family-name:var(--font-noto-serif)] text-lg mb-6 tracking-wide">AURELIAN ESTATE</h4>
                <p className="text-sm text-[#C6C6C6] leading-relaxed">Dedicated to the preservation of architectural excellence.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-6 tracking-wider">CURATION</h4>
                <ul className="space-y-3 text-sm text-[#C6C6C6]">
                  <li><Link href="/listings" className="hover:text-[#C6A87D] transition-colors">Collections</Link></li>
                  <li><Link href="/listings" className="hover:text-[#C6A87D] transition-colors">Off-Market</Link></li>
                  <li><Link href="/about" className="hover:text-[#C6A87D] transition-colors">Advisory</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-6 tracking-wider">LEGAL</h4>
                <ul className="space-y-3 text-sm text-[#C6C6C6]">
                  <li><a href="#" className="hover:text-[#C6A87D] transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-[#C6A87D] transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-[#C6A87D] transition-colors">Cookie Settings</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-6 tracking-wider">CONNECT</h4>
                <div className="flex gap-4 text-sm text-[#C6C6C6]">
                  <a href="#" className="hover:text-[#C6A87D] transition-colors">Email</a>
                  <a href="#" className="hover:text-[#C6A87D] transition-colors">Phone</a>
                </div>
              </div>
            </div>
            <div className="border-t border-[#3B3B3B] pt-8 text-center text-sm text-[#777777]">
              © {new Date().getFullYear()} AURELIAN ESTATE. ARCHITECTURAL INTEGRITY.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}