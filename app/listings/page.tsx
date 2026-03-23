"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { listings, locations, propertyTypes, priceRanges, filterListings, Property } from "../data/listings";
import Dropdown from "../components/Dropdown";

const locationOptions = locations.map((loc) => ({ value: loc, label: loc }));
const typeOptions = propertyTypes.map((type) => ({ value: type, label: type }));
const priceOptions = priceRanges.map((range) => ({ value: range.label, label: range.label }));

export default function ListingsPage() {
  const [location, setLocation] = useState("Global Portfolio");
  const [propertyType, setPropertyType] = useState("All Residences");
  const [priceRange, setPriceRange] = useState("$5M — $50M+");

  const filteredListings = useMemo(() => {
    const range = priceRanges.find((r) => r.label === priceRange) || priceRanges[0];
    return filterListings(listings, location, propertyType, range);
  }, [location, propertyType, priceRange]);

  return (
    <div className="min-h-screen">
      <section className="bg-[#F9F9F9] py-24 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            <h1 className="font-[family-name:var(--font-noto-serif)] text-5xl font-bold text-[#000000] mb-6 tracking-tight">
              The Collection
            </h1>
            <p className="text-lg text-[#474747] max-w-2xl mx-auto leading-relaxed mb-4">
              A curated selection of architectural masterpieces. Each property in the Aurelian portfolio is chosen for its structural integrity, historical significance, or visionary modernism.
            </p>
            <p className="text-sm text-[#777777] tracking-wider">
              Displaying {filteredListings.length} Exclusive Estates
            </p>
          </div>

          <div className="bg-[#F3F3F3] p-6 mb-12 opacity-0 animate-fade-in-up relative z-40" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Dropdown
                label="Location"
                options={locationOptions}
                value={location}
                onChange={setLocation}
              />
              <Dropdown
                label="Property Type"
                options={typeOptions}
                value={propertyType}
                onChange={setPropertyType}
              />
              <Dropdown
                label="Price Range"
                options={priceOptions}
                value={priceRange}
                onChange={setPriceRange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredListings.map((property, index) => (
              <Link 
                key={property.id} 
                href={`/listings/${property.id}`} 
                className="group block opacity-0 animate-fade-in-up hover-lift"
                style={{ animationDelay: `${(index + 2) * 50}ms`, animationFillMode: 'forwards' }}
              >
                <div className="relative aspect-[16/9] mb-4 overflow-hidden bg-[#E2E2E2]">
                  <Image
                    src={property.images.hero}
                    alt={property.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover image-zoom group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-0 left-0 w-[20px] h-[1px] bg-[#C6A87D] group-hover:w-[40px] transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-[20px] h-[1px] bg-[#C6A87D] group-hover:w-[40px] transition-all duration-500" />
                  {property.status === "pending" && (
                    <div className="absolute top-4 right-4 bg-[#C6A87D] text-white text-xs px-3 py-1 tracking-wider">
                      PENDING
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-[family-name:var(--font-noto-serif)] text-xl text-[#000000] group-hover:text-[#C6A87D] transition-colors">
                    {property.name}
                  </h3>
                  <p className="text-sm text-[#777777] tracking-wide">{property.location}, {property.locationCountry}</p>
                  <p className="text-lg font-bold text-[#000000]">{property.priceDisplay}</p>
                  <div className="flex gap-4 text-sm text-[#474747] pt-2">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft.toLocaleString()} Sq Ft</span>
                  </div>
                  <span className="inline-block text-sm text-[#C6A87D] tracking-wider group-hover:underline mt-2">
                    View Details
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredListings.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-[#474747]">No properties match your criteria.</p>
              <button 
                onClick={() => {
                  setLocation("Global Portfolio");
                  setPropertyType("All Residences");
                  setPriceRange("$5M — $50M+");
                }}
                className="mt-4 text-[#C6A87D] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}