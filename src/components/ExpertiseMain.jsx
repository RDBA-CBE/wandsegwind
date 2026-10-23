"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

// --- Static expertise tabs data ---
const tabsData = [
  {
    id: 1,
    data_uniq_id: "OGViZjRiNmYtNTFmYS00OGY2LWE3ZWYtOWE5MmQ3YTNmNThj",
    title: "Specialized Technical & Product Expertise",
    image_path: "/images/expert-icon-1.svg",
    card_image_path: "/images/exp-detail-1.png",
    description:
      "From procurement, warehousing, logistics to technical support and refurbishment, WandSe is your one-stop solution for renewable energy spare parts. By leveraging our global supplier network and strong in-house expertise, we deliver parts and services that meet the highest standards of quality and performance, and most critically, on time!",
    link:"/expertise/specialized-technical-product-expertise"
  },
  {
    id: 2,
    data_uniq_id: "YjNhODhmYzItMDI5MS00M2FhLTlmYzEtZDQ0MzVjMDg2Nzg5",
    title: "Global Supply Chain & Logistics Management",
    image_path: "/images/expert-icon-2.svg",
    card_image_path: "/images/exp-detail-2.png",
    description:
      "Our years of experience in the field have allowed us to build a reliable and genuine network of suppliers worldwide from the US & Europe to Asia. This is arguably the most critical area of expertise, focused on speed, cost-efficiency, and reliability.",
      link:"/expertise/global-supply-chain-logistics-management"
      
  },
  {
    id: 3,
    data_uniq_id: "NjAzZjMzMjItYzkzYy00NGM1LWIzOGMtYmQ2NTgyMGE0Mzhi",
    title: "Competitive and Conforming",
    image_path: "/images/expert-icon-3.svg",
    card_image_path: "/images/exp-detail-3.png",
    description:
      "Our market strength lies in delivering the perfect balance of cost-efficiency and compliance. With strategic global sourcing and a deep understanding of industry standards, we ensure every part meets regulatory requirements while maintaining highly competitive pricing. Our solutions help customers reduce operational costs without compromising on quality, safety, or performance.",
    link:"/expertise/competitive-and-conforming"
  },
  {
    id: 4,
    data_uniq_id: "YmZjOWMxZGMtY2Q1Zi00MmE4LTliMWEtZjFlMjA2NGE1Yjcz",
    title: "Value-Added Services",
    image_path: "/images/expert-icon-4.svg",
    card_image_path: "/images/exp-detail-4.png",
    description:
      "Through our group firms, Derrick Lifter India, GWind and Speed Mechatronix we are able to provide comprehensive solutions to our clients like.",
    link:"/expertise/value-added-services"
  },
];

export default function ExpertiseMain() {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabsData[activeTab];

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <p className="mb-16 text-center text-sm sm:text-sm md:text-base lg:text-base text-[#293E52]">
        From procurement, warehousing, logistics to technical support and
        refurbishment, WandSe is your one-stop solution for renewable energy
        spare parts. By leveraging our global supplier network and strong
        in-house expertise, we deliver parts and services that meet the highest
        standards of quality and performance, and most critically, on time! Our
        business expertise of spare parts for wind and solar plants are centered
        around a unique combination of technical knowledge, sophisticated supply
        chain management, and deep market understanding within the renewable
        energy sector&apos;s after-sales market, thanks to our core business of
        manufacturing, project development, construction, operation and
        maintenance in the renewable sector.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Tab Buttons */}
        <div className="flex flex-col gap-4 justify-start">
          {tabsData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(index)}
              className={`flex items-center gap-4 p-10 rounded-lg border transition-all duration-300 w-full ${
                activeTab === index
                  ? "border bg-[#EDEDED] text-[#293E52] scale-105"
                  : "border-gray-200 bg-white text-[#293E52] hover:scale-105"
              }`}
              aria-label={`Switch to ${tab.title}`}
            >
              <img
                src={tab.image_path}
                alt={tab.title}
                className="w-10 h-10 flex-shrink-0"
              />
              <span className="text-base sm:text-base md:text-lg lg:text-xl font-semibold">
                {tab.title}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.data_uniq_id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col gap-6 border border-[#329ACD] p-6 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#293E52]">
                {currentTab.title}
              </h2>
              <Link
                href={currentTab.link}
              >
                <ExternalLink className="w-5 h-5 text-[#293E52] hover:text-teal-600 transition-colors cursor-pointer" />
              </Link>
            </div>

            <img
              src={currentTab.card_image_path}
              alt={currentTab.title}
              className="w-full h-auto rounded-lg object-cover"
            />

            <div className="text-sm sm:text-sm md:text-base lg:text-base text-[#293E52] leading-relaxed">
              <div className="text-[#293E52] mb-4">
                <div
                  dangerouslySetInnerHTML={{
                    __html: currentTab.description,
                  }}
                />
                <Link
                  href={currentTab.link}
                  className="text-[#329ACD] font-semibold hover:underline inline-block mt-2"
                >
                  Show more
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
