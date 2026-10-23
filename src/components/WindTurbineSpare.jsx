"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function WindTurbineSpare() {
  // --- Static content ---
  const description =
    "Our major wind turbine deliverables include gearboxes, blades, generators, controller components, hydraulic parts, yaw gears, coolers, motors, and more. Our catalogue for electrical and mechanical spare parts for wind turbines exceeds 1000.";

  const gridCards = [
    { description: "<p>Gearboxes</p>", file_path: "/images/wind-spare-parts/1" },
    { description: "<p>Blades</p>", file_path: "/images/wind-spare-parts/2" },
    { description: "<p><strong>Generators</strong></p>", file_path: "/images/wind-spare-parts/3" },
    { description: "<p>Controller components</p>", file_path: "/images/wind-spare-parts/4" },
    { description: "<p>Hydraulic parts</p>", file_path: "/images/wind-spare-parts/5" },
    { description: "<p>Yaw gears</p>", file_path: "/images/wind-spare-parts/6" },
    { description: "<p>Coolers</p>", file_path: "/images/wind-spare-parts/7" },
    { description: "<p>Motors</p>", file_path: "/images/wind-spare-parts/8" },
    { description: "<p>Main shaft</p>", file_path: "/images/wind-spare-parts/9" },
    { description: "<p>Transformer</p>", file_path: "/images/wind-spare-parts/10" },
    { description: "<p>Gearbox</p>", file_path: "/images/wind-spare-parts/11" },
    { description: "<p>Blade Bearing</p>", file_path: "/images/wind-spare-parts/12" },
    { description: "<p>Yaw Top</p>", file_path: "/images/wind-spare-parts/13" },
    { description: "<p>Yaw Motor</p>", file_path: "/images/wind-spare-parts/14" },
    { description: "<p>Hydraulic Gear Oil Filter</p>", file_path: "/images/wind-spare-parts/15" },
    { description: "<p>Contactors</p>", file_path: "/images/wind-spare-parts/16" },
    { description: "<p>Yaw Brake Pad</p>", file_path: "/images/wind-spare-parts/17" },
    { description: "<p>Wind Vane</p>", file_path: "/images/wind-spare-parts/18" },
    { description: "<p>Breather</p>", file_path: "/images/wind-spare-parts/19" },
    { description: "<p>Capacitior</p>", file_path: "/images/wind-spare-parts/20" },
    { description: "<p>Anemometer</p>", file_path: "/images/wind-spare-parts/21" },
    { description: "<p>Hydraulic Valve</p>", file_path: "/images/wind-spare-parts/22" },
    { description: "<p>LT &amp; HT Cables</p>", file_path: "/images/wind-spare-parts/23" },
  ];

  const twoColumn = {
    title: "Acquiring Used Wind Turbines in India",
    description:
      "<p>A broad selection of pre-owned wind turbines from leading manufacturers like Suzlon, Vestas, Gamesa, NEG Micon, and Enercon are available for purchase in India. These turbines come from various models and years of operation and were previously sited across the country. Turbine availability stems from operators needing to decommission units for reasons such as expired land leases, planning terms ending, component failures, or financial limitations. Units are sold directly to other operators or to refurbishment/remanufacturing companies capable of restoration.</p><p>With the large volume of used turbines in India, buyers can access machines from renowned OEMs at a fraction of new prices. This presents opportunities to cost-effectively expand wind power portfolios. But careful inspection and evaluation is crucial to determine unit viability and required reconditioning. WandSe\u2019s expertise helps buyers navigate the used wind turbine market in India. We assist with procurement, inspection, logistics, restoration, and recommissioning to maximize the value of pre-owned assets.</p>",
  };

  // --- Wandse solution tabs data ---
  const tabsData = [
    {
      id: 1,
      data_uniq_id: "wind-turbine-spare-parts",
      title: "Wind Turbine Spare Parts",
      uniq_name: "wind_turbine_spare_parts",
      card_image_path: "/images/wind-spare.png",
    },
    {
      id: 2,
      data_uniq_id: "solar-plant-spare-parts",
      title: "Solar Plant Spare Parts",
      uniq_name: "solar_plant_spare_parts",
      card_image_path: "/images/solar-spare.png",
    },
  ];

  // --- Grid Load More / Less ---
  const ITEMS_PER_PAGE = 8;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, gridCards.length));
  };

  const handleLoadLess = () => {
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <>
      {/* Description */}
      <section className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 py-10">
        <div
          className="
            text-[#293E52] leading-relaxed text-center
            [&_p]:text-base [&_p]:mb-2
          "
          dangerouslySetInnerHTML={{ __html: `<p>${description}</p>` }}
        />
      </section>

      {/* Grid — Spare Parts Cards */}
      <section className="bg-white md:py-5">
        <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gridCards.slice(0, visibleCount).map((card, i) => (
              <div
                key={i}
                className="relative h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.file_path})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                {card.description && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div
                      className="text-white text-sm sm:text-base font-medium leading-tight text-pretty"
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {gridCards.length > ITEMS_PER_PAGE && (
            <div className="flex justify-start mt-10">
              {visibleCount < gridCards.length ? (
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-2 rounded-sm bg-gradient-to-r from-[#329ACD] to-[#3AB257] text-white font-medium hover:opacity-90 transition-all"
                >
                  Load More
                </button>
              ) : (
                <button
                  onClick={handleLoadLess}
                  className="px-6 py-2 rounded-sm bg-gradient-to-r from-[#329ACD] to-[#3AB257] text-white font-medium hover:opacity-90 transition-all"
                >
                  Load Less
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Two Column — Content Only */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-1/3">
              <h2 className="text-5xl font-semibold text-[#293E52]">
                {twoColumn.title}
              </h2>
            </div>
            <div className="w-full md:w-2/3">
              <div
                className="
                  text-[#293E52] text-base leading-relaxed
                  [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2
                "
                dangerouslySetInnerHTML={{ __html: twoColumn.description }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 text-left">
            Our Solution
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tabsData
              .filter((card) => card.uniq_name !== "wind_turbine_spare_parts")
              .map((card, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-row gap-4 items-center mb-4">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#293E52] text-center">
                      {card.title}
                    </h3>
                    <Link href={`/solutions/wandse/${card.data_uniq_id}`}>
                      <ExternalLink className="md:w-6 md:h-6 w-4 h-4 mt-1 text-[#293E52] hover:text-teal-600 transition-colors" />
                    </Link>
                  </div>
                  {card.card_image_path && (
                    <img
                      src={card.card_image_path}
                      alt={card.title}
                      className="w-full h-auto rounded-sm p-4"
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
