"use client";
import { useState } from "react";
import Image from "next/image";

export default function TechnicalSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">
        {/* Title and Content Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left Title */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52]">
              Our Technical Edge
            </h2>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-2/3">
            {/* First two paragraphs (always visible) */}
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              What sets us apart is our relentless focus on leveraging technology and data to deliver superior service. We go beyond standard maintenance by utilizing predictive analytics and condition-based monitoring to anticipate potential component failures before they occur. This proactive approach, powered by our proprietary software, allows us to schedule maintenance precisely when needed, significantly reducing unplanned outages and extending the operational lifespan of your assets.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-4">
              We also understand that every client has unique needs. Our commitment to serving you means we offer customizable service agreements, from basic preventative maintenance to full-scope O&M packages. We integrate our services seamlessly with your existing operations, providing you with real-time performance insights and transparent reporting. 
            </p>

            {/* Hidden paragraphs (show on toggle) */}
            {showMore && (
              <>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-4">
                  The advantage working with GWind Services is that we act as a one-stop-solution for your service requirements, which includes sourcing of spares, lifting of WTG accessories, retrofit and so on. Our goal is to be more than just a service provider; we aim to be a dedicated partner in optimizing your wind energy portfolio.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-4">
                  Thank you for visiting. We look forward to the possibility of partnering with you to harness the power of the wind.
                </p>
              </>
            )}

            {/* See More / See Less button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 text-[#0D0D0D] font-medium rounded-full"
            >
              {showMore ? "See Less" : "See More"}
            </button>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="w-full mt-10">
          <Image
            src="/images/abt-image.svg"
            alt="Full width section image"
            width={1600}
            height={800}
            className="w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
