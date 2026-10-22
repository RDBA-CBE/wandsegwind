
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CallButton() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Form submitted:", formData)
    setFormData({ name: "", phone: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <div className="w-full flex items-center justify-center py-4 px-4 lg:py-10">
      <div className="w-full max-w-[90%] 2xl:max-w-[80%] bg-white rounded-md shadow-[0_2px_16px_rgba(0,0,0,0.25)] p-6 md:p-8 lg:p-8 my-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12  lg:gap-8 items-start">
          {/* Left Section */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Keep Get Help aligned with top of form */}
            <div className="mb-2">
              <h2 className="text-[#1A60A4] text-base md:text-lg font-bold">
                Get Help
              </h2>
            </div>
            <h1 className="text-[#4CAF50] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">
              Have questions or need support?
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our expert team is here to guide you every step of the way — from
              project consultation to technical support and after-sales service.
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="lg:col-span-7 flex flex-col justify-start pt-[30px] lg:pt-0">
            {/* ^ small top padding to align exactly with “Get Help” heading */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm bg-[#F2F3F4] border border-gray-200 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1A60A4] focus:border-transparent transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone no."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm bg-[#F2F3F4] border border-gray-200 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1A60A4] focus:border-transparent transition-all"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Id"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 text-sm bg-[#F2F3F4] border border-gray-200 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1A60A4] focus:border-transparent transition-all"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2.5 text-sm bg-[#F2F3F4] border border-gray-200 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1A60A4] focus:border-transparent transition-all resize-none"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-2.5 text-sm bg-[#1A60A4] text-white font-semibold rounded-lg hover:bg-[#155182] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A60A4] focus:ring-offset-2 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Request A Call Back"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
