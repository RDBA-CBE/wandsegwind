"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

export default function TabsCarouselSection() {
  const [currentSet, setCurrentSet] = useState(0);

  // Sample data
  const cards = [
    { id: 1, title: "Gearboxes", image: "/images/home-wind/home-wind1.png" },
    { id: 2, title: "Blades", image: "/images/home-wind/home-wind2.png" },
    { id: 3, title: "Generators", image: "/images/home-wind/home-wind3.png" },
    { id: 4, title: "Controller components", image: "/images/home-wind/home-wind4.png" },
    { id: 5, title: "Hydraulic parts", image: "/images/home-wind/home-wind5.png" },
    { id: 6, title: "Yaw gears", image: "/images/home-wind/home-wind6.png" },
    { id: 7, title: "Coolers", image: "/images/home-wind/home-wind7.png" },
    { id: 8, title: " Motors", image: "/images/home-wind/home-wind8.png" },
    { id: 9, title: "Main shaft", image: "/images/home-wind/home-wind9.png" },
    { id: 10, title: "Transformer", image: "/images/home-wind/home-wind10.png" },
    { id: 11, title: "Gearbox", image: "/images/home-wind/home-wind11.png" },
    { id: 12, title: "Blade Bearing", image: "/images/home-wind/home-wind12.png" },
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const firstSet = cards.slice(0, 6);
  const secondSet = cards.slice(6, 12);

  return (
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">
        {/* Top Section */}
    <div className="text-center mb-12">
  <div className="flex items-center justify-center gap-3 mb-4">
    <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#293E52]">
      Wind Turbine Parts
    </h1>

    {/* Gradient Stroke ExternalLink Icon */}
    <a href="/solutions">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="url(#gradientStroke)"
      strokeWidth="2"
    >
      <defs>
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" /> {/* Blue */}
          <stop offset="100%" stopColor="#22C55E" /> {/* Green */}
        </linearGradient>
      </defs>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m3-3h6m0 0v6m0-6L10 14"
      />
    </svg></a>
  </div>

<p className="text-sm sm:text-sm md:text-base lg:text-lg text-[#293E52] mb-2">
  Our major wind turbine deliverables include gearboxes, blades, generators, controller 
  <br className="hidden md:block" />
  components, hydraulic parts, yaw gears, coolers, motors, and more.
</p>

</div>


        {/* Carousel Section */}
        <div className="relative overflow-hidden mb-8">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSet * 100}%)` }}
          >
            {/* First Set */}
            <div className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {firstSet.map((card) => (
                <div
                  key={card.id}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-lg group"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-[400px] h-[400px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Set */}
            <div className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondSet.map((card) => (
                <div
                  key={card.id}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-lg group"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSet(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSet === index
                  ? "bg-gray-900 scale-110"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
