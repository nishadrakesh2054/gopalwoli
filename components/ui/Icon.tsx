import type { ReactNode } from "react";

export function Icon({
  name,
  className = "w-5 h-5",
}: {
  name:
    | "user"
    | "layers"
    | "bolt"
    | "shield"
    | "home"
    | "land"
    | "building"
    | "refresh"
    | "office"
    | "document"
    | "briefcase"
    | "car"
    | "hand"
    | "chart";
  className?: string;
}) {
  const paths: Record<typeof name, ReactNode> = {
    user: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 19c1.4-3.2 3.8-4.8 7-4.8S17.6 15.8 19 19" />
      </>
    ),
    layers: (
      <>
        <path d="M12 4 4 8l8 4 8-4-8-4Z" />
        <path d="M4 12l8 4 8-4" />
        <path d="M4 16l8 4 8-4" />
      </>
    ),
    bolt: <path d="M13 3 6 13h5l-1 8 7-10h-5l1-8Z" />,
    shield: (
      <>
        <path d="M12 3 5 6v6c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5V6l-7-3Z" />
        <path d="M9.5 12.2 11.2 14l3.4-3.6" />
      </>
    ),
    home: (
      <>
        <path d="M4 11.5 12 5l8 6.5" />
        <path d="M6.5 10.5V19h11v-8.5" />
      </>
    ),
    land: (
      <>
        <path d="M4 19h16" />
        <path d="M7 19V9l5-4 5 4v10" />
      </>
    ),
    building: (
      <>
        <path d="M5 20V6h9v14" />
        <path d="M14 10h5v10" />
        <path d="M8 9h3M8 13h3M8 17h3" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 12a8 8 0 1 1-2.2-5.5" />
        <path d="M20 5v5h-5" />
      </>
    ),
    office: (
      <>
        <path d="M4 20V5h10v15" />
        <path d="M14 9h6v11" />
        <path d="M7 9h4M7 13h4M7 17h4" />
      </>
    ),
    document: (
      <>
        <path d="M8 4h6l4 4v12H8V4Z" />
        <path d="M14 4v4h4" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3.5" y="8" width="17" height="11" rx="1.5" />
        <path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8" />
      </>
    ),
    car: (
      <>
        <path d="M4 15h16v3H4z" />
        <path d="M6 15 7.5 10h9L18 15" />
        <circle cx="7.5" cy="18" r="1.2" />
        <circle cx="16.5" cy="18" r="1.2" />
      </>
    ),
    hand: (
      <>
        <path d="M8 12V6.5a1.5 1.5 0 0 1 3 0V11" />
        <path d="M11 11V5.5a1.5 1.5 0 0 1 3 0V11" />
        <path d="M14 11V7a1.5 1.5 0 0 1 3 0v8c0 3-2 5-5 5h-1c-3.5 0-6-2-6-5.5V13" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19h16" />
        <path d="M7 16v-5" />
        <path d="M12 16V8" />
        <path d="M17 16v-8" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
