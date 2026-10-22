import { Suspense } from "react";
import InnerBanner from "@/components/Inner-Banner";
import CompetitiveConforming from "@/components/CompetitiveConforming";
import { CallButton } from "@/components/Call-Action";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <InnerBanner title="Competitive and Conforming" bgImage="/images/competitive-ban" />
      <CompetitiveConforming/>
      <CallButton />
    </Suspense>
  );
}
