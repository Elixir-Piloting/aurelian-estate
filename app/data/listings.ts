export interface Property {
  id: string;
  name: string;
  location: string;
  locationCountry: string;
  price: number;
  priceDisplay: string;
  currency: string;
  sqft: number;
  beds: number;
  baths: number;
  type: string;
  yearBuilt: number;
  lotSize: string;
  architect: string;
  description: string;
  features: string[];
  amenities: { icon: string; name: string }[];
  images: {
    hero: string;
    gallery: string[];
  };
  status: "available" | "pending" | "sold";
}

export const listings: Property[] = [
  {
    id: "obsidian-pavilion",
    name: "The Obsidian Pavilion",
    location: "Marbella",
    locationCountry: "Spain",
    price: 12450000,
    priceDisplay: "$12,450,000",
    currency: "USD",
    sqft: 7200,
    beds: 5,
    baths: 6,
    type: "Villa",
    yearBuilt: 2023,
    lotSize: "1.2 Acres",
    architect: "Aris & Theron",
    description: "A definitive statement in modern brutalist architecture, perched on the cliffs of the Costa del Sol. Designed by the visionary firm Aris & Theron, The Obsidian Pavilion represents a departure from the traditional Mediterranean vernacular. Constructed from dark, textured cast-in-place concrete and floor-to-ceiling smoked glass, the structure dissolves the boundaries between shelter and landscape. The interior spaces are defined by vast spans and an absence of columns, creating a sense of weightless monumentality.",
    features: ["Ocean Views", "Private Beach Access", "Wine Cellar", "Home Theater", "Smart Home System"],
    amenities: [
      { icon: "wine_bar", name: "Climate Cellar" },
      { icon: "pool", name: "Infinity Edge Pool" },
      { icon: "theater", name: "Private Cinema" },
      { icon: "security", name: "Smart Security Hub" },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=2560&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1280&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1280&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1280&q=80",
      ],
    },
    status: "available",
  },
  {
    id: "monolith-house",
    name: "The Monolith House",
    location: "Joshua Tree",
    locationCountry: "USA",
    price: 12400000,
    priceDisplay: "$12,400,000",
    currency: "USD",
    sqft: 5800,
    beds: 4,
    baths: 5,
    type: "Desert Estate",
    yearBuilt: 2021,
    lotSize: "5 Acres",
    architect: "Studio void",
    description: "Rising from the desert landscape like a geological formation, The Monolith House redefines the relationship between architecture and nature. Floor-to-ceiling glass walls dissolve the boundary between interior and the extraordinary desert environment.",
    features: ["Desert Views", "Stargazing Platform", "Solar Powered", "Guest House", "Art Gallery"],
    amenities: [
      { icon: "pool", name: "Saltwater Pool" },
      { icon: "spa", name: "Outdoor Spa" },
      { icon: "gym", name: "Private Gym" },
      { icon: "fire", name: "Fire Pit Lounge" },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2560&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1280&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1280&q=80",
      ],
    },
    status: "available",
  },
  {
    id: "azura-coastal",
    name: "Azura Coastal Estate",
    location: "Malibu",
    locationCountry: "USA",
    price: 28500000,
    priceDisplay: "$28,500,000",
    currency: "USD",
    sqft: 9500,
    beds: 7,
    baths: 8,
    type: "Oceanfront Estate",
    yearBuilt: 2022,
    lotSize: "2.5 Acres",
    architect: "Murray & Associates",
    description: "An unparalleled oceanfront estate offering 180-degree panoramic views of the Pacific. This architectural masterpiece seamlessly blends indoor and outdoor living with retractable glass walls and infinity-edge pools that appear to merge with the ocean.",
    features: ["Ocean Views", "Private Beach", "Tennis Court", "Helipad", "Wine Room"],
    amenities: [
      { icon: "pool", name: "Ocean Infinity Pool" },
      { icon: "spa", name: "Spa & Wellness" },
      { icon: "theater", name: "Media Room" },
      { icon: "gym", name: "Fitness Center" },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=2560&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1280&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1280&q=80",
      ],
    },
    status: "available",
  },
  {
    id: "villa-ethos",
    name: "Villa Ethos",
    location: "Mykonos",
    locationCountry: "Greece",
    price: 14200000,
    priceDisplay: "€14,200,000",
    currency: "EUR",
    sqft: 6200,
    beds: 6,
    baths: 7,
    type: "Villa",
    yearBuilt: 2020,
    lotSize: "0.8 Acres",
    architect: "K Studio",
    description: "Perched on a private peninsula with views over the Aegean Sea, Villa Ethos embodies the essence of Greek luxury. Whitewashed walls meet contemporary concrete in a harmonious fusion of tradition and modernity.",
    features: ["Sea Views", "Private Dock", "Rooftop Terrace", "Guest Suite", "Cinema"],
    amenities: [
      { icon: "pool", name: "Infinity Pool" },
      { icon: "spa", name: "Hammam" },
      { icon: "bar", name: "Pool Bar" },
      { icon: "fire", name: "Fire Pit" },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2560&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1280&q=80",
        "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1280&q=80",
      ],
    },
    status: "available",
  },
  {
    id: "heritage-hall",
    name: "Heritage Hall",
    location: "Cotswolds",
    locationCountry: "UK",
    price: 9800000,
    priceDisplay: "£9,800,000",
    currency: "GBP",
    sqft: 8500,
    beds: 8,
    baths: 6,
    type: "Country Estate",
    yearBuilt: 1890,
    lotSize: "12 Acres",
    architect: "Restored by Thorne & Co",
    description: "A magnificent Grade II listed country estate that seamlessly blends period features with contemporary luxury. Original stone fireplaces, vaulted ceilings, and manicured gardens create an atmosphere of timeless elegance.",
    features: ["Parkland Views", "Tennis Court", "Staff Quarters", "Lake", "Walled Garden"],
    amenities: [
      { icon: "pool", name: "Indoor Pool" },
      { icon: "spa", name: "Spa" },
      { icon: "gym", name: "Gym" },
      { icon: "theater", name: "Snooker Room" },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2560&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1280&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1280&q=80",
      ],
    },
    status: "available",
  },
  {
    id: "symmetry-pavilion",
    name: "Symmetry Pavilion",
    location: "Sydney",
    locationCountry: "Australia",
    price: 22000000,
    priceDisplay: "$22,000,000",
    currency: "AUD",
    sqft: 7800,
    beds: 5,
    baths: 6,
    type: "Waterfront Villa",
    yearBuilt: 2021,
    lotSize: "0.6 Acres",
    architect: "Fender & Associates",
    description: "A striking waterfront residence that makes a bold architectural statement on Sydney Harbour. The pavilion-style design maximizes water views while maintaining privacy through geometric screening and layered spaces.",
    features: ["Harbor Views", "Private Jetty", "Boat Shed", "Rooftop Garden", "Wine Cellar"],
    amenities: [
      { icon: "pool", name: "Lap Pool" },
      { icon: "spa", name: "Spa" },
      { icon: "theater", name: "Cinema" },
      { icon: "gym", name: "Home Gym" },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2560&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1280&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1280&q=80",
      ],
    },
    status: "available",
  },
  {
    id: "horizon-penthouse",
    name: "Horizon Penthouse",
    location: "Manhattan",
    locationCountry: "USA",
    price: 24000000,
    priceDisplay: "$24,000,000",
    currency: "USD",
    sqft: 6200,
    beds: 4,
    baths: 5,
    type: "Penthouse",
    yearBuilt: 2023,
    lotSize: "N/A",
    architect: "SHoP Architects",
    description: "The crown jewel of Manhattan, this full-floor penthouse offers 360-degree views of Central Park and the city skyline. Floor-to-ceiling windows flood the space with light, while bespoke finishes and smart technology create the ultimate urban sanctuary.",
    features: ["Park Views", "City Views", "Private Elevator", "Terrace", "Library"],
    amenities: [
      { icon: "gym", name: "Private Gym" },
      { icon: "spa", name: "Spa" },
      { icon: "wine_bar", name: "Wine Room" },
      { icon: "theater", name: "Media Room" },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=2560&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1280&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1280&q=80",
      ],
    },
    status: "available",
  },
  {
    id: "villa-di-pietra",
    name: "Villa di Pietra",
    location: "Tuscany",
    locationCountry: "Italy",
    price: 8900000,
    priceDisplay: "$8,900,000",
    currency: "USD",
    sqft: 5500,
    beds: 6,
    baths: 5,
    type: "Historic Villa",
    yearBuilt: 1750,
    lotSize: "8 Acres",
    architect: "Restored by Rossi Architects",
    description: "A beautifully restored Tuscan villa surrounded by rolling hills and vineyards. Original terracotta floors, hand-painted ceilings, and ancient olive trees create an atmosphere of rustic sophistication.",
    features: ["Vineyard Views", "Olive Grove", "Guest House", "Wine Cave", "Chapel"],
    amenities: [
      { icon: "pool", name: "Pool" },
      { icon: "garden", name: "Formal Gardens" },
      { icon: "fire", name: "Outdoor Kitchen" },
      { icon: "wine_bar", name: "Wine Cellar" },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=2560&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1280&q=80",
        "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1280&q=80",
      ],
    },
    status: "available",
  },
  {
    id: "observatory-spire",
    name: "Observatory Spire",
    location: "New York",
    locationCountry: "USA",
    price: 18900000,
    priceDisplay: "$18,900,000",
    currency: "USD",
    sqft: 5400,
    beds: 4,
    baths: 4,
    type: "Tower Residence",
    yearBuilt: 2022,
    lotSize: "N/A",
    architect: "OMA",
    description: "A unique tower residence offering unparalleled views and groundbreaking design. The building's crystalline facade reflects the city, while interiors feature curved walls and cantilevered spaces that create a sense of floating above the city.",
    features: ["Skyline Views", "Private Terrace", "Art Collection Space", "Library", "Study"],
    amenities: [
      { icon: "gym", name: "Fitness Center" },
      { icon: "spa", name: "Spa" },
      { icon: "pool", name: "Private Pool" },
      { icon: "concierge", name: "Concierge" },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=2560&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1280&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1280&q=80",
      ],
    },
    status: "available",
  },
  {
    id: "alpine-retreat",
    name: "Alpine Retreat",
    location: "Zermatt",
    locationCountry: "Switzerland",
    price: 16500000,
    priceDisplay: "CHF 16,500,000",
    currency: "CHF",
    sqft: 4800,
    beds: 5,
    baths: 5,
    type: "Chalet",
    yearBuilt: 2021,
    lotSize: "0.4 Acres",
    architect: "Besiane Studio",
    description: "A contemporary reinterpretation of the traditional Swiss chalet, offering ski-in/ski-out access and panoramic views of the Matterhorn. Wood, stone, and glass combine to create a warm yet contemporary alpine sanctuary.",
    features: ["Mountain Views", "Ski Access", "Sauna", "Hot Tub", "Wine Cellar"],
    amenities: [
      { icon: "spa", name: "Spa" },
      { icon: "pool", name: "Pool" },
      { icon: "fire", name: "Fireplace" },
      { icon: "gym", name: "Gym" },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=2560&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1280&q=80",
        "https://images.unsplash.com/photo-1600566752734-2a0cd66c42e3?w=1280&q=80",
      ],
    },
    status: "available",
  },
  {
    id: "santorini-cliff",
    name: "Santorini Cliff House",
    location: "Santorini",
    locationCountry: "Greece",
    price: 7500000,
    priceDisplay: "€7,500,000",
    currency: "EUR",
    sqft: 3200,
    beds: 4,
    baths: 4,
    type: "Cave House",
    yearBuilt: 2020,
    lotSize: "0.3 Acres",
    architect: "Kois & Associates",
    description: "Carved into the iconic caldera cliffs, this revolutionary residence offers the classic Santorini experience with contemporary luxury. Cave-like spaces, infinity pools, and sunsets that appear within reach create an otherworldly living experience.",
    features: ["Caldera Views", "Infinity Pool", "Rooftop Terrace", "Wine Cave", "Private Dock"],
    amenities: [
      { icon: "pool", name: "Infinity Pool" },
      { icon: "spa", name: "Spa" },
      { icon: "wine_bar", name: "Wine Cellar" },
      { icon: "fire", name: "Fire Pit" },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=2560&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1280&q=80",
        "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=1280&q=80",
      ],
    },
    status: "available",
  },
  {
    id: "miami-mansion",
    name: "Biscayne Bay Mansion",
    location: "Miami",
    locationCountry: "USA",
    price: 35000000,
    priceDisplay: "$35,000,000",
    currency: "USD",
    sqft: 15000,
    beds: 10,
    baths: 12,
    type: "Waterfront Mansion",
    yearBuilt: 2023,
    lotSize: "1.5 Acres",
    architect: "Choeff Levy",
    description: "A spectacular waterfront estate on the exclusive Star Island. This modern masterpiece features flowing spaces, museum-quality finishes, and 200 feet of water frontage with direct bay access.",
    features: ["Bay Views", "200ft Waterfront", "Tennis Court", "Helipad", "Staff Quarters"],
    amenities: [
      { icon: "pool", name: "Pool & Spa" },
      { icon: "theater", name: "Theater" },
      { icon: "gym", name: "Gym" },
      { icon: "boat", name: "Boat Dock" },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2560&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1280&q=80",
        "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=1280&q=80",
      ],
    },
    status: "available",
  },
];

export const locations = ["Global Portfolio", "USA", "UK", "Italy", "Spain", "Greece", "Switzerland", "Australia"];

export const propertyTypes = ["All Residences", "Villa", "Penthouse", "Estate", "Chalet", "Cave House", "Waterfront", "Desert"];

export const priceRanges = [
  { label: "$5M — $50M+", min: 5000000, max: 100000000 },
  { label: "$5M — $10M", min: 5000000, max: 10000000 },
  { label: "$10M — $20M", min: 10000000, max: 20000000 },
  { label: "$20M — $35M", min: 20000000, max: 35000000 },
  { label: "$35M+", min: 35000000, max: 100000000 },
];

export function filterListings(
  listings: Property[],
  location: string,
  type: string,
  priceRange: { min: number; max: number } | null
): Property[] {
  return listings.filter((listing) => {
    if (location !== "Global Portfolio" && listing.locationCountry !== location) return false;
    if (type !== "All Residences" && !listing.type.toLowerCase().includes(type.toLowerCase())) return false;
    if (priceRange && (listing.price < priceRange.min || listing.price > priceRange.max)) return false;
    return true;
  });
}

export function getPropertyById(id: string): Property | undefined {
  return listings.find((p) => p.id === id);
}