"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function CareerModal({ isOpen, onClose, jobTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    place: "",
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
    setIsSubmitting(false)
    setFormData({
      name: "",
      phone: "",
      email: "",
      qualification: "",
      place: "",
      message: "",
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#293E52]">Apply for {jobTitle}</h2>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-[#293E52]" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Name and Phone - 2 columns on desktop, 1 on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#293E52] mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#329ACD] bg-white text-[#293E52]"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#293E52] mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#329ACD] bg-white text-[#293E52]"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Email and Qualification - 2 columns on desktop, 1 on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#293E52] mb-2">
                      Email ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#329ACD] bg-white text-[#293E52]"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="qualification" className="block text-sm font-medium text-[#293E52] mb-2">
                      Qualification <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#329ACD] bg-white text-[#293E52]"
                      placeholder="Enter your qualification"
                    />
                  </div>
                </div>

                {/* Place - Full width */}
                <div>
                  <label htmlFor="place" className="block text-sm font-medium text-[#293E52] mb-2">
                    Place <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="place"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#329ACD] bg-white text-[#293E52]"
                    placeholder="Enter your place"
                  />
                </div>

                {/* Message - Full width */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#293E52] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#329ACD] bg-white text-[#293E52] resize-none"
                    placeholder="Enter your message (optional)"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-[#329ACD] to-[#3AB257] text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 border border-border text-[#293E52] font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}