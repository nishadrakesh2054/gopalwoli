import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AppChrome } from "@/components/layout/AppChrome";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gopal Woli | Mortgage Broker Canberra",
    template: "%s | Gopal Woli",
  },
  description:
    "Canberra mortgage broker for home loans, refinancing, property investment and personalised finance guidance.",
  icons: {
    icon: "/gopalwalilogo.png",
    apple: "/gopalwalilogo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className={`${plusJakarta.className} min-h-full min-w-0 flex flex-col font-sans overflow-x-clip`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:text-white focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
