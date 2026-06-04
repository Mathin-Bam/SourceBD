import React from "react";
import { MapPin, Users, Star, Award, ArrowRight } from "lucide-react";

export interface Supplier {
  id: string;
  name: string;
  banner?: string;
  tier: string;
  location: string;
  employees: string;
  rating: number;
  certifications: string[];
}

interface SupplierGridCardProps {
  supplier: Supplier;
}

export function SupplierGridCard({ supplier }: SupplierGridCardProps) {
  // Fallback to a sleek placeholder image if missing
  const bannerUrl =
    supplier.banner ||
    "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80";

  return (
    <div className="group relative w-full h-[480px] overflow-hidden rounded-sm cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] -translate-y-0 hover:-translate-y-1 shadow-[0_1px_3px_rgba(10,54,34,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(10,54,34,0.08)] bg-[#FDFDFB]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        style={{ backgroundImage: `url(${bannerUrl})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

      {/* Top Badges (Tier) */}
      <div className="absolute top-5 right-5 flex flex-col gap-2 items-end">
        <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-sm text-white text-xs font-medium border border-white/20">
          {supplier.tier}
        </span>
      </div>

      {/* Content (Bottom Placed) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
        <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-6 group-hover:translate-y-0">
          <h3 className="text-white font-bold text-3xl mb-3 line-clamp-2">
            {supplier.name}
          </h3>

          {/* Operational Data */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/90 text-sm mb-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> {supplier.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> {supplier.employees}
            </span>
            <span className="flex items-center gap-1.5 text-jute-gold">
              <Star className="w-3.5 h-3.5 fill-current" /> {supplier.rating.toFixed(1)}
            </span>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap gap-2 mb-6">
            {supplier.certifications.slice(0, 3).map((cert, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1.5 text-xs text-white bg-white/10 px-2.5 py-1 rounded-sm backdrop-blur-md"
              >
                <Award className="w-3 h-3" /> {cert}
              </span>
            ))}
            {supplier.certifications.length > 3 && (
              <span className="flex items-center gap-1.5 text-xs text-white bg-white/10 px-2.5 py-1 rounded-sm backdrop-blur-md">
                +{supplier.certifications.length - 3} More
              </span>
            )}
          </div>

          {/* View Profile CTA */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center text-jute-gold text-sm font-semibold">
            View Profile <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
