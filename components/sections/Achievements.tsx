import Image from "next/image";

const badges = [
  {
    src: "/achivements/mortagebrokeryeaer.png",
    alt: "RateMyAgent State Winner 2025 — Mortgage Broker of the Year, Australian Capital Territory",
  },
  {
    src: "/achivements/top20.png",
    alt: "RateMyAgent National Winner 2024 — Top 20 Mortgage Broker Australia",
  },
] as const;

export function Achievements({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
      {badges.map((badge) => (
        <Image
          key={badge.src}
          src={badge.src}
          alt={badge.alt}
          width={400}
          height={400}
          className="h-[76px] w-[76px] rounded-full object-contain drop-shadow-[0_8px_18px_rgba(23,32,43,0.18)] sm:h-[96px] sm:w-[96px] lg:h-[140px] lg:w-[140px]"
        />
      ))}
    </div>
  );
}
