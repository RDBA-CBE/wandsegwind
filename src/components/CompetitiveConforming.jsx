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
  "Our market strength lies in delivering the perfect balance of cost-efficiency and compliance. With strategic global sourcing and a deep understanding of industry standards, we ensure every part meets regulatory requirements while maintaining highly competitive pricing. Our solutions help customers reduce operational costs without compromising on quality, safety, or performance.";

const twoColumn = {
  title: "In Stock parts",
  leftImage: "/images/competitive-1.png",
  description:
    "WandSe has made generous investments to stock critical spare parts for both electrical and mechanical parts of solar and wind turbines. This allows an in-time delivery solution to your critical requirement.",
  bottomImage: "/images/competitive-2.png",
};

const fiveContent = {
  title: "Competitive Pricing & Cost Flexibility",
  description:
    "Leveraging global sourcing and economies of scale to deliver high-quality parts at competitive prices while meeting diverse client requirements.",
  imagePath: "/images/competitive-3.png",
  solutions: [
    {
      title: "Optimized Procurement",
      description:
        "Provide cost-effective alternatives to OEM parts through trusted global suppliers.",
      iconPath: "/images/competitive-icon-1.svg",
    },
    {
      title: "Budget-Based Solutions",
      description:
        "Offer options such as alternate, refurbished, or retrofitted components tailored to client budgets.",
      iconPath: "/images/competitive-icon-2.svg",
    },
  ],
};

const threeColumn = [
  {
    title: "Customer Relationship Management (CRM)",
    description:
      "WandSe has been successfully serving a diverse client base, including Independent Service Providers (ISPs), wind/solar farm owners, and utility companies, by offering tailored parts strategies.",
    imagePath: "/images/competitive-4.png",
  },
  {
    title: "Procurement Service Provider",
    description:
      "Moving beyond simple trading to offer procurement services, actively searching their global network to locate hard-to-find or discontinued parts on behalf of the customer.",
    imagePath: "/images/competitive-5.png",
  },
  {
    title: "Regulatory and Compliance Knowledge",
    description:
      "Our Logistics team understands international trade regulations, customs duties, and compliance standards for electrical and mechanical components across different target markets.",
    imagePath: "/images/competitive-6.png",
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

export default function CompetitiveConforming() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
      {/* Description */}
      <div className="max-w-5xl mx-auto">
        <p className="mb-16 text-center text-sm sm:text-sm md:text-base lg:text-base text-[#293E52]">
          {description}
        </p>
      </div>

      {/* Two Column — In Stock parts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:mb-36 mb-10 max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
        >
          {twoColumn.leftImage && (
            <img src={twoColumn.leftImage} alt={twoColumn.title} className="block w-full h-auto object-cover" />
          )}
        </motion.div>
        <div className="flex flex-col justify-between h-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:mb-auto"
          >
            <h2 className="text-xl md:text-4xl font-bold text-[#1a1a1a] mt-5 mb-5">{twoColumn.title}</h2>
            <div className="text-base md:text-lg text-gray-600 leading-relaxed">{twoColumn.description}</div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:mt-8 mt-5"
          >
            {twoColumn.bottomImage && (
              <img src={twoColumn.bottomImage} alt={twoColumn.title} className="w-full h-auto rounded-lg" />
            )}
          </motion.div>
        </div>
      </section>

      {/* Five Content — Competitive Pricing & Cost Flexibility */}
      <section className="lg:space-y-12 space-y-6 max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto w-full">
        <div className="grid lg:grid-cols-2 lg:gap-20 gap-4 items-start">
          <div className="lg:space-y-6">
            <h2 className="text-xl md:text-3xl font-bold text-[#1a1a1a] leading-tight">{fiveContent.title}</h2>
          </div>
          <div className="flex lg:justify-end">
            <div className="lg:text-right lg:ml-auto">
              <div className="text-base md:text-lg text-gray-600 leading-relaxed">{fiveContent.description}</div>
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
              <img src={fiveContent.imagePath} alt={fiveContent.title} className="w-full h-56 sm:h-72 lg:h-[420px] object-cover rounded-lg" />
            </motion.div>
          )}
        </div>
      </section>

      {/* Three Column — CRM, Procurement, Regulatory */}
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
              .filter((s) => s.uniq_name !== "competitive_and_conforming")
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
