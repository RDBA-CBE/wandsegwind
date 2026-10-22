import { Suspense } from "react";

import InventoryStickSection from "./InventoryStickSection";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <InventoryStickSection />
    </Suspense>
  );
}
