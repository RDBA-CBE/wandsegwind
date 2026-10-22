
"use client"

import { useState } from "react"
import Image from "next/image"



const tabsData = [
  {
    id: "md-message",
    label: "CMD Message",
    image: "/images/team1.svg",
    name: "Mr. Muthuraj Periyasamy",
    designation: "Chairman & Managing Director",
    team: "Speed Team",
    title: "CMD Message",
    paragraphs: [
      {
        intro: "Dear Stakeholder,",
        content:
          "GWind Services is dedicated to the operation and maintenance of wind turbines and I'm thrilled you're here to learn more about our commitment to sustainable energy. We've built our company on a foundation of reliability, efficiency, and safety, understanding that the true power of wind energy is only realized when the turbines are performing at their peak.",
      },
      {
        content:
          "Our team of skilled technicians and engineers works tirelessly to ensure every turbine under our care operates smoothly and efficiently, maximizing energy production and minimizing downtime. We take pride in being a vital part of the global effort to transition to cleaner, renewable power sources. This is where GWind India, a part of Speed Team group of companies is creating a breakthrough in the market. At GWind, we've pioneered a safer, faster, and more cost-effective approach to complex wind turbine maintenance.",
      },
       {
        content:
          "We are proud to be at the forefront of this green revolution. At GWind, we are dedicated to setting new benchmarks for service, reliability, and technical expertise in the renewable energy market, and the several patents that our solutions have received are a testimony to our commitment!",
      },
    ],
  },
  // {
  //   id: "jmd-message",
  //   label: "JMD Message",
  //   image: "/images/team2.svg",
  //   name: "Mr. Jayendran Periyasamy",
  //   designation: "Joint Managing Director",
  //   team: "Speed Team",
  //   title: "JMD Message",
  //   paragraphs: [
  //     {
  //       intro: "Dear Stakeholder,",
  //       content:
  //         "We are not simply a service provider; we are your strategic partner in maximizing asset value aimed to considerable reduce your maintenance costs by atleast 40%. Our services are built on a deep, ground-up understanding of the unique dynamics of the Indian wind energy landscape. We have developed a comprehensive suite of solutions for wind turbine installation and component replacement that directly addresses the industry's most pressing pain points",
  //     },
  //     {
  //       content:
  //         "Seamless Installation: Our highly skilled teams ensure that every new turbine is installed with precision and efficiency, minimizing delays and maximizing the speed at which it can begin generating revenue.",
  //     },
  //     {
  //       content:
  //         "Reliable Component Replacement: We understand the critical importance of a secure and timely supply chain. Our expertise in sourcing and replacing major components, such as Single Blade, Blade Bearing/PressurePlate/Pitch Plate, Main Shaft, Gear Box, Generator, Transformer and cooler; ensures that downtime is kept to an absolute minimum, safeguarding your investment against supply bottlenecks and high import costs.",
  //     },
  //     {
  //       content:
  //         "Operational Excellence: Our commitment extends beyond simple to replace the Major Component. We use advanced diagnostic tools and a proactive, data-driven approach to replace the major Component Replacement, helping to identify potential issues before they cause costly failures. This predictive model, combined with our timely service, ensures that your turbines perform at their peak, year-round.",
  //     },
  //     {
  //       content:
  //         "We are proud to be at the forefront of this green revolution. At DLI, we are dedicated to setting new benchmarks for service, reliability, and technical expertise in the renewable energy market, and the several patents that our solutions have received are a testimony to our commitment!",
  //     },
  //   ],
  // },
  {
    id: "key-management",
    label: "Key Management",
    title: "Key Management",
    images: [
      {
        id: 1,
        src: "/images/team1.svg",
        alt: "Management Member 1",
        name: "Mr. Muthuraj Periyasamy",
        position: "Chairman & Managing Director",
        company: "Speed Team",
      },
      {
        id: 2,
        src: "/images/team2.svg",
        alt: "Management Member 2",
        name: "Mr. Jayendran Periyasamy",
        position: "Joint Managing Director",
        company: "Speed Team",
      },
      {
        id: 3,
        src: "/images/md.png",
        alt: "Management Member 3",
        name: "Mr. Krishnan Subbiah",
        position: "Director",
        company: "Speed Team",
      },
         {
        id: 4,
        src: "/images/md.png",
        alt: "Management Member 3",
        name: "Mr. Arumagaraja Lingadurai",
        position: "Director",
        company: "Speed Team",
      },
    ],
  },
]

export default function ExecutiveMessageTabs() {
  const [activeTab, setActiveTab] = useState("md-message")
  const [showFullMessage, setShowFullMessage] = useState(false) // 👈 new state
  const activeContent = tabsData.find((tab) => tab.id === activeTab)

  const toggleReadMore = () => setShowFullMessage(!showFullMessage)

  return (
    <div className="bg-gradient-to-b from-[#329ACD] to-[#3AB257] px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto">
        {/* Tabs Navigation */}
        <div className="flex gap-4 mb-12 justify-center flex-wrap">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id)
                setShowFullMessage(false) // 👈 reset read more when tab changes
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${activeTab === tab.id
                  ? "bg-white text-[#293E52] shadow-lg"
                  : "bg-transparent text-white hover:bg-white/10"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        {activeContent && (
          <div className="animate-fade-in">
            {activeContent.id === "key-management" ? (
              /* your existing key-management code */
              <div>
                <h2 className="text-3xl font-bold mb-8 text-white text-center">
                  {activeContent.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {activeContent.images?.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-xl">
                      <div className="relative w-full h-64">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover p-3"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-sm font-semibold text-gray-700 mb-1">{item.position}</p>
                        <p className="text-sm text-green-600 font-medium">{item.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* Left Side - Image and Info */}
                <div className="flex flex-col items-center lg:items-start h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl w-full h-full flex flex-col">
                    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full">
                      <Image
                        src={activeContent.image}
                        alt={activeContent.name}
                        fill
                        className="object-cover p-3 rounded-2xl"
                      />
                    </div>
                    <div className="p-3 flex flex-col justify-center flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{activeContent.name}</h3>
                      <p className="text-sm font-semibold text-gray-700 mb-1">{activeContent.designation}</p>
                      <p className="text-sm text-green-600 font-medium">{activeContent.team}</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Message Content */}
                <div className="text-white flex flex-col justify-center h-full">
                  <h2 className="text-3xl font-bold mb-6">{activeContent.title}</h2>

                  <div className="space-y-5">
                    {activeContent.paragraphs
                      ?.slice(
                        0,
                        activeContent.id === "md-message"
                          ? activeContent.paragraphs.length // 👈 show all for MD
                          : showFullMessage
                            ? activeContent.paragraphs.length
                            : 3 // 👈 show only first 2 for JMD
                      )
                      .map((para, index) => (
                        <div key={index}>
                          {para.intro && (
                            <p className="text-base font-semibold mb-3">
                              {para.intro}
                            </p>
                          )}
                          <p className="text-sm sm:text-base leading-relaxed text-white/95">
                            {para.content}
                          </p>
                        </div>
                      ))}
                  </div>

                  {/* Read More / Read Less Button for JMD only */}
                  {activeContent.id === "jmd-message" && activeContent.paragraphs.length > 3 && (
                    <div className="mt-4 flex justify-start">
                      <button
                        onClick={toggleReadMore}
                        className="bg-white text-[#293E52] font-semibold cursor-pointer px-5 py-2 rounded-full shadow-md hover:bg-white transition-all duration-200"
                      >
                        {showFullMessage ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  )}

                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  )
}
