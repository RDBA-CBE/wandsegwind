"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { axiosGet, BASE_URL } from "@/lib/api"

export default function StatsSection() {
  const [showMore, setShowMore] = useState(false)
  const [aboutData, setAboutData] = useState([])
  const [loading, setLoading] = useState(true)

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axiosGet.get(`masters/about/get/?web_sts=1`)
      const data = res.data?.data || {}
      setAboutData(Array.isArray(data.about) ? data.about : [])
    } catch (error) {
      console.error("Error:", error)
      setAboutData([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="w-full max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8 py-12">
      {/* First Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#293E52]">
          Who We Are
        </h2>
        <img className="mt-7 w-full h-full" src="/images/about-who.png" alt="" />
        </div>
        
        <div className="md:mt-14">
          <h3 className="text-xl md:text-2xl font-semibold text-[#293E52] mb-2">GWind</h3>
          <p className="text-[#293E52] leading-relaxed mb-4 text-sm sm:text-base">
          GWind is an integral part of Speed Team, a conglomerate in the renewable landscape providing a boutique of
          solutions and services ranging from wind and solar project development, manufacturing of solar panels and
          BESS, construction of renewable projects, sourcing of electrical equipment and operation and maintenance.
          Speed Team focuses on delivering innovation, sustainability, and excellence in energy solutions through its
          businesses.</p>

          <h3 className="text-xl md:text-2xl font-semibold text-[#293E52] mb-2"> WandSe </h3>
          <p className="text-[#293E52] leading-relaxed mb-4 text-sm sm:text-base">
            As your trusted multi-brand parts specialist, WandSe offers a vast inventory of components for virtually every major manufacturer of wind turbines and solar plants. With over two decades of industry experience and as part of the leading player in the renewable space, Speed Team Group, we combine proven experience with innovation to deliver end-to-end spare parts solutions.
          </p>
         
        </div>
      </div>

      {/* History Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-16">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#293E52]">
          History
        </h2>

        <div>
          <p className="text-[#293E52] leading-relaxed mb-4 text-sm sm:text-base">
            Founded in 2012, GWind Services Pvt Ltd was established with a vision to provide reliable and specialized
            Operation & Maintenance (O&M) solutions for India’s rapidly growing Wind energy sector. Over the years,
            GWind has evolved from a regional service provider into a recognized player in multi-brand turbine
            management, offering tailored O&M solutions that maximize efficiency and minimize downtime.
          </p>

          {showMore && (
            <>
              <p className="text-[#293E52] leading-relaxed mb-4 text-sm sm:text-sm md:text-base lg:text-base">
                GWind was acquired by Speed Team Group of Companies in 2017, a leader in the renewable energy services
                space. This strategic acquisition strengthened GWind’s technical capabilities, workforce expertise, and
                resource pool, enabling us to expand our portfolio from basic turbine servicing to comprehensive O&M
                contracts, emergency maintenance, advanced inspections, and major component replacements.
              </p>
              <p className="text-[#293E52] leading-relaxed mb-4 text-sm sm:text-sm md:text-base lg:text-base">
                Today, GWind is a trusted partner for wind farm owners and operators who seek specialized,
                contract-driven services that ensure consistent wind turbine performance and optimized energy
                generation. Our O&M contract models — ranging from Comprehensive Annual O&M to Generation Unit-Based
                Services — have been designed to offer flexible and scalable solutions to meet the unique requirements
                of each client. This contract-first approach has been the backbone of our growth, allowing us to deliver
                measurable value to the renewable energy industry.
              </p>
              <p className="text-[#293E52] leading-relaxed mb-4 text-sm sm:text-sm md:text-base lg:text-base">
                With a decade of operational excellence, GWind continues to uphold its founding principles of
                efficiency, innovation, and reliability, while contributing significantly to India’s renewable
                transition. Our long-standing relationships with wind farm developers, investors, and independent
                operators stand as testimony to our commitment, expertise, and ability to adapt to evolving industry
                challenges.
              </p>
            </>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-600 font-medium mt-2 hover:underline"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>

      {/* ✅ Stats Section */}
      <section className="w-full bg-background py-4">
        <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-border rounded-lg overflow-hidden">

            {/* 🔄 LOADING */}
            {loading && (
              <div className="py-12 text-center text-gray-500">
                Loading stats...
              </div>
            )}

            {/* ❌ NO DATA */}
            {!loading && aboutData.length === 0 && (
              <div className="py-12 text-center text-gray-500">
                No data found
              </div>
            )}

            {/* ✅ DATA */}
            {!loading && aboutData.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3">
                {aboutData.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`
                      flex flex-col items-center justify-center gap-4 p-6 bg-card
                      ${index !== aboutData.length - 1 ? "border-r border-border" : ""}
                    `}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    variants={fadeUp}
                  >
                    {stat.image_path && (
                      <div className="relative w-14 h-14">
                        <Image
                          src={BASE_URL + stat.image_path}
                          alt={stat.image_name || "icon"}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}

                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#293E52]">
                        {stat.title || "-"}
                      </p>
                      <p className="text-sm text-[#293E52] mt-1">
                        {stat.value || ""}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

          </div>
        </div>
      </section>
    </section>
  )
}
