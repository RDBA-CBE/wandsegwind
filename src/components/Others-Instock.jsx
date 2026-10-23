"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function OtherStockSection() {
  const cards = [
    {
      icon: "/images/network.svg",
      title: "In Network",
      content:
        "As part of Speed Team Group, GWind utilizes its sister companies’ expertise to source spare parts at not only on time but also at preferential pricing and delivery terms.",
      link: "/innetwork-inventory", // 🔗 Link 1
    },
    {
      icon: "/images/wandse-logo.jpeg",
      title: "Wandse",
      content:
        "WandSe provides a comprehensive range of high quality OEM and cost-effective alternative spare parts to maximize uptime for the renewable installations.",
      link: "/", // 🔗 Link 2
    },
  ];

  return (
    <section className="w-full bg-white py-16 ">
      <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52] mb-10 text-left">
          Others
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Top Row - Icons */}
              <div className="flex items-center justify-between mb-4">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-10 h-10 object-contain"
                />

                {/* External Link Icon with Navigation */}
                <Link href={card.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 text-[#293E52] hover:text-black cursor-pointer transition-colors" />
                </Link>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#293E52] mb-2">
                {card.title}
              </h3>

              {/* Content */}
              <p className="text-[#293E52] text-sm leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
