import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Aurelian Estate",
  description: "Begin the conversation. Get in touch with our team for private client services and exceptional property acquisitions.",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2560&q=80"
          alt="Contact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <h1 className="font-[family-name:var(--font-noto-serif)] text-5xl md:text-6xl font-bold tracking-tight">
            Begin the Conversation
          </h1>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-8 py-16 bg-[#F9F9F9]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            <h2 className="font-[family-name:var(--font-noto-serif)] text-3xl text-[#000000] mb-6">Get in Touch</h2>
            <p className="text-[#474747] mb-8 leading-relaxed">
              Whether you are looking to acquire an exceptional property or wish to discuss selling a unique residence, our team is at your disposal.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm text-[#C6A87D] tracking-wider mb-2">GENERAL INQUIRIES</h3>
                <p className="text-[#1A1C1C]">info@aurelianestate.com</p>
              </div>
              <div>
                <h3 className="text-sm text-[#C6A87D] tracking-wider mb-2">PRIVATE CLIENT SERVICES</h3>
                <p className="text-[#1A1C1C]">clients@aurelianestate.com</p>
              </div>
              <div>
                <h3 className="text-sm text-[#C6A87D] tracking-wider mb-2">PRESS</h3>
                <p className="text-[#1A1C1C]">press@aurelianestate.com</p>
              </div>
              <div>
                <h3 className="text-sm text-[#C6A87D] tracking-wider mb-2">TELEPHONE</h3>
                <p className="text-[#1A1C1C]">+44 (0) 20 7946 0148</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <h3 className="font-[family-name:var(--font-noto-serif)] text-xl text-[#000000] mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-[#C6A87D] tracking-wider mb-2">FIRST NAME</label>
                  <input type="text" className="w-full py-2 border-b border-[#C6C6C6]/40 bg-transparent focus:outline-none focus:border-[#C6A87D] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-[#C6A87D] tracking-wider mb-2">LAST NAME</label>
                  <input type="text" className="w-full py-2 border-b border-[#C6C6C6]/40 bg-transparent focus:outline-none focus:border-[#C6A87D] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#C6A87D] tracking-wider mb-2">EMAIL</label>
                <input type="email" className="w-full py-2 border-b border-[#C6C6C6]/40 bg-transparent focus:outline-none focus:border-[#C6A87D] transition-colors" />
              </div>
              <div>
                <label className="block text-xs text-[#C6A87D] tracking-wider mb-2">TELEPHONE</label>
                <input type="tel" className="w-full py-2 border-b border-[#C6C6C6]/40 bg-transparent focus:outline-none focus:border-[#C6A87D] transition-colors" />
              </div>
              <div>
                <label className="block text-xs text-[#C6A87D] tracking-wider mb-2">INTEREST</label>
                <div className="relative">
                  <select className="w-full py-2 border-b border-[#C6C6C6]/40 bg-transparent focus:outline-none focus:border-[#C6A87D] text-[#1A1C1C] appearance-none cursor-pointer">
                    <option value="">Select an option</option>
                    <option value="acquisition">Property Acquisition</option>
                    <option value="sale">Sell Your Property</option>
                    <option value="valuation">Market Valuation</option>
                    <option value="other">General Inquiry</option>
                  </select>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="absolute right-0 top-1/2 -translate-y-1/2 text-[#777777] pointer-events-none">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#C6A87D] tracking-wider mb-2">MESSAGE</label>
                <textarea rows={4} className="w-full py-2 border-b border-[#C6C6C6]/40 bg-transparent focus:outline-none focus:border-[#C6A87D] resize-none transition-colors" />
              </div>
              <button type="submit" className="px-8 py-3 bg-[#000000] text-[#E2E2E2] text-sm tracking-wider hover:bg-[#3B3B3B] hover:scale-[1.02] transition-all duration-200">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3] py-16 px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-[family-name:var(--font-noto-serif)] text-3xl text-[#000000] mb-12 text-center opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>Global Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { city: "London", area: "Mayfair", phone: "+44 (0) 20 7946 0148" },
              { city: "New York", area: "Tribeca", phone: "+1 (212) 555 0123" },
              { city: "Hong Kong", area: "Central", phone: "+852 1234 5678" },
            ].map((office, index) => (
              <div key={office.city} className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 100}ms`, animationFillMode: 'forwards' }}>
                <h3 className="font-[family-name:var(--font-noto-serif)] text-xl text-[#000000] mb-2">{office.city}</h3>
                <p className="text-sm text-[#474747] mb-2">{office.area}</p>
                <p className="text-sm text-[#777777]">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}