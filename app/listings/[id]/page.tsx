import Image from "next/image";
import { notFound } from "next/navigation";
import { getPropertyById, listings } from "../../data/listings";
import { Metadata } from "next";

export function generateStaticParams() {
  return listings.map((property) => ({
    id: property.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);
  
  if (!property) {
    return { title: "Property Not Found | Aurelian Estate" };
  }

  return {
    title: `${property.name} | Aurelian Estate`,
    description: property.description.slice(0, 160),
  };
}

export default async function PropertyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] overflow-hidden">
          <Image
            src={property.images.hero}
            alt={property.name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-12 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <div className="max-w-[1400px] mx-auto">
            <p className="text-sm text-[#C6A87D] tracking-wider mb-2">
              AVAILABLE PROPERTIES | {property.location.toUpperCase()}
            </p>
            <h1 className="font-[family-name:var(--font-noto-serif)] text-5xl text-white font-bold">
              {property.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-8 py-12 bg-[#F9F9F9] opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-3xl font-bold text-[#000000] mb-2">{property.priceDisplay}</p>
            <p className="text-lg text-[#474747]">{property.sqft.toLocaleString()} SQ FT | {property.beds} BEDS | {property.baths} BATHS</p>
          </div>
          <button className="px-8 py-3 bg-[#000000] text-[#E2E2E2] text-sm tracking-wider hover:bg-[#3B3B3B] hover:scale-[1.02] transition-all duration-200">
            ARRANGE A PRIVATE VIEWING
          </button>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-8 py-16 bg-[#FFFFFF] opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
        <div className="max-w-3xl">
          <p className="text-lg text-[#474747] leading-relaxed mb-8">
            {property.description}
          </p>
        </div>
      </section>

      <section className="bg-[#F3F3F3] py-16 px-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-[family-name:var(--font-noto-serif)] text-2xl text-[#000000] mb-8">SPECIFICATIONS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-xs text-[#C6A87D] tracking-wider mb-2">YEAR BUILT</p>
              <p className="text-[#1A1C1C]">{property.yearBuilt}</p>
            </div>
            <div>
              <p className="text-xs text-[#C6A87D] tracking-wider mb-2">LOT SIZE</p>
              <p className="text-[#1A1C1C]">{property.lotSize}</p>
            </div>
            <div>
              <p className="text-xs text-[#C6A87D] tracking-wider mb-2">ARCHITECT</p>
              <p className="text-[#1A1C1C]">{property.architect}</p>
            </div>
            <div>
              <p className="text-xs text-[#C6A87D] tracking-wider mb-2">TYPE</p>
              <p className="text-[#1A1C1C]">{property.type.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-8 py-16 bg-[#F9F9F9] opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
        <h2 className="font-[family-name:var(--font-noto-serif)] text-2xl text-[#000000] mb-8">FEATURES</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {property.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-[#474747]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6A87D" strokeWidth="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F3F3] py-16 px-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-[family-name:var(--font-noto-serif)] text-2xl text-[#000000] mb-8">AMENITIES</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {property.amenities.map((amenity) => (
              <div key={amenity.name} className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#000000] text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="text-[#1A1C1C]">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-8 py-16 bg-[#FFFFFF] opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-noto-serif)] text-2xl text-[#000000] mb-6">ARRANGE A PRIVATE VIEWING</h2>
          <p className="text-[#474747] mb-8 leading-relaxed">
            Direct consultations are available for qualified investors. Please provide your contact details and our concierge will reach out within 24 hours.
          </p>
          <div className="flex gap-8 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#000000]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="text-[#1A1C1C]">+44 (0) 20 7946 0148</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#000000]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/>
              </svg>
              <span className="text-[#1A1C1C]">CONCIERGE@AURELIANESTATE.COM</span>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-xs text-[#C6A87D] tracking-wider mb-2">FULL NAME</label>
              <input type="text" className="w-full py-2 border-b border-[#C6C6C6]/40 bg-transparent focus:outline-none focus:border-[#C6A87D] transition-colors" />
            </div>
            <div>
              <label className="block text-xs text-[#C6A87D] tracking-wider mb-2">EMAIL ADDRESS</label>
              <input type="email" className="w-full py-2 border-b border-[#C6C6C6]/40 bg-transparent focus:outline-none focus:border-[#C6A87D] transition-colors" />
            </div>
            <div>
              <label className="block text-xs text-[#C6A87D] tracking-wider mb-2">PREFERRED SCHEDULE</label>
              <input type="text" className="w-full py-2 border-b border-[#C6C6C6]/40 bg-transparent focus:outline-none focus:border-[#C6A87D] transition-colors" />
            </div>
            <button className="px-8 py-3 bg-[#000000] text-[#E2E2E2] text-sm tracking-wider hover:bg-[#3B3B3B] hover:scale-[1.02] transition-all duration-200 mt-4">
              SUBMIT REQUEST
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}