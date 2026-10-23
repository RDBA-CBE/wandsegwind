"use client";

import { ExternalLink } from "lucide-react";

export default function OtherSolutionsSection() {
  const cards = [
    {
      icon: "/images/sop-others.svg",
      title: "SOP-Based Maintenance Schedules",
      content:
        "Empowering industries with advanced energy solutions that optimize efficiency, reduce costs, and promote sustainable practices.",
      link: "/sop", // unique link
    },
       {
      icon: "/images/s3.svg",
      title: "CAOMSC",
      content:
        "The CAOMSC provides the highest level of assurance, encompassing every aspect of O&M and transferring the majority of operational and asset-related risk to our team. This contract is for clients who want total peace of mind and budget predictability.",
      link: "/Caomsc", // unique link
    },
    {
      icon: "/images/s4.svg",
      title: "Annual Operation Maintanence Solutions",
      content:
        "Our Annual O&M Contracts focuses on delivering planned maintenance activities on a yearly cycle. This ensures turbines remain in peak condition while extending component life and preventing costly failures.",
      link: "/annual-operation&maintenance-soluitons", // unique link
    },
    {
      icon: "/images/s5.svg",
      title: "Annual/Standalone Maintanence Solutions",
      content:
        "Our Annual/Standalone Maintenance Contracts are tailored for owners who require specific services and is limited to maintenance activities only. We suggest to use our Annual Maintenance Solutions to owners or operators.",
      link: "/standalone-maintanence-solutions", // unique link
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52] mb-10 text-left">
          Other Solutions
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Top Row - Icons */}
              <div className="flex items-center justify-between mb-4">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-10 h-10 object-contain"
                />
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 text-gray-500 hover:text-black cursor-pointer transition-colors" />
                </a>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
