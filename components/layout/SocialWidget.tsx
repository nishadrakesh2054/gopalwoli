"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const STEP = 30;

const items = [
  { name: "Facebook", href: site.social.facebook, angle: 0, className: "bg-[#1877F2]", Icon: FacebookIcon },
  { name: "WhatsApp", href: site.social.whatsapp, angle: STEP, className: "bg-[#25D366]", Icon: WhatsAppIcon },
  { name: "Instagram", href: site.social.instagram, angle: STEP * 2, className: "bg-[linear-gradient(135deg,#f58529_0%,#dd2a7b_50%,#8134af_100%)]", Icon: InstagramIcon },
  { name: "X", href: site.social.x, angle: STEP * 3, className: "bg-[#111111]", Icon: XIcon },
] as const;

export function SocialWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`social-widget fixed right-4 bottom-4 z-40 sm:right-5 sm:bottom-5 ${open ? "is-open" : ""}`}>
      <div className="relative h-9 w-9 sm:h-10 sm:w-10">
        {items.map((item) => (
          <div
            key={item.name}
            className="social-widget-arm pointer-events-none absolute inset-0 origin-center"
            style={{
              ["--arm-rot" as string]: `${item.angle}deg`,
            }}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              className={`social-widget-orb absolute top-1/2 left-1/2 flex h-9 w-9 items-center justify-center rounded-full text-white shadow-[0_8px_18px_rgba(23,32,43,0.22)] sm:h-11 sm:w-11 ${item.className}`}
              style={{
                ["--icon-rot" as string]: `-${item.angle}deg`,
              }}
            >
              <item.Icon />
            </a>
          </div>
        ))}

        <button
          type="button"
          aria-label={open ? "Close social links" : "Open social links"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white shadow-[0_10px_24px_rgba(15,117,188,0.38)] transition-colors hover:bg-brand-dark sm:h-10 sm:w-10"
        >
          <svg
            viewBox="0 0 24 24"
            className="social-widget-plus h-3.5 w-3.5 sm:h-4 sm:w-4"
            fill="none"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-7 sm:w-7" fill="currentColor" aria-hidden="true">
      <path d="M14.5 8.5V6.8c0-.7.5-1.1 1.2-1.1H17V3h-2.2C12.4 3 11 4.5 11 6.7v1.8H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-7 sm:w-7" fill="currentColor" aria-hidden="true">
      <path d="M12.04 3.2A8.7 8.7 0 0 0 3.4 11.9c0 1.53.4 3.02 1.16 4.33L3 21l4.9-1.5a8.7 8.7 0 0 0 4.14 1.05h.01a8.7 8.7 0 0 0 8.7-8.73 8.67 8.67 0 0 0-8.71-8.62Zm5.05 12.32c-.21.6-1.05 1.1-1.73 1.24-.46.1-1.06.18-3.08-.66-2.59-1.08-4.26-3.72-4.39-3.9-.13-.17-1.05-1.4-1.05-2.67s.66-1.9.9-2.16c.21-.24.55-.35.88-.35h.63c.2 0 .47-.08.73.56.27.66.91 2.28.99 2.45.08.17.13.37.03.59-.1.23-.16.37-.31.57-.16.2-.33.44-.47.59-.16.17-.32.35-.14.68.18.33.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.51 1.54.33.16.52.13.71-.08.19-.21.81-.95 1.03-1.27.22-.33.43-.27.73-.16.3.1 1.9.9 2.23 1.06.33.17.55.25.63.38.08.14.08.79-.13 1.39Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-7 sm:w-7" fill="currentColor" aria-hidden="true">
      <path d="M8.2 3h7.6A5.2 5.2 0 0 1 21 8.2v7.6A5.2 5.2 0 0 1 15.8 21H8.2A5.2 5.2 0 0 1 3 15.8V8.2A5.2 5.2 0 0 1 8.2 3Zm0 1.8A3.4 3.4 0 0 0 4.8 8.2v7.6a3.4 3.4 0 0 0 3.4 3.4h7.6a3.4 3.4 0 0 0 3.4-3.4V8.2a3.4 3.4 0 0 0-3.4-3.4H8.2ZM17.1 6.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.6A4.4 4.4 0 1 1 7.6 12 4.4 4.4 0 0 1 12 7.6Zm0 1.8A2.6 2.6 0 1 0 14.6 12 2.6 2.6 0 0 0 12 9.4Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-7 sm:w-7" fill="currentColor" aria-hidden="true">
      <path d="M14.7 10.3 21.2 3h-1.9l-5.4 6.2L9.4 3H3.5l6.9 10.1L3.5 21h1.9l5.9-6.8 4.7 6.8h5.9l-7.2-10.7Zm-2.1 2.4-.7-1-5.5-7.8h2.4l4.4 6.3.7 1 5.8 8.2h-2.4l-4.7-6.7Z" />
    </svg>
  );
}
