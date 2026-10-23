"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

// --- Animation variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Static content ---
const description =
  "Our years of experience in the field have allowed us to build a reliable and genuine network of suppliers worldwide from the US & Europe to Asia. This is arguably the most critical area of expertise, focused on speed, cost-efficiency, and reliability.";

const fiveContent = {
  title: "Inventory Optimization & Planning",
  description:
    "Employing data-driven demand forecasting and sophisticated inventory systems (often centralized) to:",
  imagePath: "/images/global-1.png",
  solutions: [
    {
      title: "Minimize Downtime (O&M focus)",
      description:
        "Stock critical parts to meet fast-turnaround requirements (e.g., 24-hour dispatch for highly critical components).",
      iconPath: "/images/global-icon-1.svg",
    },
    {
      title: "Cost Efficiency",
      description:
        "Balance stock levels to reduce capital tied up in inventory while mitigating the risk of long lead times for essential parts.",
      iconPath: "/images/global-icon-2.svg",
    },
  ],
};

const threeColumn = [
  {
    title: "Complex Logistics",
    description:
      "Expertise in handling the logistics of large, fragile, or high-value components (e.g., gearboxes, inverters, large solar panels) across borders, including customs clearance, specialized handling, and various modes of transport.",
    imagePath: "/images/global-2.png",
  },
  {
    title: "On-time Supply",
    description:
      "Coordinating supply with scheduled maintenance windows to minimize downtime and avoid on-site storage costs for the plant operator.",
    imagePath: "/images/global-3.png",
  },
];

// --- Expertise tabs (for Other Solutions) ---
const expertiseTabs = [
  {
    id: 1,
    uniq_name: "specialized_technical_product_expertise",
    title: "Specialized Technical & Product Expertise",
    image_path: "/images/expert-icon-1.svg",
    description:
      "From procurement, warehousing, logistics to technical support and refurbishment, WandSe is your one-stop solution for renewable energy spare parts.",
  },
  {
    id: 2,
    uniq_name: "global_supply_chain_logistics_management",
    title: "Global Supply Chain & Logistics Management",
    image_path: "/images/exp-icon-3.svg",
    description:
      "Our years of experience in the field have allowed us to build a reliable and genuine network of suppliers worldwide from the US & Europe to Asia.",
  },
  {
    id: 3,
    uniq_name: "competitive_and_conforming",
    title: "Competitive and Conforming",
    image_path: "/images/exp-icon-2.svg",
    description:
      "Our market strength lies in delivering the perfect balance of cost-efficiency and compliance. With strategic global sourcing and a deep understanding of industry standards.",
  },
  {
    id: 4,
    uniq_name: "valueadded_services",
    title: "Value-Added Services",
    image_path: "/images/exp-icon-1.svg",
    description:
      "Through our group firms, Derrick Lifter India, GWind and Speed Mechatronix we are able to provide comprehensive solutions to our clients.",
  },
];

export default function GlobalSupplyChain() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
      {/* Description */}
      <div className="max-w-5xl mx-auto">
        <p className="mb-16 text-center text-sm sm:text-sm md:text-base lg:text-base text-[#293E52]">
          {description}
        </p>
      </div>

      {/* Five Content — Inventory Optimization & Planning */}
      <section className="lg:space-y-12 space-y-6 max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto w-full">
        <div className="grid lg:grid-cols-2 lg:gap-20 gap-4 items-start">
          <div className="lg:space-y-6">
            <h2 className="text-xl md:text-3xl font-bold text-[#1a1a1a] leading-tight">
              {fiveContent.title}
            </h2>
          </div>
          <div className="flex lg:justify-end">
            <div className="lg:text-right lg:ml-auto">
              <div className="text-base md:text-lg text-gray-600 leading-relaxed">
                {fiveContent.description}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
          <div className="w-full lg:py-16">
            <div className="lg:space-y-8 space-y-4 mt-6 lg:mt-12">
              <div className="space-y-8 border-t border-gray-200 pt-8 flex flex-col lg:flex-row gap-3">
                {fiveContent.solutions.map((solution, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        {solution.iconPath && (
                          <img src={solution.iconPath} alt={solution.title} className="w-10 h-10" />
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-lg font-bold text-[#1a1a1a]">{solution.title}</h5>
                      <div className="text-sm text-gray-600 leading-relaxed">{solution.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {fiveContent.imagePath && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="w-full lg:w-[300px] lg:flex-shrink-0"
            >
              <img src={fiveContent.imagePath} alt={fiveContent.title} className="w-full h-56 sm:h-72 lg:h-[420px] object-cover" />
            </motion.div>
          )}
        </div>
      </section>

      {/* Three Column — Complex Logistics & On-time Supply */}
      <section className="w-full bg-[#FBFDFF] mt-10">
        <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-2 md:px-0">
          {threeColumn.map((sec, i) => {
            const isOdd = Number(i + 1) % 2 !== 0;
            return (
              <div key={i}>
                {i !== 0 && <div className="border-t border-[#00000099]/20"></div>}
                <div className="grid grid-cols-1 xl:grid-cols-[32%_32%_36%]">
                  {isOdd ? (
                    <div className="p-4 md:p-12 flex items-center">
                      <h2 className="text-xl md:text-3xl font-bold text-[#1a1a1a] leading-tight">{sec.title}</h2>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center py-4">
                      <img src={sec.imagePath} alt={sec.title} className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg px-2" />
                    </div>
                  )}
                  {isOdd ? (
                    <div className="flex items-center justify-center py-4 xl:border-r border-[#00000099]/20">
                      <img src={sec.imagePath} alt={sec.title} className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg px-2" />
                    </div>
                  ) : (
                    <div className="p-4 md:p-12 flex items-center xl:border-r border-[#00000099]/20">
                      <h2 className="text-xl md:text-3xl font-bold text-[#1a1a1a] leading-tight">{sec.title}</h2>
                    </div>
                  )}
                  <div className="p-4 md:p-12 flex items-center">
                    <div className="text-base md:text-lg text-gray-700 leading-relaxed">{sec.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Other Solutions */}
      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#293E52] mb-10">Other Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseTabs
              .filter((s) => s.uniq_name !== "global_supply_chain_logistics_management")
              .map((s) => (
                <div key={s.id} className="border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between mb-4">
                    <img src={s.image_path} alt={s.title} className="w-10 h-10" />
                    <Link href={`/expertise/${s.uniq_name.replace(/_/g, "-")}`}>
                      <ExternalLink className="w-5 h-5 text-gray-500 hover:text-teal-600 transition-colors" />
                    </Link>
                  </div>
                  <h3 className="font-semibold text-[#293E52]">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
