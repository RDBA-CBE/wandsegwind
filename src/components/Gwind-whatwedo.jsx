"use client";

import { useState } from "react";
import Image from "next/image";

export default function Whatwedo() {
  const cards = [
    {
      img: "/images/con1.svg",
      title: "Real-time Data Acquisition",
      content:
        "Strategically placed sensors on critical components—including the gearbox, generator, main bearings, and blades—continuously collect data on vibrations, temperature, oil particle counts, and more.",
    },
    {
      img: "/images/con2.svg",
      title: "Predictive Analytics",
      content:
        "Our advanced software analyzes this real-time data, using sophisticated algorithms to detect subtle anomalies that signal the early stages of a developing fault. We can identify potential issues long before they become visible, giving us ample time to act.",
    },
    {
      img: "/images/abt3.svg",
      title: "Remote Surveillance",
      content:
        "Our dedicated team of expert analysts and engineers monitors your turbines from a central control center. They are immediately alerted to any warning or alarm notifications, allowing for swift remote diagnostics and a proactive response.",
    },
    {
      img: "/images/con4.svg",
      title: "Actionable Insights",
      content:
        "We provide you with clear, actionable reports and recommendations based on the health of each turbine. This empowers you to make informed decisions and schedule maintenance with precision, minimizing unnecessary downtime.",
    },
  ];

  

  const [showMore, setShowMore] = useState(false);

  const visibleCards = showMore ? cards : cards.slice(0, 2);

  return (
    <section className="w-full bg-white pt-16 px-4 md:px-6 lg:px-8 -mb-5">
      <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52] mb-4">
            What We Do
          </h2>
          <p className="text-[#293E52] text-sm md:text-base lg:text-base mb-6">
            We monitor the health and readiness, typically accessing common
            parameters such as wind conditions, rotating speed, temperatures,
            power output etc.
          </p>

          {/* GIF Image Section */}
          <div className="w-full flex justify-center lg:justify-start">
            <Image
              src="/images/sol-gif.gif"
              alt="What We Do Animation"
              width={400}
              height={300}
              className="rounded-lg object-contain"
            />
          </div>
        </div>

        {/* Right Side */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {visibleCards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="flex justify-left mb-12">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#293E52] mb-2 text-left">
                  {card.title}
                </h3>
                <p className="text-[#293E52] text-sm leading-relaxed text-left">
                  {card.content}
                </p>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          <div className="my-6 text-center ">
            <button
              onClick={() => setShowMore(!showMore)}
              className=" text-[#293E52] px-6 py-2 rounded-lg font-medium "
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
