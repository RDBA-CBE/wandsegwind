"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const pageData = {
  subheading: "Our inventory catalogue of more than 5,000 spares, include:",
  imageRight: "/images/abt-vert.png",
  solutions: [
    {
      id: 1,
      icon: "/images/solid-check.svg",
      title: "Original Equipment Manufacturer (OEM)",
      description:
        "Genuine OEM spares for guaranteed compatibility, or high-quality alternatives.",
    },
    {
      id: 2,
      icon: "/images/leaf-sym.svg",
      title: "Economical alternative spares",
      description:
        "Economical alternative spares for maximum cost savings without compromising performance.",
    },
    {
      id: 3,
      icon: "/images/mdi-recycle.svg",
      title: "Certified Refurbished",
      description:
        "Certified Refurbished parts — high-quality, sustainable options that extend the life of essential components.",
    },
  ],
};

const processItems = [
  { img: "/images/abt7.svg",  title: "Product catalogue exceeding 5,000 parts" },
  { img: "/images/abt8.svg",  title: "Worldwide supplier network" },
  { img: "/images/abt9.svg",  title: "Your one-stop procurement hub" },
  { img: "/images/abt10.svg", title: "Streamlined procurement and logistics support" },
  { img: "/images/abt11.svg", title: "Quick delivery of new, refurbished, and reconditioned components" },
  { img: "/images/abt12.svg", title: "In-house repair, refurbishment, and customization" },
  { img: "/images/abt13.svg", title: "On-site maintenance, technical troubleshooting, and expert assistance" },
  { img: "/images/abt14.svg", title: "Dedicated customer support & service assurance" },
];

const WhyChooseWandse = () => {
  return (
    <section className="w-full max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8 py-12 space-y-12">

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#293E52] leading-tight">
          We help you choose the solution
        </h2>
      </motion.div>

      {/* Solutions list + vertical image */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">

        {/* Left — subheading + 3 solution cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex-1 space-y-6"
        >
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#329ACD]">
            {pageData.subheading}
          </h4>

          <div className="border-t border-gray-200 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pageData.solutions.map((solution) => (
              <div
                key={solution.id}
                className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3"
              >
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  <img
                    src={solution.icon}
                    alt={solution.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#293E52] mb-1">
                    {solution.title}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — vertical image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
          className="w-full sm:w-72 lg:w-64 xl:w-72 shrink-0 mx-auto sm:mx-0"
        >
          <img
            src={pageData.imageRight}
            alt="Why Choose Wandse"
            className="w-full h-64 sm:h-80 lg:h-[420px] object-cover rounded-xl shadow-md"
          />
        </motion.div>
      </div>

      {/* Stats grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="border border-border rounded-lg overflow-hidden"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
          {processItems.map((item, index) => {
            // 2-col on mobile: right border on col 0; top border from row 1 onward
            // 4-col on md+: right border on cols 0-2; top border from row 1 onward
            const isMobileRightBorder = index % 2 === 0;
            const isMobileTopBorder   = index >= 2;
            const isDesktopRightBorder = index % 4 !== 3;
            const isDesktopTopBorder   = index >= 4;

            return (
              <div
                key={index}
                className={[
                  "p-5 md:p-8 flex flex-col items-center justify-center text-center gap-3",
                  // mobile borders
                  isMobileRightBorder  ? "border-r border-border" : "",
                  isMobileTopBorder    ? "border-t border-border" : "",
                  // desktop overrides — reset then reapply
                  isDesktopRightBorder
                    ? "md:border-r md:border-border"
                    : "md:border-r-0",
                  isDesktopTopBorder
                    ? "md:border-t md:border-border"
                    : "md:border-t-0",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
                <p className="text-xs sm:text-sm md:text-base text-[#293E52] font-semibold leading-snug">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>

    </section>
  );
};

export default WhyChooseWandse;
