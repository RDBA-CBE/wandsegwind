export function ContactInfo() {
  const companies = [
    {
      name: "GWind",
      logo: "/images/logo.png",
      address:
        "IndiQube Ocean Bay, 5th floor, A-19&20, SIDCO Thiru Vi Ka Industrial Estate, Guindy, Chennai – 600032, Tamil Nadu, India",
      phone: "+91 70944 88912",
      phoneHref: "tel:+917094488912",
      email: "info@gwind.in",
      emailHref: "mailto:info@gwind.in",
    },
    {
      name: "WandSe",
      logo: "/images/wandseLogo.jpg",
      logoBg: true,
      address:
        "No: 2-7-88, Tenkasi Road, Elathur, Tenkasi – 627803, Tamil Nadu, India",
      phone: "+91 99431 15133",
      phoneHref: "tel:+919943115133",
      email: "support@gmail.com",
      emailHref: "mailto:support@gmail.com",
    },
  ];

  return (
    <div className="col-span-12 lg:col-span-7 flex flex-col gap-8">
      {/* Section heading */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#293E52]">
          Get in Touch
        </h1>
        <p className="text-sm md:text-base text-[#293E52]">
          We'd love to hear from you! Whether you're looking for renewable
          energy solutions, partnership opportunities, or career information —
          our team is here to help.
        </p>
      </div>

      {/* Two company cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {companies.map((co) => (
          <div
            key={co.name}
            className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-5"
          >
            {/* Logo */}
            <div
              className={`flex items-center h-fit `}
            >
              <img
                src={co.logo}
                alt={`${co.name} logo`}
                className="h-15 w-auto object-contain"
              />
            </div>

            {/* Contact rows */}
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="flex gap-3 items-start">
                <img
                  src="/images/location.svg"
                  alt="Address"
                  className="w-5 h-5 shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm font-bold text-[#293E52] mb-0.5">
                    Office
                  </p>
                  <p className="text-sm  leading-relaxed">
                    {co.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-start">
                <img
                  src="/images/new-call.svg"
                  alt="Phone"
                  className="w-5 h-5 shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm font-bold text-[#293E52] mb-0.5">
                    Call Us
                  </p>
                  <a
                    href={co.phoneHref}
                    className="text-sm  hover:text-teal-600 transition-colors"
                  >
                    {co.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-start">
                <img
                  src="/images/mail.svg"
                  alt="Email"
                  className="w-5 h-5 shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm font-bold text-[#293E52] mb-0.5">
                    Email Us
                  </p>
                  <a
                    href={co.emailHref}
                    className="text-sm  hover:text-teal-600 transition-colors"
                  >
                    {co.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
