"use client";

export default function WarrantyStandaloneSection() {
  return (
    <section className="w-full bg-white">


      {/* Title and Content Section */}
      <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52] mb-8">
GWind will provide        </h2>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Scheduled Preventative Maintenance ",
            "Corrective Maintenance & Troubleshooting ",
            "Inspections and Reporting",
            "Emergency Response",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-3  "
            >
              {/* Replaced Icon with Image */}
              <div className=" rounded-full p-2 flex items-center justify-center w-8 h-8">
                <img
                  src="/images/check.svg" // replace with your actual image path
                  alt="icon"
                  className="w-4 h-4 object-contain"
                />
              </div>

              <p className="text-[#293E52] font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
