"use client"

import { useState } from "react"
import AccordionItem from "./Accordion"

export function CertificationsSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (    <div className="w-full max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12 space-y-4">
        <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base max-w-4xl mx-auto">
          At GWind, quality and safety are non-negotiable pillars of our operations. We have developed and maintained a robust Integrated Management System (IMS) that aligns with international standards, ensuring that all our services meet the highest benchmarks of safety, quality, and reliability.
        </p>
      </div>

      {/* Accordions */}
      <div className="border border-border rounded-lg overflow-hidden">
        {/* ISO Certifications */}
        <AccordionItem title="Our Safety Commitment " isOpen={openIndex === 0} onClick={() => toggleAccordion(0)}>
          <div className="space-y-6">
            <div>
              <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
               • Accident & Incident Elimination – Proactively identifying hazards and ensuring risk-free work environments.
              </p>
              <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
• Safe & Healthy Workplace – Maintaining a culture where employee wellbeing comes first.              </p>
             <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
• Zero Incident Approach – Striving for flawless execution with no compromises on safety standards.  </p>
<p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
•	Efficiency with Safety First – Enhancing work productivity without ever sacrificing safety protocols.             </p>
<p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
•	Standardization & Documentation – Strict adherence to documented procedures and international safety guidelines.           </p>
<p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
•	Safety Committee Oversight – Dedicated safety committees regularly review and improve safety practices.        </p>
<p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
•	Skill Empowerment – Continuous training and GWO certification for all field engineers and technicians.              </p>
            </div>

 


          </div>
        </AccordionItem>

        {/* Quality */}
        <AccordionItem title="Quality Assurance" isOpen={openIndex === 1} onClick={() => toggleAccordion(1)}>
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
                Our dedication to quality ensures that every turbine serviced by GWind operates at its peak performance. We emphasize:

              </p>
            </div>

            <ul className="space-y-1">
              <li className="flex items-start gap-3">
                <span className="text-primary mb-2">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
Use of SOP-driven maintenance schedules for consistency.                </span>
              </li> 
              <li className="flex items-start gap-3">
                <span className="text-primary mb-2">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
Deployment of specialized tools and calibrated equipment for all major interventions.                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mb-2">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">Strict compliance with OEM specifications and global industry standards.
</span>
              </li>
                   <li className="flex items-start gap-3">
                <span className="text-primary mb-2">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">Regular audits, inspections, and reporting mechanisms for full transparency.
</span>
              </li>
            
            </ul>
          </div>
        </AccordionItem>

        {/* Health and Safety */}
        {/* <AccordionItem title="Health and Safety" isOpen={openIndex === 2} onClick={() => toggleAccordion(2)}>
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

              </p>
              <p className="text-[#293E52] font-semibold text-sm sm:text-[14px] md:text-[16px] lg:text-[18px] mt-4">Our Safety Commitment</p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mb-2">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mb-2">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mb-2">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </li>
              
            </ul>

            <div>
              <p className="text-[#293E52] font-semibold mb-3 text-sm sm:text-[14px] md:text-[16px] lg:text-[18px]">Goal</p>
              <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

              </p>
            </div>
          </div>
        </AccordionItem> */}

        {/* Policy */}
        {/* <AccordionItem title="Policy" isOpen={openIndex === 3} onClick={() => toggleAccordion(3)}>
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

              </p>
              <p className="text-[#293E52]  font-semibold text-sm sm:text-[14px] md:text-[16px] lg:text-[18px] mt-4">Our Policy Commitments</p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </li>
             
            </ul>

            <div>
              <p className="text-[#293E52]  font-semibold mb-3 text-sm sm:text-[14px] md:text-[16px] lg:text-[18px]">Our Vision</p>
              <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
                Rentha Energy is responsible while contributing to a cleaner, greener, and safer world for future
                generations.
              </p>
            </div>
          </div>
        </AccordionItem> */}
      </div>
    </div>
  )
}