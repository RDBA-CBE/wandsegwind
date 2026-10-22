"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InfoGridSection() {
  const gridItems = [
    {
      id: 1,
      img: "/images/s3.svg",
      title: "CAOMSC",
      content:
        "This is our most robust and all-inclusive service agreement. The CAOMSC provides the highest level of assurance, encompassing every aspect of O&M.",
    },
    {
      id: 2,
      img: "/images/s4.svg",
      title: "Annual Operation & Maintenance Solutions",
      content:
        "Under the AOMC all operations and maintenance pertaining to any make of wind turbines will be our scope while the spares will be under the scope of the customer.",
    },
    {
      id: 3,
      img: "/images/s5.svg",
      title: "Annual/Standalone Maintenance Solutions",
      content:
        "Our Annual/Standalone Maintenance Contracts are tailored for owners who require specific services and is limited to maintenance activities only.",
    },
    {
      id: 4,
      img: "/images/s6.svg",
      title: "Generation Unit-Based Services",
      content:
        "Generation Unit-Based Model is a specialised and a strategic solution that Gwind offers, where the contract is based on the performance and output of the wind farm",
    },
  ];

  return (
    <section className="w-full px-6 pt-12 bg-gray-100">
      <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center">
          <h2 className="flex items-center gap-2 text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            O&M Contract
            <a href="/Caomsc">
              <ExternalLink
                className="w-6 sm:w-7 h-6 sm:h-7"
                strokeWidth={2}
                style={{ stroke: "url(#grad)" }}
              />
              <svg width="0" height="0">
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3AB257" />
                  <stop offset="100%" stopColor="#329ACD" />
                </linearGradient>
              </svg>
            </a>
          </h2>

          <p className="text-[#293E52] text-base md:text-lg leading-relaxed mb-6">
            At GWind, we recognize that no two wind farms are the same. A
            one-size-fits-all approach to wind turbine Operation and Maintenance
            (O&M) is rarely the most efficient or cost-effective solution.
            Owners and operators require flexible, reliable, and scalable
            Operation & Maintenance (O&M) solutions that ensure consistent
            turbine performance, cost efficiency, and long-term asset value.
          </p>

          {/* Animated Image (Below Content) */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full h-56 md:h-72 lg:h-80 overflow-hidden mt-4"
          >
            <Image
              src="/images/sol-img.svg"
              alt="O&M Contract Illustration"
              fill
              className="object-contain object-left"
              priority
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE GRID */}
        <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#293E52] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
