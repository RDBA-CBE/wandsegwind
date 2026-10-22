"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setFormData({ name: "", phone: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <div className="col-span-12 lg:col-span-5 flex items-center justify-center">
      <div className="w-full rounded-lg border border-border bg-card p-8 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-input bg-[#F2F3F4] px-4 py-3 text-foreground placeholder-[#293E52] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          />

          {/* Phone Input */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone no."
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-input bg-[#F2F3F4] px-4 py-3 text-foreground placeholder-[#293E52] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email id"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-input bg-[#F2F3F4] px-4 py-3 text-foreground placeholder-[#293E52] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          />

          {/* Message Textarea */}
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full rounded-md border border-input bg-[#F2F3F4] px-4 py-3 text-foreground placeholder-[#293E52] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none"
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className=" bg-[#1A60A4] text-white w-[180px]"
          >
            {isSubmitting ? "Sending..." : "Request A Call Back"}
          </Button>
        </form>
      </div>
    </div>
  )
}