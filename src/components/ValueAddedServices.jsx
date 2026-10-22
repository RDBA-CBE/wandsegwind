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

// --- Static content (Value-Added Services) ---
const description =
  "From procurement, warehousing, logistics to technical support and refurbishment, WandSe is your one-stop solution for renewable energy spare parts. By leveraging our global supplier network and strong in-house expertise, we deliver parts and services that meet the highest standards of quality and performance, and most critically, on time!";

const twoColumn = {
  title: "Repair and Refurbishment",
  leftImage: "/images/value-1.png",
  description:
    "Providing fully warrantied remanufactured or refurbished components (e.g., gearboxes, inverters) as a sustainable and cost-saving alternative to new parts. This requires in-house or outsourced technical repair expertise.",
  bottomImage: "/images/value-2.png",
};

const threeColumn = [
  {
    title: "Customized Parts Strategy",
    description:
      "Working with asset owners to develop bespoke spare parts management plans, inventory optimization models, and capital investment strategies for critical spares.",
    imagePath: "/images/value-3.png",
  },
  {
    title: "Technical Support",
    description:
      "Offering dedicated technical sales or parts application engineers who can advise customers on the correct part selection, troubleshooting, and potential upgrades or alternatives.",
    imagePath: "/images/value-4.png",
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

export default function ValueAddedServices() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10">

      {/* Description */}
      <div className="max-w-5xl mx-auto">
        <p className="mb-16 text-center text-sm md:text-base text-[#293E52]">
          {description}
        </p>
      </div>

      {/* Two Column — Repair and Refurbishment */}
      <section className="grid md:grid-cols-2 gap-8 items-start md:mb-36 mb-10 max-w-[90%] 2xl:max-w-[80%] mx-auto w-full">
        {/* Left Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
        >
          <img
            src={twoColumn.leftImage}
            alt={twoColumn.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content + Bottom Image */}
        <div className="flex flex-col justify-between h-full md:min-h-[600px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="md:mb-auto"
          >
            <h2 className="text-xl md:text-4xl font-bold text-[#1a1a1a] mt-5 mb-6">
              {twoColumn.title}
            </h2>
            <p className="text-md md:text-lg text-gray-600 leading-relaxed">
              {twoColumn.description}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="md:mt-8 mt-5"
          >
            <img
              src={twoColumn.bottomImage}
              alt={twoColumn.title}
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Three Column — Customized Parts Strategy & Technical Support */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#FBFDFF]">
        <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto space-y-0 px-2 md:px-0">
          {threeColumn.map((sec, i) => {
            const isOdd = (i + 1) % 2 !== 0;
            return (
              <div key={i}>
                {i !== 0 && <div className="border-t border-[#00000099]/20" />}
                <div className="grid grid-cols-1 lg:grid-cols-[40%_25%_40%]">
                  {/* Col 1 — title or image depending on row parity */}
                  {isOdd ? (
                    <div className="p-4 md:p-12 flex items-center">
                      <h2 className="text-xl md:text-3xl font-bold text-[#1a1a1a] leading-tight">
                        {sec.title}
                      </h2>
                    </div>
                  ) : (
                    <div className="min-h-[200px] flex items-center justify-center">
                      <img
                        src={sec.imagePath}
                        alt={sec.title}
                        className="w-full h-[250px] md:h-full object-cover px-4"
                      />
                    </div>
                  )}

                  {/* Col 2 — image or title */}
                  {isOdd ? (
                    <div className="min-h-[200px] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#00000099]/20">
                      <img
                        src={sec.imagePath}
                        alt={sec.title}
                        className="w-full h-[250px] md:h-full object-cover px-4"
                      />
                    </div>
                  ) : (
                    <div className="p-4 md:p-12 flex items-center border-b lg:border-b-0 lg:border-r border-[#00000099]/20">
                      <h2 className="text-xl md:text-3xl font-bold text-[#1a1a1a] leading-tight">
                        {sec.title}
                      </h2>
                    </div>
                  )}

                  {/* Col 3 — always description */}
                  <div className="p-4 md:p-12 flex items-center">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {sec.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Other Solutions */}
      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#293E52] mb-10">Other Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseTabs
              .filter((s) => s.uniq_name !== "valueadded_services")
              .map((s) => (
                <div
                  key={s.id}
                  className="border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
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
