"use client";
import Image from "next/image";

export default function CommitSection() {
  const items = [
    {
      title: "Unplanned Downtime",
      description:
        "A single turbine failure halts production, leading to significant revenue loss",
      imgSrc: "/images/chan1.svg",
    },
    {
      title: "Reduced Energy Yield",
      description:
        "Sub-optimal performance due to minor issues accumulates over time, impacting/affecting the overall annual energy production ",
      imgSrc: "/images/chan2.svg",
    },
    {
      title: "Catastrophic Failures",
      description:
        "Undetected issues escalate, leading to major component replacement that is both costly and time-consuming",
      imgSrc: "/images/chan3.svg",
    },
    {
      title: "Increased O&M Costs",
      description:
        "Reactive run-to-failure maintenance is far more expensive than a planned, preventative approach",
      imgSrc: "/images/chan4.svg",
    },
    
  ];

    return (
    <section className="relative py-16 bg-white">
      {/* Title */}
      <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-[#293E52] mb-12">
        The Challenge of Wind Asset Management

      </h2>
      <p className="text-sm sm:text-sm md:text-base lg:text-base text-[#293E52] max-w-6xl mx-auto mb-12 text-center">Our comprehensive Total Asset Management services are designed to maximize your energy production and protect your investment. Before we dive into our comprehensive solutions, lets see some of the challenges our clients face in wind farm operations</p>

      <div className="relative max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 md:px-8">
        {/* Vertical line only visible on desktop */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-gray-200 h-[93%]"></div>

        <div className="space-y-16 md:space-y-24">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center md:items-start"
            >
              {/* Left content */}
              <div
                className={`hidden md:flex w-1/2 justify-end pr-10 ${
                  index % 2 === 0 ? "opacity-100" : "opacity-0"
                }`}
              >
                {index % 2 === 0 && (
                  <div className="text-right max-w-sm">
                    <h3 className="text-lg font-semibold text-[#172431] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#172431] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Icon circle (centered for mobile, absolute for desktop) */}
              <div
                className="
                  z-10 flex items-center justify-center 
                  w-16 h-16 rounded-full 
                  bg-[#E0F2F1] border border-gray-100 shadow-md 
                  mx-auto 
                  md:mx-0 md:absolute md:left-1/2 md:-translate-x-1/2
                "
              >
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Right content */}
              <div
                className={`hidden md:flex w-1/2 justify-start pl-10 ${
                  index % 2 !== 0 ? "opacity-100" : "opacity-0"
                }`}
              >
                {index % 2 !== 0 && (
                  <div className="text-left max-w-sm">
                    <h3 className="text-lg font-bold text-[#172431] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#293E52] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Mobile view */}
              <div className="md:hidden text-center mt-6">
                <h3 className="text-lg font-bold text-[#172431] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#293E52] leading-relaxed px-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}