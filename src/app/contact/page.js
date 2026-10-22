import { ContactForm } from "@/components/Contact-Form"
import { ContactInfo } from "@/components/Contact-Info"
import MapSection from "@/components/Contact-Map"
import InnerBanner from "@/components/Inner-Banner"

export default function Contact() {
  return (
    <>
      <InnerBanner title="Contact" bgImage="/images/contact-banner.png" />

      <main className="bg-background">
        <div className="mx-auto max-w-[90%] 2xl:max-w-[80%] px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 grid-cols-12 ">
            {/* Left — GWind + WandSe contact cards */}
            <ContactInfo />

            {/* Right — enquiry form */}
            <ContactForm />
          </div>
        </div>
      </main>

      <MapSection />
    </>
  )
}
