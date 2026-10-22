import StatsSection from "@/components/About- Main";
import AboutContentSection from "@/components/About- Main";
import { CallButton } from "@/components/Call-Action";
import InnerBanner from "@/components/Inner-Banner";
import MainCareerSection from "@/components/Main-Career";
import { QualityCommitment } from "@/components/QualityCommitment";
import QualtitySection from "@/components/QualitySourcing";
import ExecutiveMessageTabs from "@/components/Team-Message";
import TechnicalSection from "@/components/Technical-Edge";
import { TestimonialsSection } from "@/components/Testimonials";
import TimelineSection from "@/components/Timeline";
import ValueVisionMission from "@/components/Vision";
import WhyChooseWandse from "@/components/WhyChooseWandse";


export default function About() {
  return (
<>

<InnerBanner title="About" bgImage="/images/about-bg.svg" />
<StatsSection />
<WhyChooseWandse/>
<ValueVisionMission />
<TimelineSection />
<ExecutiveMessageTabs />
<QualtitySection/>
<QualityCommitment/>
<TechnicalSection />
<TestimonialsSection />
<CallButton />
</>
  );
}
