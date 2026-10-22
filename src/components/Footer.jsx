"use client";
import { useState, useEffect } from "react";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative w-full bg-white mt-48">
      {/* Curved dark blue background */}
      <div className="relative w-full bg-[#293E52] pb-8 ">
        <div
          className="absolute top-0 -left-20 h-full w-[500px] bg-no-repeat bg-left bg-contain opacity-100 hidden lg:block z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/Footer-tall.gif')",
          }}
        ></div>

        {/* Mobile image - visible only on mobile (< 768px) */}
        <img
          src="/images/mobile-footer.gif"
          alt="Curved Top"
          className="absolute top-1 left-0 w-full md:hidden -translate-y-full"
        />

        {/* Tablet image - visible only on tablet (768px - 1023px) */}
        <img
          src="/images/tab-footer.gif"
          alt="Curved Top"
          className="absolute top-1 left-0 w-full hidden md:block lg:hidden -translate-y-full"
        />

        {/* Desktop image - visible only on desktop (1024px and above) */}
        <img
          src="/images/desktop-footer.gif"
          alt="Curved Top"
          className="absolute top-1 left-0 w-full hidden lg:block -translate-y-full"
        />

        <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-6 relative z-10 py-8">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-6 mb-2">
            {/* Left Section - Logo and Social */}
            <div className="md:col-span-2 lg:col-span-2 flex flex-col items-start lg:ml-2">
              <div className="mb-4">
                {/* Logo Circle */}
                <div className="flex items-center ">
                  <div className="flex flex-col gap-4 items-center">
                    <img
                      src="/images/logo.png"
                      alt="Logo"
                      className="w-25 h-auto"
                    />
                    <img
                      src="/images/wandselogo-white.png"
                      alt="Logo"
                      className="w-30 h-auto "
                    />
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-8 mt-6">
                <a
                  href="https://www.facebook.com/speedteamgroup"
                  className="transition-colors"
                  target="blank"
                >
                  <img
                    src="/images/facebook.svg"
                    alt="Facebook"
                    className="w-5 h-5 hover:brightness-125 hover:scale-110 transition-transform duration-200 object-contain"
                  />
                </a>
                <a href="#" className="transition-colors" target="blank">
                  <img
                    src="/images/whatsapp.svg"
                    alt="Message"
                    className="w-5 h-5 hover:brightness-125 hover:scale-110 transition-transform duration-200"
                  />
                </a>
                <a
                  href="https://www.instagram.com/speedteamgroup?igsh=MWF6YWsxdjN0bGMwbg=="
                  className="transition-colors"
                  target="blank"
                >
                  <img
                    src="/images/insta.svg"
                    alt="Instagram"
                    className="w-5 h-5 hover:brightness-125 hover:scale-110 transition-transform duration-200"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@SpeedTeamGroup"
                  className="transition-colors"
                  target="blank"
                >
                  <img
                    src="/images/youtube.svg"
                    alt="YouTube"
                    className="w-7 h-7 hover:brightness-125 hover:scale-110 transition-transform duration-200"
                  />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1 lg:col-span-1">
              <h4 className="text-white font-semibold mb-4">Quick Link</h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Solutions", href: "/solutions" },
                  { label: "Expertise", href: "/expertise" },
                  { label: "Projects", href: "/project" },
                  { label: "IMS @ GWind", href: "/ims@gwind" },
                  { label: "News & Media", href: "/news" },
                  { label: "Career", href: "/career" },
                  { label: "Corporate", href: "/corporate" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our O & M */}
            <div className="md:col-span-1 lg:col-span-1">
              <h4 className="text-white font-semibold mb-4">O & M Contracts</h4>
              <ul className="space-y-2">
                {[
                  { label: "CAOMSC", href: "/solutions" },
                  {
                    label: "Annual Operation & Maintenance Solutions",
                    href: "/solutions",
                  },
                  {
                    label: "Annual/Standalone Maintenance Solutions",
                    href: "/solutions",
                  },
                  {
                    label: "Generation Unit-Based Services",
                    href: "/solutions",
                  },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="md:col-span-2 lg:col-span-2">
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <div className="space-y-4">
                {/* Head Office */}
                <div className="flex gap-3">
                  <img
                    src="/images/location.svg"
                    alt="Head Office"
                    className="w-5 h-5 mt-0.5"
                  />
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="text-white text-sm font-medium">
                        Head Office of GWind
                      </p>
                      <p className="text-gray-400 text-sm">
                        ‌IndiQube Ocean Bay, 5th floor, A-19&20, <br />
                        SIDCO Thiru Vi Ka Industrial Estate, Guindy, <br />
                        Chennai – 600032, Tamil Nadu, India
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        Head Office of WandSe
                      </p>
                      <p className="text-gray-400 text-sm">
                        ‌No: 2-7-88, Tenkasi Road, Elathur, <br />
                        Tenkasi - 627803, Tamil Nadu, India.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex gap-3">
                  <img
                    src="/images/new-call.svg"
                    alt="Call Us"
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-white text-sm font-medium">Call Us</p>
                    <div>
                      <span className="text-white text-sm">GWind : </span>
                      <a
                        href="tel:+917094488909"
                        className="text-gray-400 text-sm "
                      >
                        +91 70944 88912
                      </a>{" "}
                    </div>
                    <div>
                      <span className="text-white text-sm">WandSe : </span>
                      <a
                        href="tel:+919943115133"
                        className="text-gray-400 text-sm "
                      >
                        +91 99431 15133
                      </a>{" "}
                    </div>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex gap-3">
                  <img
                    src="/images/mail.svg"
                    alt="Email Us"
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-white text-sm font-medium">Email Us</p>
                    <div>
                      <span className="text-white text-sm">Gwind : </span>
                      <a
                        href="mailto:info@renfraenergy.com"
                        className="text-gray-400 text-sm "
                      >
                        info@gwind.in
                      </a>{" "}
                    </div>
                    <div>
                      <span className="text-white text-sm">wandSe : </span>
                      <a
                        href="mailto:support@gmail.com"
                        className="text-gray-400 text-sm "
                      >
                        support@gmail.com
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-2 flex flex-col justify-start">
              <h4 className="text-white font-semibold mb-2">
                Stay Connected with Us
              </h4>
              {/* <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter for latest updates and offers.</p> */}
              <form
                onSubmit={handleSubscription}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 rounded bg-gray-200 text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 w-[120px] bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors text-sm"
                >
                  {subscribed ? "Subscribed!" : "Subscription"}
                </button>
              </form>
              {subscribed && (
                <p className="text-green-400 text-xs mt-2">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-2 flex flex-col md:flex-row justify-between items-center text-white text-sm lg:ml-2">
            <p>© 2025 - GWind & WandSe</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="/terms&conditions"
                className="text-white transition-colors"
              >
                Terms & Conditions
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="/privacy-policy"
                className="text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-b from-[#329ACD] to-[#3AB257] hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}
