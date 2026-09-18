"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function StudioChrome({
  children,
  header,
  footer,
  widget,
}: {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  widget: ReactNode;
}) {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) {
    return children;
  }

  return (
    <>
      {header}
      <main id="main" className="min-w-0 flex-1 overflow-x-clip">
        {children}
      </main>
      {footer}
      {widget}
    </>
  );
}
