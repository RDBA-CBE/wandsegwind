export default function ValueVisionMission() {
  return (
    <div className=" bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Side - Value Card */}
          <div className="bg-[#F6F6F6] rounded-lg shadow-sm px-8 sm:px-12 flex items-center justify-center min-h-[300px]">
            <div className="text-center lg:text-left w-full">
              <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#293E52] mb-6">
                Values
              </h2>
              <p className="text-sm sm:text-base text-[#293E52] leading-relaxed">
                <span className="text-[#293E52] font-bold">Innovation –</span> Continuous adoption of new technologies and best practices.<br />
                <span className="text-[#293E52] font-bold">Reliability –</span> Minimizing downtime through proactive service and increase asset availability<br />
                <span className="text-[#293E52] font-bold"> Sustainability – </span> Driving long-term clean energy growth.<br />
                <span className="text-[#293E52] font-bold">Performance – </span> We strive to ensure that we provide optimal O&M solutions<br />
                <span className="text-[#293E52] font-bold">Safety First – </span> No compromises on workforce and operational safety.<br />
              </p>
            </div>
          </div>

          {/* Right Side - Vision and Mission Cards */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Vision Card */}
            <div className="bg-[#F6F6F6] rounded-lg shadow-sm px-8 sm:px-12 flex items-center justify-center min-h-[250px]">
              <div className="text-center lg:text-left w-full">
                <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#293E52] mb-6">
                  Vision
                </h2>
                <p className="text-sm sm:text-base text-[#293E52] leading-relaxed">
                  To be the premier global provider of wind turbine operation and maintenance services through advanced technologies, maximized turbine performance, and an uncompromising commitment to safety, sustainability, and service excellence.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-[#F6F6F6] rounded-lg shadow-sm px-8 sm:px-12 flex items-center justify-center min-h-[250px]">
              <div className="text-center lg:text-left w-full">
                <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#293E52] mb-6">
                  Mission
                </h2>
                <p className="text-sm sm:text-base text-[#293E52] leading-relaxed">
                  To deliver best-in-class O&M solutions that maximize turbine availability, optimize performance, and create long-term value through safety-first operations, innovative practices, and quality workmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}