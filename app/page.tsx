import Image from "next/image";
import Link from "next/link";
import { listings } from "./data/listings";

export default function Home() {
  const featuredProperties = listings.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative h-[90vh] overflow-hidden">
          <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2560&q=80"
          alt="The Pinnacle of Architecture"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
          <h1 className="font-[family-name:var(--font-noto-serif)] text-6xl md:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up">
            The Pinnacle of Architecture
          </h1>
          <p className="text-xl md:text-2xl tracking-wider font-light animate-fade-in-up delay-200">
            Exceptional Living
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-8 py-24 bg-[#F9F9F9]">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <h2 className="font-[family-name:var(--font-noto-serif)] text-4xl font-bold text-[#000000] mb-6 tracking-tight">
            Curated Collections
          </h2>
          <p className="text-lg text-[#474747] max-w-2xl mx-auto leading-relaxed">
            Handpicked architectural masterpieces designed for the discerning individual who values legacy and form.
          </p>
        </div>
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <Link href="/listings" className="inline-block px-8 py-3 bg-[#000000] text-[#E2E2E2] text-sm tracking-wider hover:bg-[#3B3B3B] hover:scale-[1.02] transition-all duration-200">
            View All Properties
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredProperties.map((property, index) => (
            <Link key={property.id} href={`/listings/${property.id}`} className="group block opacity-0 animate-fade-in-up" style={{ animationDelay: `${(index + 3) * 100}ms`, animationFillMode: 'forwards' }}>
              <div className="relative aspect-[4/5] mb-4 overflow-hidden bg-[#E2E2E2]">
                  <Image
                    src={property.images.hero}
                    alt={property.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover image-zoom group-hover:scale-105 transition-transform duration-700"
                  />
                <div className="absolute top-0 left-0 w-[20px] h-[1px] bg-[#C6A87D] group-hover:w-[40px] transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-[20px] h-[1px] bg-[#C6A87D] group-hover:w-[40px] transition-all duration-500" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-[#777777] tracking-wide">{property.location}, {property.locationCountry}</p>
                <h3 className="font-[family-name:var(--font-noto-serif)] text-xl text-[#000000] group-hover:text-[#C6A87D] transition-colors">{property.name}</h3>
                <p className="text-lg font-bold text-[#000000]">{property.priceDisplay}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F3F3] py-24 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: "architecture", title: "Architectural Integrity", desc: "We represent only the properties that define modern architectural movements." },
              { icon: "security", title: "Discrete Service", desc: "Unwavering privacy for our global clientele in every transaction." },
              { icon: "global", title: "Global Reach", desc: "Connecting high-net-worth individuals across six continents." },
              { icon: "curation", title: "Legacy Curation", desc: "Our portfolio is a collection of legacies, not just real estate listings." },
            ].map((item, index) => (
              <div key={item.title} className="text-center md:text-left opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
                <div className="w-12 h-12 mb-4 flex items-center justify-center text-[#000000] mx-auto md:mx-0">
                  {item.icon === 'architecture' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  )}
                  {item.icon === 'security' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  )}
                  {item.icon === 'global' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  )}
                  {item.icon === 'curation' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  )}
                </div>
                <h3 className="font-[family-name:var(--font-noto-serif)] text-lg text-[#000000] mb-2">{item.title}</h3>
                <p className="text-sm text-[#474747] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-8 py-24 bg-[#F9F9F9]">
        <div className="max-w-3xl opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <div className="mb-8">
            <p className="text-sm text-[#C6A87D] tracking-wider mb-4">Principal Advisor</p>
            <h2 className="font-[family-name:var(--font-noto-serif)] text-4xl text-[#000000] mb-6">Marcus Aurelius Thorne</h2>
          </div>
          <p className="text-lg text-[#474747] leading-relaxed mb-8">
            With over two decades of experience in high-yield luxury acquisitions, Marcus has shaped the portfolios of the world&apos;s most influential collectors. His approach is rooted in the belief that real estate is the purest form of functional art.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 border border-[#C6A87D] text-[#C6A87D] text-sm tracking-wider hover:bg-[#C6A87D] hover:text-white hover:scale-[1.02] transition-all duration-200">
            SCHEDULE CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}