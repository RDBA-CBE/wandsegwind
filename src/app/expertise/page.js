import { Suspense } from "react";
import InnerBanner from "@/components/Inner-Banner";
import ExpertiseMain from "@/components/ExpertiseMain";
import { CallButton } from "@/components/Call-Action";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <InnerBanner title="Expertise" bgImage="/images/solun-banner.svg" />
      <ExpertiseMain/>
      <CallButton />
    </Suspense>
  );
}
