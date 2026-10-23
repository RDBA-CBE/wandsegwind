import React from 'react';
import { MapPin } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

export default function TechSection() {
  const projects = [
    {
      id: 1,
      image: "/images/adv1.svg",
      title: "Increased Availability and AEP",
      location: "Chennai",
      description: "Our proactive approach keeps your turbines spinning, maximizing your uptime and ensuring you capture every possible MWh of energy. Annual maintenance for wind turbines are according to manufacturer specifications",
      // status: "Completed",
      statusColor: "text-green-600 bg-green-50 border-green-200"
    },
    {
      id: 2,
      image: "/images/adv2.svg",
      title: "Reduced Costs",
      location: "Coimbatore",
      description: "We eliminate the high costs associated with catastrophic failures and unplanned downtime. By planning maintenance based on actual need, we optimize resource allocation and extend the lifespan of your components.",
      // status: "Ongoing",
      statusColor: "text-gray-700 bg-white border-gray-300"
    },
    {
      id: 3,
      image: "/images/adv3.svg",
      title: "Full-Scope Service",
      location: "Bangalore",
      description: "We are your single point of contact for all O&M needs—from remote monitoring and diagnostics to on-site repairs, spares sourcing and logistics.",
      status: "Planning",
      statusColor: "text-blue-600 bg-blue-50 border-blue-200"
    },
        {
      id: 4,
      image: "/images/adv4.svg",
      title: "Experienced and Certified Technicians",
      location: "Bangalore",
      description: "Our field teams are highly trained, certified, and equipped with the latest tools and technology to handle any challenge.",
      status: "Planning",
      statusColor: "text-blue-600 bg-blue-50 border-blue-200"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto">
        {/* Title */}
        <div className="flex items-center justify-center mb-12">
  <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52] text-center mr-2">
     The GWind Advantage
  </h1>
   {/* <a href="/technologies">
            <ExternalLink
              className="w-6 sm:w-7 h-6 sm:h-7"
              strokeWidth={2}
              style={{ stroke: "url(#grad)" }}
            />
            <svg width="0" height="0">
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3AB257" />
                <stop offset="100%" stopColor="#329ACD" />
              </linearGradient>
            </svg>
          </a> */}
</div>



        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className=" overflow-hidden "
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-xl">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover rounded-xl"
  />
</div>


              {/* Content */}
              <div className="py-6">
                {/* Title and Status */}
                <div className="flex items-start justify-between mb-1">
                  <h2 className="text-xl font-semibold text-[#293E52]">
                    {project.title}
                  </h2>
                  {/* <span className={`px-3 py-1 rounded-full text-sm font-medium border ${project.statusColor}`}>
                    {project.status}
                  </span> */}
                </div>

                {/* Location */}
                {/* <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span className="text-green-600 font-medium">
                    {project.location}
                  </span>
                </div> */}

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}