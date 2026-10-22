"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function GwindSection() {
  const cards = [
    { img: "/images/conditional.svg", title: "24/7 Conditional Monitoring" },
    { img: "/images/sop.svg", title: "Sop- Based Maintenance Schedule" },
  ];

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Title + Icon */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold flex items-center justify-center gap-2 mb-4">
          GWinds' Solution
          
        </h2>

        {/* Two-line Content */}
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mb-12">
          We optimize wind energy investments through comprehensive solutions that enhance the turbines’ performance over its lifetime.
        </p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden rounded-2xl shadow-lg group"
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-lg font-medium px-4 py-2 rounded-lg whitespace-nowrap">
  {card.title}
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
