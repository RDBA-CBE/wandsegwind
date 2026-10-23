"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function AboutWandseSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 max-w-[90%] 2xl:max-w-[80%] mx-auto px-0 lg:pe-4 xl:px-8 py-0 lg:py-12 lg:ml-10">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#293E52]">
              About us
            </h2>
          </div>

          <div className="space-y-4 text-[#293E52]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#293E52]">
                  GWind
                </h2>

                <a href="/about" className="inline-flex items-center">
                  <ExternalLink
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    strokeWidth={2}
                    style={{ stroke: "url(#grad)" }}
                  />
                  <svg width="0" height="0">
                    <linearGradient
                      id="grad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3AB257" />
                      <stop offset="100%" stopColor="#329ACD" />
                    </linearGradient>
                  </svg>
                </a>
              </div>

             <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
                We don’t just maintain wind turbines; we optimize performance,
                elevate efficiency, and safeguard your assets. GWind specializes
                in providing comprehensive Operation & Maintenance solutions of multi-brand wind turbines.
                {/* <br /> <span className="font-bold">GWind specializes
                in providing comprehensive Operation & Maintenance solutions of multi-brand wind turbines.{" "}</span> */}
                
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#293E52]">
                  WandSe
                </h2>

                <a href="/about" className="inline-flex items-center">
                  <ExternalLink
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    strokeWidth={2}
                    style={{ stroke: "url(#grad)" }}
                  />
                  <svg width="0" height="0">
                    <linearGradient
                      id="grad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3AB257" />
                      <stop offset="100%" stopColor="#329ACD" />
                    </linearGradient>
                  </svg>
                </a>
              </div>

               <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
                As your trusted multi-brand parts specialist, WandSe offers a
                vast inventory of components for virtually every major
                manufacturer of wind turbines and solar plants. With over two
                decades of industry experience and as part of the leading player
                in the renewable space, Speed Team Group, we combine proven
                experience with innovation to deliver end-to-end spare parts
                solutions. 
                <br />
                {/* Unavailability of spare parts in a wind or solar farm leads to
                extended equipment downtime, resulting in significant financial
                losses from lost power generation and increased operational
                costs.  */}
                {/* With WandSe as your trusted parts solutions provider, you
                experience fast delivery, expert support, and the right
                part—every time. 
                We don’t just maintain wind turbines; we
                optimize performance, elevate efficiency, and safeguard your
                assets. */}
              </p>
              
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 relative min-h-[300px]">
          <img
            src="/images/about-main.svg"
            alt="Solar panels and wind turbines"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}
