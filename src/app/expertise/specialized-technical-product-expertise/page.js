import { Suspense } from "react";
import InnerBanner from "@/components/Inner-Banner";
import SpecializedTechnical from "@/components/SpecializedTechnical";
import { CallButton } from "@/components/Call-Action";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <InnerBanner title="Specialized Technical & Product Expertise" bgImage="/images/special-ban" />
      <SpecializedTechnical/>
      <CallButton />
    </Suspense>
  );
}
