"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { axiosGet, BASE_URL } from "@/lib/api"

export default function AboutUsSection() {
  const [aboutData, setAboutData] = useState([])
  const [loading, setLoading] = useState(true)

  // Animation
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axiosGet.get(`masters/about/get/?web_sts=1`)
      const data = res.data?.data || {}
      setAboutData(Array.isArray(data.about) ? data.about : [])
    } catch (error) {
      console.error("About section error:", error)
      setAboutData([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


   const stats = [
    {
      img: "/images/ha1.svg",
      label: "Product catalogue exceeding 5,000 parts ",
    },
    { img: "/images/ha2.svg", label: "Worldwide supplier network" },
    { img: "/images/ha3.svg", label: "Your One-stop procurement hub" },
    {
      img: "/images/ha4.svg",
      label: "Streamlined procurement and logistics support.",
    },
  ];

  return (
    <>
      {/* ===================== STATS SECTION ===================== */}

       {/* Stats Grid */}
                  <div className="border border-border rounded-lg overflow-hidden max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          className={`
                            flex flex-col items-center justify-center gap-4 
                            p-6 bg-card transition-shadow hover:shadow-sm
                            ${index % 4 !== 3 ? "lg:border-r border-border" : ""}
                            ${index < stats.length - 4 ? "lg:border-b border-border" : ""}
                            border-b sm:border-b-0
                            sm:border-r sm:last:border-r-0
                          `}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.2,
                            ease: "easeOut",
                          }}
                          variants={fadeUp}
                        >
                          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                            <Image
                              src={stat.img}
                              alt={stat.label}
                              fill
                              className="object-contain"
                            />
                          </div>
            
                          <p className="text-center text-sm sm:text-base lg:text-lg text-[#293E52] mt-1">
                            {index === 2 ? (
                              <>
                                Your One-stop <br className="hidden lg:block" />
                                procurement hub
                              </>
                            ) : (
                              stat.label
                            )}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
      <section className="w-full bg-background py-12 md:py-10">
        <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-border rounded-lg overflow-hidden">

            {/* 🔄 LOADING */}
            {loading && (
              <div className="py-12 text-center text-gray-500">
                Loading statistics...
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
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                    variants={fadeUp}
                  >
                    {stat.image_path && stat.image_path!== "" && (
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
                      <p className="text-2xl md:text-3xl font-bold text-[#293E52]">
                        {stat.title || "-"}
                      </p>
                      <p className="text-sm md:text-base text-[#293E52] mt-1">
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

      {/* ===================== MAIN CONTENT SECTION ===================== */}
      {/* <section className="w-full bg-background pt-2">
        <div className="flex flex-col lg:flex-row items-start">
     
          <motion.div
            className="w-full lg:w-[60%] flex flex-col gap-6 px-6 md:px-10 lg:pl-38 lg:pr-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-4xl font-bold text-[#293E52]">
                About Us
              </h1>
              <a href="/about">
                <ExternalLink
                  className="w-6 h-6"
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

            <p className="text-sm md:text-lg text-[#293E52]">
              We don’t just maintain wind turbines; we optimize performance,
              elevate efficiency, and safeguard your assets.
            </p>

            <p className="text-sm md:text-lg text-[#293E52] font-bold">
              GWind specializes in providing comprehensive Operation & Maintenance
              solutions of multi-brand wind turbines.
            </p>
          </motion.div>

          
          <motion.div
            className="w-full lg:w-[40%] flex justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeUp}
          >
            <div className="relative w-full h-[250px] md:h-[320px] lg:h-[400px] left-0 lg:left-20">
              <Image
                src="/images/about.svg"
                alt="About GWind"
                fill
                className="object-cover lg:object-fill rounded-tl-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section> */}
    </>
  )
}
