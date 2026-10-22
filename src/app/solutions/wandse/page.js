import { Suspense } from "react";
import WandseMain from "./WandseMain";
import InnerBanner from "@/components/Inner-Banner";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <InnerBanner title="WandSe Solutions" bgImage="/images/solun-banner.svg" />
      <WandseMain />
    </Suspense>
  );
}
