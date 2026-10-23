"use client";

import InnerBanner from "@/components/Inner-Banner";
import { CallButton } from "@/components/Call-Action";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    brand: "GWind",
    tagline: "Wind Turbine O&M Solutions",
    description:
      "At GWind Services, we understand that the long-term success of your wind farm depends on more than just the initial installation. It hinges on a strategic, proactive, and intelligent approach to operation and maintenance (O&M) that ensures every wind turbine operates at peak efficiency throughout its lifecycle.",
    // highlights: [
    //   "24/7 SCADA & Conditional Monitoring",
    //   "SOP-Based Maintenance Schedules",
    //   "Annual O&M Contracts",
    //   "Generation Unit-Based Services",
    // ],
    image: "/images/conditional.svg",
    href: "/solutions/gwind",
    gradient: "from-[#329ACD] to-[#3AB257]",
    logo: "/images/logo.png",
  },
  {
    brand: "WandSe",
    tagline: "Renewable Energy Spare Parts",
    description:
      "Our legacy of more than 2 decades of service in the renewable business has helped us achieve an exhaustive number of satisfied asset owners and operators who have benefitted from cost reduction, flexibility, and sustainability in their procurement of spare parts through WandSe.",
    // highlights: [
    //   "Wind Turbine Spare Parts",
    //   "Solar Plant Spare Parts",
    //   "Cost Savings of 50%+",
    //   "Global Supply Chain",
    // ],
    image: "/images/solar-detail-2.png",
    href: "/solutions/wandse",
    gradient: "from-[#3AB257] to-[#329ACD]",
    logo: "/images/wandseLogo.jpg",
  },
];

export default function SolutionsBoth() {
  return (
    <>
      <InnerBanner title="Solutions" bgImage="/images/solun-banner.svg" />

      <section className="w-full py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#293E52] mb-4">
              Our Solutions
            </h2>
            <p className="text-[#293E52]/70 text-base md:text-lg max-w-2xl mx-auto">
              Two specialised brands, one shared mission — maximising the
              performance and value of your renewable energy assets.
            </p>
          </div>

          {/* Two Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cards.map((card) => (
              <div
                key={card.brand}
                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.brand}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay with brand name */}
                  {/* <div
                    className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-60`}
                  /> */}
                  <div className="absolute bottom-4 left-6">
                    <span className="text-white text-2xl md:text-3xl font-bold drop-shadow">
                      {card.brand}
                    </span>
                    <p className="text-white text-sm mt-0.5">{card.tagline}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <p className="text-[#293E52]/80 text-sm md:text-base leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto">
                    <a
                      href={card.href}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm bg-gradient-to-r ${card.gradient} hover:opacity-90 transition-opacity`}
                    >
                      Explore {card.brand} Solutions
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallButton />
    </>
  );
}
