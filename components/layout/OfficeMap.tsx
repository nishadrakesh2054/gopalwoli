"use client";

import { useState } from "react";

const MAP_SRC =
  "https://maps.google.com/maps?q=2-10%20Oatley%20Court%20Belconnen%20ACT%202617&z=16&output=embed";

export function OfficeMap() {
  const [show, setShow] = useState(false);

  if (!show) {
    return (
      <button
        type="button"
        onClick={() => setShow(true)}
        className="flex h-[320px] w-full items-center justify-center bg-[#d7e6f1] text-[15px] font-semibold text-brand transition-colors hover:bg-[#cbe0ef]"
      >
        Load office map
      </button>
    );
  }

  return (
    <iframe
      title="Map of Gopal Woli office in Belconnen"
      src={MAP_SRC}
      className="h-[320px] w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
