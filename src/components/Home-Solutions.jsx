"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

export default function SolutionsGwind() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const solutionCards = [
    {
      id: "1",
      icon: "/images/s1.svg",
      title: "24/7 Conditional Monitoring",
      description:
        "The heart of our preventative strategy is a state-of-the-art SCADA/ conditional monitoring system (CMS). Centralized SCADA and the operator connects with all turbines.",
    },
    {
      id: "2",
      icon: "/images/s2.svg",
      title: "SOP-Based Maintenance Schedules",
      description:
        "Conditional monitoring tells us when a turbine needs attention. Our comprehensive, Standard Operating Procedure (SOP)-based maintenance schedules dictate how that attention is delivered.",
    },
    {
      id: "3",
      icon: "/images/s3.svg",
      title: "Comprehensive Annual Operation & Maintenance and Security ",
      description:
        "This is our most robust and all-inclusive service agreement. The CAOMSC provides the highest level of assurance, encompassing every aspect of O&M. ",
    },
    {
      id: "4",
      icon: "/images/s4.svg",
      title: "Annual Operation & Maintenance Solutions",
      description:
        "Under the AOMC all operations and maintenance pertaining to any make of wind turbines will be our scope while the spares will be under the scope of the customer.",
    },
    {
      id: "5",
      icon: "/images/s5.svg",
      title: "Annual/Standalone Maintenance Solutions",
      description:
        "Our Annual/Standalone Maintenance Contracts are tailored for owners who require specific services and is limited to maintenance activities only. ",
    },
    {
      id: "6",
      icon: "/images/s6.svg",
      title: "Generation Unit-Based Services",
      description:
        "Generation Unit-Based Model is a specialised and a strategic solution that Gwind offers, where the contract is based on the performance and output of the wind farm",
    },
  ];

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint in Tailwind
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show only first 2 on mobile if not expanded
  const displayedCards =
    isMobile && !showAll ? solutionCards.slice(0, 2) : solutionCards;

  return (
    <section className="w-full bg-gradient-to-b from-[#329ACD] to-[#3AB257] px-4 py-12 md:px-8 md:py-16">
      <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-4 flex justify-center">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white flex items-center gap-2">
            Core Services / Solutions
           <a href="/solutions"><ExternalLink className="w-7 h-7 text-white" /></a> 
          </h2>
        </div>

        {/* Subtitle */}
        <p className="mb-8 max-w-3xl text-sm sm:text-sm md:text-base lg:text-base
 text-white text-center mx-auto">
         We optimize wind energy investments through comprehensive solutions that enhance the turbines’ performance over its lifetime.
        </p>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {displayedCards.map((card) => (
            <div
              key={card.id}
              className="rounded-lg bg-white p-6 shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <img
                  src={card.icon || "/placeholder.svg"}
                  alt={card.title}
                  className="h-20 w-20 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-center font-bold text-base sm:text-base md:text-md lg:text-xl text-[#293E52]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-center text-sm text-[#293E52] line-clamp-4">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button (mobile only) */}
        {isMobile && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-white text-[#329ACD] font-semibold rounded-full shadow-md hover:bg-[#f2f2f2] transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
