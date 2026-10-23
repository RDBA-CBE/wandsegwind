"use client"

import React from "react"
import { motion } from "framer-motion"

const processItems = [
  {
    id: 1,
    imgSrc: "/images/qly1.svg",
    title: "QMS as per international standards ",
  },
  {
    id: 2,
    imgSrc: "/images/qly2.svg",
    title: "Large inventory  ",
  },
  {
    id: 3,
    imgSrc: "/images/qly3.svg",
    title: "Qualified Staff for sourcing & Logistics ",
  },
  {
    id: 4,
    imgSrc: "/images/qly4.svg",
    title: "Short Lead time ",
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function QualtitySection() {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52]"
          >
           Quality Sourcing
          </motion.h2>
          <img />
           <p className="text-sm sm:text-sm md:text-base lg:text-base text-[#293E52] max-w-6xl mx-auto mb-12 mt-8 text-center md:mt-6">Leveraging on our extensive network of suppliers and industry contacts, we are equipped to deliver <br />the critical spare parts you need to keep your wind turbines and solar plants running optimally.</p>
        </div>

        {/* Process Items */}
        <motion.div
          className="w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Desktop Layout - Zig-Zag */}
          <div className="hidden lg:flex justify-center items-start gap-6 lg:gap-20 max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto mt-4">
            {processItems.map((item, index) => {
              const isUpper = index === 1 || index === 3
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`flex flex-col items-center ${
                    isUpper ? "-mt-12" : "mt-12"
                  }`}
                >
                  <ProcessCircle imgSrc={item.imgSrc} title={item.title} />
                </motion.div>
              )
            })}
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:flex lg:hidden flex-wrap justify-center gap-6 lg:gap-8">
            {processItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`flex justify-center ${
                  index % 2 === 0 ? "translate-y-0" : "translate-y-12"
                }`}
              >
                <ProcessCircle imgSrc={item.imgSrc} title={item.title} />
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col gap-8">
            {processItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="flex justify-center"
              >
                <ProcessCircle imgSrc={item.imgSrc} title={item.title} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProcessCircle({ imgSrc, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="flex flex-col items-center gap-4"
    >
      {/* Circle */}
      <motion.div
        className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-to-b from-[#329ACD] to-[#3AB257] border border-blue-200 flex items-center justify-center shadow-md hover:shadow-lg"
        whileHover={{
          boxShadow: "0px 0px 20px rgba(58, 178, 87, 0.5)",
        }}
      >
        <img
          src={imgSrc}
          alt={title}
          className="object-contain w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20"
        />
      </motion.div>

      {/* Title */}
      <p className="text-sm md:text-base font-semibold text-[#293E52] text-center leading-snug max-w-[160px] break-words">
        {title}
      </p>
    </motion.div>
  )
}
