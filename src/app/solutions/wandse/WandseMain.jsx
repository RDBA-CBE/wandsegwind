"use client";

import Link from "next/link";
import { BASE_URL } from "@/lib/api";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import InnerBanner from "@/components/Inner-Banner";
import { CallButton } from "@/components/Call-Action";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function ProcessCircle({ imgSrc, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="flex flex-col items-center gap-4"
    >
      {/* Circle */}
      <motion.div
        className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-to-b from-[#329ACD] to-[#3AB257] border border-blue-200 flex items-center justify-center shadow-md hover:shadow-lg"
        whileHover={{
          boxShadow: "0px 0px 20px rgba(58, 178, 87, 0.5)",
        }}
      >
        <img
          src={imgSrc}
          alt={title}
          className="object-contain w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20"
        />
      </motion.div>

      {/* Title */}
      <p className="text-sm md:text-base font-semibold text-[#293E52] text-center leading-snug max-w-[160px] break-words">
        {title}
      </p>
    </motion.div>
  );
}

// Main Component
export default function WandseMain() {
  const pageData = {
    introText:
      "Our legacy of more than 2 decades of service in the renewable business has helped us achieve an exhaustive number of satisfied asset owners and operators who have benefitted from cost reduction, flexibility, and sustainability in their procurement of spare parts through WandSe.",
    introtext1:
      "With decades of combined experience and established relationships across the renewable energy sector, we understand the costs of delayed maintenance and repairs. That's why we have invested heavily in a robust global supply chain to rapidly procure quality parts and get them where they need to go.",
    processItems: [
      {
        id: 1,
        imgSrc: "/images/soln1.svg",
        title: "Cost Optimisation Savings of more than 50%",
      },
      {
        id: 2,
        imgSrc: "/images/soln4.svg",
        title: "Supply Chain Flexibility & Resilience",
      },
      {
        id: 3,
        imgSrc: "/images/soln3.svg",
        title: "Sustainable Sourcing",
      },
      {
        id: 4,
        imgSrc: "/images/soln2.svg",
        title: "Technical Innovation and Performance",
      },
    ],
  };

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

  return (
    <>
      {/* Intro Section */}
      <section className="w-full flex flex-col lg:flex-row items-start justify-between py-16 max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">
        <div className="w-full space-y-6 text-[#293E52] text-base leading-relaxed grid md:grid-cols-2 grid-cols-1 gap-4">
          <p>{pageData.introText}</p>
          <p>{pageData.introtext1}</p>
        </div>
      </section>

      {/* Process / Innovation Section */}
      <section className="w-full py-0 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto">
          <motion.div
            className="w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Desktop Layout - Zig-Zag */}
            <div className="hidden lg:flex justify-center items-start gap-6 lg:gap-20 max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto mt-4">
              {pageData.processItems.map((item, index) => {
                const isUpper = index === 1 || index === 3;
                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className={`flex flex-col items-center ${isUpper ? "-mt-12" : "mt-12"}`}
                  >
                    <ProcessCircle imgSrc={item.imgSrc} title={item.title} />
                  </motion.div>
                );
              })}
            </div>

            {/* Tablet Layout */}
            <div className="hidden md:flex lg:hidden flex-wrap justify-center gap-6 lg:gap-8">
              {pageData.processItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`flex justify-center ${index % 2 === 0 ? "translate-y-0" : "translate-y-12"}`}
                >
                  <ProcessCircle imgSrc={item.imgSrc} title={item.title} />
                </motion.div>
              ))}
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col gap-8">
              {pageData.processItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="flex justify-center"
                >
                  <ProcessCircle imgSrc={item.imgSrc} title={item.title} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spare Parts Cards */}
      <section className="w-full md:py-28 md:pb-15 py-12 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {tabsData.map((item) => (
              <div
                key={item.data_uniq_id}
                id={item.uniq_name.replace(/_/g, "-")}
                className="scroll-mt-24"
              >
                <Card className="transition-all duration-300 hover:shadow-lg h-full">
                  <CardContent className="flex flex-col items-center justify-center min-h-[200px] md:min-h-[300px]">
                    {/* TITLE + ICON */}
                    <div className="flex flex-row gap-4 items-center mb-4">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#293E52] text-center">
                        {item.title}
                      </h3>

                      {/* LINK ICON */}

                      <a
                        href={`/solutions/wandse/${item.data_uniq_id}`}
                      >
                        <ExternalLink
                          className="w-6 h-6"
                          strokeWidth={2}
                          style={{ stroke: "url(#grad)" }}
                        />
                        <svg width="0" height="0">
                          <linearGradient
                            id="grad"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#3AB257" />
                            <stop offset="100%" stopColor="#329ACD" />
                          </linearGradient>
                        </svg>
                      </a>
                    </div>

                    {/* DESCRIPTION */}
                    {item.description && (
                      <div
                        className="text-sm text-[#293E52] text-center max-w-md mb-4"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    )}

                    {/* IMAGE */}
                    {item.card_image_path && (
                      <img
                        src={item.card_image_path}
                        alt={item.title}
                        className="w-full h-auto rounded-sm p-4"
                      />
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallButton />
    </>
  );
}
