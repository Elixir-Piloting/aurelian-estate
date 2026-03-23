import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Aurelian Estate",
  description: "We curate spaces, not listings. AURELIAN ESTATE represents the intersection of architectural heritage and modern living.",
};

const principles = [
  {
    number: "01",
    title: "Intent",
    subtitle: "Architectural Integrity",
    description: "We exclusively partner with properties that demonstrate a profound understanding of volume, light, and material honesty.",
  },
  {
    number: "02",
    title: "Curation",
    subtitle: "The Curated Eye",
    description: "Our portfolio is intentionally limited. We reject the mass-market approach in favor of singular, high-concept residences.",
  },
  {
    number: "03",
    title: "Legacy",
    subtitle: "Lasting Value",
    description: "Real estate is the most tangible form of art. We ensure the investment transcends generations through aesthetic permanence.",
  },
];

const team = [
  { name: "Julian Thorne", role: "Managing Director" },
  { name: "Elena Moretti", role: "Chief Curator" },
  { name: "Marcus Vane", role: "Head of Estates" },
  { name: "Sarah Chae", role: "Strategic Liaison" },
];

const timeline = [
  {
    year: "1998",
    title: "The Foundation",
    description: "Founded in London with a single focus: representing modernist villas that redefined the skyline. We began with three properties and a vision for architectural purity.",
  },
  {
    year: "2010",
    title: "Global Expansion",
    description: "Expansion into New York and Hong Kong. We established our 'Editorial Review Board' to vet every listing for architectural significance.",
  },
  {
    year: "2024",
    title: "The Digital Frontier",
    description: "Launching our bespoke platform, merging high-touch white-glove service with advanced digital storytelling for the world's most unique assets.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2560&q=80"
          alt="We curate spaces, not listings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <h1 className="font-[family-name:var(--font-noto-serif)] text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            We curate spaces, not listings
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            AURELIAN ESTATE represents the intersection of architectural heritage and modern living. We don&apos;t just sell property; we broker legacies.
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-8 py-24 bg-[#F9F9F9]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {principles.map((principle, index) => (
            <div key={principle.number} className="relative opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
              <p className="text-6xl font-bold text-[#C6C6C6] mb-4">{principle.number}</p>
              <h3 className="font-[family-name:var(--font-noto-serif)] text-2xl text-[#000000] mb-2">{principle.title}</h3>
              <p className="text-sm text-[#C6A87D] tracking-wider mb-4">{principle.subtitle}</p>
              <p className="text-[#474747] leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F3F3] py-24 px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-[family-name:var(--font-noto-serif)] text-4xl text-[#000000] mb-12 text-center opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>The Architects of Acquisition</h2>
          <p className="text-center text-[#474747] mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>A Global Collective</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={member.name} className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: `${(index + 2) * 100}ms`, animationFillMode: 'forwards' }}>
                <div className="relative aspect-square mb-4 overflow-hidden bg-[#E2E2E2]">
                  <Image
                    src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&crop=face`}
                    alt={member.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-noto-serif)] text-lg text-[#000000]">{member.name}</h3>
                <p className="text-sm text-[#777777] tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-8 py-24 bg-[#F9F9F9]">
        <h2 className="font-[family-name:var(--font-noto-serif)] text-4xl text-[#000000] mb-12 text-center opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>Decades of Discernment</h2>
        <div className="max-w-3xl mx-auto space-y-16">
          {timeline.map((item, index) => (
            <div key={item.year} className="flex gap-8 opacity-0 animate-slide-in-left" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
              <div className="flex-shrink-0 w-24">
                <p className="text-2xl font-bold text-[#C6A87D]">{item.year}</p>
              </div>
              <div className="relative pb-16 border-l border-[#C6C6C6] last:border-0">
                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-[#000000]" />
                <h3 className="font-[family-name:var(--font-noto-serif)] text-xl text-[#000000] mb-2">{item.title}</h3>
                <p className="text-[#474747] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#000000] py-24 px-8 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-[family-name:var(--font-noto-serif)] text-4xl text-white mb-8">Begin your collection.</h2>
          <Link href="/listings" className="inline-block px-8 py-3 border border-[#C6A87D] text-[#C6A87D] text-sm tracking-wider hover:bg-[#C6A87D] hover:text-white hover:scale-[1.02] transition-all duration-200">
            VIEW OUR PORTFOLIO
          </Link>
        </div>
      </section>
    </div>
  );
}