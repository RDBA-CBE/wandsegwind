"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function SolarPlantSpare() {
  // --- Static content ---
  const description =
    "WandSe stocks an expansive inventory of solar plant parts including inverters, string monitors, transformers, PV modules, and cabling to quickly fulfill orders and reduce downtime. Our catalogue for electrical and mechanical spare parts for solar exceeds 1000.";

  const gridCards = [
    { description: "<p>Inverter Duty Transformer</p>", file_path: "/images/solar-spare-parts/1" },
    { description: "<p>CT-PT</p>", file_path: "/images/solar-spare-parts/2" },
    { description: "<p>Modules</p>", file_path: "/images/solar-spare-parts/3" },
    { description: "<p>Single Core-Dcaluminum Armored Cable</p>", file_path: "/images/solar-spare-parts/4" },
    { description: "<p>HT-Panel</p>", file_path: "/images/solar-spare-parts/5" },
    { description: "<p>String Inverter</p>", file_path: "/images/solar-spare-parts/6" },
    { description: "<p>Inverter Duty Transformer</p>", file_path: "/images/solar-spare-parts/7" },
    { description: "<p>Single Core-DC String Copper Cable</p>", file_path: "/images/solar-spare-parts/8" },
    { description: "<p>Trible Core - DC String Copper Cable</p>", file_path: "/images/solar-spare-parts/9" },
    { description: "<p>MC4 Connectors</p>", file_path: "/images/solar-spare-parts/10" },
    { description: "<p>Solar Light</p>", file_path: "/images/solar-spare-parts/11" },
    { description: "<p>Module Mounting Structure</p>", file_path: "/images/solar-spare-parts/12" },
    { description: "<p>Fabrication Materials for Line Work</p>", file_path: "/images/solar-spare-parts/13" },
    { description: "<p>Isolator</p>", file_path: "/images/solar-spare-parts/14" },
    { description: "<p>MCB</p>", file_path: "/images/solar-spare-parts/15" },
    { description: "<p>MCCB</p>", file_path: "/images/solar-spare-parts/16" },
    { description: "<p>A-B SWITCH</p>", file_path: "/images/solar-spare-parts/17" },
    { description: "<p>Lighting Arrester</p>", file_path: "/images/solar-spare-parts/18" },
    { description: "<p>Surge Arrester</p>", file_path: "/images/solar-spare-parts/19" },
  ];

  const twoColumn = {
    title: "Services (Refurbishment)",
    images: [
      { file_path: "/images/solar-deatil-1.png" },
      { file_path: "/images/solar-detail-2.png" },
    ],
    description:
      "<h3>Process</h3><ul><li>Incoming equipment inspection of all the spares in the material.</li><li>UT and Scanning activities taken place in the surface body of the material.</li><li>Replacement of material like Bearings, Oilseals, V-seals, O-rings, Grease etc.</li><li>Bearing replacement, we already having the import bearing in our stock for Gearbox, Generator, Main shaft and Transformer.</li><li>Coil Windings are also newly done in the Transformer stator and rotor side.</li><li>For solar inverter and control panel assembling works also done.</li><li>Blades repairing work and scanning works also done like 250KW, 750KW, 850KW, 2MW, 2.6MW etc.,</li><li>Complete documentation like inspection document (assembly document) Test report and warranty certificate will be submitted at the work completion time.</li><li>Running Testing like Gear box, Generator, Mainshaft checks will be done.</li><li>Voltage injection test, IR test, Impulse voltage ratio test etc., test carried out in the transformer.</li><li>For surface issue we can done smoothing and machining works will be done.</li></ul>",
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
      <section className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 py-10">
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
        <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Two Column — Images + Content */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="w-full sm:w-[48%]">
              <h2 className="text-3xl font-semibold text-[#293E52] mb-4">
                {twoColumn.title}
              </h2>
              {twoColumn.images[0] && (
                <div className="relative h-120 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={twoColumn.images[0].file_path}
                    alt={twoColumn.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
            {twoColumn.images[1] && (
              <div className="w-full sm:w-[48%] sm:self-end -mt-150">
                <div className="relative h-120 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={twoColumn.images[1].file_path}
                    alt={twoColumn.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              className="
                text-[#293E52] text-base leading-relaxed
                [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mb-4
                [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2
              "
              dangerouslySetInnerHTML={{ __html: twoColumn.description }}
            />
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 text-left">
            Our Solution
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tabsData
              .filter((card) => card.uniq_name !== "solar_plant_spare_parts")
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
