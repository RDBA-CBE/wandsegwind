export function QualityCommitment() {
  const bulletPoints = [
    "All spare parts come with quality test certificates, guarantees, and warranties affirming stringent standards. ",
    "Continuous improvement of products, services, processes, and quality systems. ",
    "Maximizing customer satisfaction through staff engagement, training and aligning with quality objectives.",
    "Compliance with all applicable laws and regulations. ",
    "Consistently delivering exceptional customer support. ",
    "Ongoing enhancement of skills through staff training and development. ",
    "Rigorous vetting and auditing of suppliers to ensure part quality. ",
    "Multilayered quality checks from procurement to delivery. ",
    "Investing in infrastructure and technologies that bolster quality assurance. ",
  ]

  return (
    <section className="w-full px-4 py-12 ">
      {/* Title and subtitle container */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#293E52] mb-4 text-balance">
        Our quality Commitment
        </h1>
    
      </div>

      {/* Main image section with overlay */}
      <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative w-full h-96 sm:h-[500px] md:h-[600px] lg:h-[600px] rounded-2xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/commit.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Bullet points container - positioned on the left */}
          <div className="absolute inset-0 flex items-center rounded-2xl">
            <div className="relative w-full sm:w-1/2 px-6 sm:px-8 lg:px-12 py-6 sm:py-8">
              <div className="absolute inset-0  rounded-l-2xl" />

              <ul className="relative space-y-3 sm:space-y-4 z-10">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex gap-3 text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2" />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
