import AboutWandseSection from "@/components/AboutWandseSection";
import { CallButton } from "@/components/Call-Action";
import AboutUsSection from "@/components/Home-About";
import CareerSection from "@/components/Home-Career";
import ProjectsHome from "@/components/Home-Projects";
import SolutionsGwind from "@/components/Home-Solutions";
import TabsComponent from "@/components/Home-Spare";
import NewsHomeSection from "@/components/News-Media";
import TabsCarouselSection from "@/components/TabsCarouselSection";
import TabsSolarSection from "@/components/TabsSolarSection";
import VideoBannerSection from "@/components/Video-Banner";
import VideoBannerSectionNew from "@/components/VideoBannerSectionNew";
import Image from "next/image";

export default function Home() {
  return (
   <>
   {/* <VideoBannerSection /> */}
   <VideoBannerSectionNew/>
   <AboutWandseSection/>
   <AboutUsSection />
   <SolutionsGwind />
   {/* <TabsComponent /> */}
   <TabsCarouselSection/>
   <TabsSolarSection/>
   <ProjectsHome />
  <CareerSection />
  <NewsHomeSection />
  <CallButton />
   
   </>
  );
}
