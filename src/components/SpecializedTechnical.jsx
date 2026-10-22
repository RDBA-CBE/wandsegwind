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
  "From procurement, warehousing, logistics to technical support and refurbishment, WandSe is your one-stop solution for renewable energy spare parts. By leveraging our global supplier network and strong in-house expertise, we deliver parts and services that meet the highest standards of quality and performance, and most critically, on time!";

const twoColumn = {
  title: "Multibrand/Multi-Technology Knowledge",
  leftImage: "/images/special-1.png",
  description:
    "Expertise in parts across a wide range of Original Equipment Manufacturers (OEMs) for both wind turbines (e.g., Vestas, Siemens Gamesa, GE, Suzlon) and solar systems (various module manufacturers, inverters, and battery storage solutions). Various Electrical and Mechanical systems expertise.",
  bottomImage: "/images/special-2.png",
};

const fiveContent = {
  title: "Component Specification Mastery",
  description:
    "As part of the Speed Team group which exclusively works in the renewable space, WandSe has detailed understanding of the specifications, compatibility, and interchangeability of critical components, including",
  imagePath: "/images/special-3.png",
  solutions: [
    {
      title: "Wind",
      description:
        "Gearboxes, generators, main shafts, blades, bearings, pitch and yaw systems, hydraulics, electronic components, and lubrication systems.",
      iconPath: "/images/special-icon-1.svg",
    },
    {
      title: "Solar",
      description:
        "Inverters (string, central, micro), solar modules (PV panels), batteries, racking/mounting structures, cables, combiner boxes, and monitoring hardware.",
      iconPath: "/images/special-icon-2.svg",
    },
  ],
};

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

export default function SpecializedTechnical() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
      {/* Description */}
      <div className="max-w-5xl mx-auto">
        <p className="mb-16 text-center text-sm sm:text-sm md:text-base lg:text-base text-[#293E52]">
          {description}
        </p>
      </div>

      {/* Two Column — Multibrand/Multi-Technology Knowledge */}
      <section className="grid md:grid-cols-2 gap-8 items-start md:mb-36 mb-10 max-w-[90%] 2xl:max-w-[80%] mx-auto w-full">
        {/* Left Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
        >
          {twoColumn.leftImage && (
            <img
              src={twoColumn.leftImage}
              alt={twoColumn.title}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>

        {/* Right Content */}
        <div className="flex flex-col justify-between h-full md:min-h-[600px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="md:mb-auto"
          >
            <h2 className="text-xl md:text-4xl font-bold text-[#1a1a1a] mt-5 mb-45">
              {twoColumn.title}
            </h2>
            <div className="text-md md:text-lg text-gray-600 leading-relaxed">
              {twoColumn.description}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="md:mt-8 mt-5"
          >
            {twoColumn.bottomImage && (
              <img
                src={twoColumn.bottomImage}
                alt={twoColumn.title}
                className="w-full h-auto rounded-lg"
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Five Content — Component Specification Mastery */}
      <section className="md:space-y-12 space-y-6 max-w-[90%] 2xl:max-w-[80%] mx-auto w-full">
        {/* Top Grid: Title + Description */}
        <div className="grid md:grid-cols-2 md:gap-20 gap-4 items-start">
          <div className="md:space-y-6">
            <h2 className="text-xl md:text-3xl font-bold text-[#1a1a1a] leading-tight">
              {fiveContent.title}
            </h2>
          </div>
          <div className="flex md:justify-end justify-center">
            <div className="md:text-right md:ml-auto">
              <div className="text-base md:text-lg text-gray-600 leading-relaxed">
                {fiveContent.description}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Solutions List + Main Image */}
        <div className="flex flex-col md:flex-row justify-between gap-8 items-start">
          {/* Left List */}
          <div className="md:py-16">
            <div className="md:space-y-8 space-y-4 mt-12">
              <div className="space-y-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row gap-3">
                {fiveContent.solutions.map((solution, i) => (
                  <div key={i} className="flex gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        {solution.iconPath && (
                          <img
                            src={solution.iconPath}
                            alt={solution.title}
                            className="w-10 h-10"
                          />
                        )}
                      </div>
                    </div>
                    {/* Text */}
                    <div className="space-y-2">
                      <h5 className="text-lg font-bold text-[#1a1a1a]">
                        {solution.title}
                      </h5>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {solution.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          {fiveContent.imagePath && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="w-full lg:w-[300px] md:flex-shrink-0"
            >
              <img
                src={fiveContent.imagePath}
                alt={fiveContent.title}
                className="w-full h-[420px] object-cover"
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Other Solutions */}
      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#293E52] mb-10">
            Other Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseTabs
              .filter((s) => s.uniq_name !== "specialized_technical_product_expertise")
              .map((s) => (
                <div
                  key={s.id}
                  className="border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-between mb-4">
                    <img
                      src={s.image_path}
                      alt={s.title}
                      className="w-10 h-10"
                    />
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
