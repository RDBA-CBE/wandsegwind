"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const careerData = [
  {
    id: "1",
    title: "Engineer - O&M (250KW)",
    type: "Full Time",
    requirements:
      "The Engineer – WTG O&M will be responsible for ensuring efficient, safe, and reliable operation of 250 kW wind turbine generators. The role includes preventive and corrective maintenance, troubleshooting, performance monitoring, and ensuring compliance with safety and quality standards.",
    level: "Experienced",
    salary: "As Per Experience",
    location: "TamilNadu",
  },
  {
    id: "2",
    title: "Engineer - Electrical & Mechanical (Gamesa 850)",
    type: "Full Time",
    requirements:
      "The Engineer – Electrical & Mechanical will be responsible for the operation and maintenance (O&M) of 850 kW Wind Turbine Generators (WTGs). The role ensures safe, efficient, and reliable turbine performance through preventive, predictive, and corrective maintenance activities. The position requires strong technical knowledge of electrical and mechanical systems related to 850 kW turbines.",
    level: "Experienced",
    salary: "As Per Experience",
    location: "TamilNadu",
  },
  {
    id: "3",
    title: "Senior Executive - Warehouse",
    type: "Full Time",
    requirements:
      "The Senior Executive – Warehouse will be responsible for managing the complete warehouse operations for Wind Turbine Generators (WTG’s) O&M activities. The role ensures efficient handling of materials, spares, tools, consumables, and critical components required for turbine maintenance.",
      level: "Experienced",
    salary: "As Per Experience",
    location: "TamilNadu",
  },
  {
    id: "4",
    title: "Jr.Technician - Electrical & Mechanical",
    type: "Full Time",
    requirements:
      "The Junior Technician will support the Operations & Maintenance team in carrying out electrical and mechanical maintenance activities of Wind Turbine Generators (WTG’s). The role involves preventive, predictive, and breakdown maintenance to ensure maximum turbine availability and safe operation.",
     level: "Experienced",
    salary: "As Per Experience",
    location: "TamilNadu",
  },
];

export default function CareerSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2); // Default: 2 cards for desktop

  // ✅ Detect screen size and adjust cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // 1 card for mobile
      } else {
        setItemsPerView(2); // 2 cards for tablet/desktop
      }
    };

    handleResize(); // Run once on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(careerData.length / itemsPerView);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Animation variants for smooth slide
  const variants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  // Visible jobs (dynamic per screen)
  const visibleJobs = careerData.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  return (
    <section className="w-full py-12 overflow-hidden">
      <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">
        {/* Title Section */}
        <div className="flex items-center justify-center mb-4 gap-2">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#293E52]">
            Recent Openings
          </h1>
          <a href="/career">
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
        </div>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6 text-center">
          Explore the recent job openings at various locations
        </p>

        {/* Carousel Section */}
        <div className="relative w-full overflow-hidden">
          <div className="flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`grid gap-6 lg:gap-8 ${
                  itemsPerView === 1 ? "grid-cols-1" : "grid-cols-2"
                }`}
              >
                {visibleJobs.map((job) => (
                  <CareerCard key={job.id} job={job} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-gradient-to-r from-[#3AB257] to-[#329ACD] scale-110"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CareerCard({ job }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between mb-3">
        <h2 className="text-xl font-semibold text-[#293E52]">{job.title}</h2>
        <div className="relative flex items-center gap-2">
                   <a href="/career">
          <ExternalLink
            className="w-6 h-6"
            style={{ stroke: "url(#linkGradient)" }}
          /></a>
          <svg className="absolute w-0 h-0">
            <defs>
              <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#329ACD" />
                <stop offset="100%" stopColor="#3AB257" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <p className="text-sm font-medium text-gray-500 mb-3">{job.type}</p>

      <p className="text-sm text-[#293E52] font-medium mb-6 leading-relaxed">
        <span className="font-bold">Requirements: </span>
        {job.requirements}
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <img src="/images/work.svg" alt="Level" className="w-4 h-4" />
          <span className="text-sm text-[#293E52]">{job.level}</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/sal.svg" alt="Salary" className="w-4 h-4" />
          <span className="text-sm text-[#293E52]">{job.salary}</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/loc.svg" alt="Location" className="w-4 h-4" />
          <span className="text-sm text-[#293E52]">{job.location}</span>
        </div>
      </div>
    </div>
  );
}
