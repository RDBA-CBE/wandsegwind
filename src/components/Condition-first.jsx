"use client";

import Image from "next/image";

export default function CenterConditionSection() {
  return (
    <section className="w-full bg-white pt-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm sm:text-sm md:text-base lf:text-base text-[#293E52] leading-relaxed">
          The heart of our preventative strategy is a state-of-the-art SCADA/ conditional monitoring system (CMS). Centralized SCADA and the operator connects with all turbines and Connect with MIoT (Mobile internet of things)
        </p>
      </div>

      {/* Full Width Image Section */}
      <div className="w-full pt-4 lg:p-12">
        <Image
          src="/images/24-image.svg" // Replace with your image path
          alt="Full Width Image"
          width={1920}
          height={600}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
