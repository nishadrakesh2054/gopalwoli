export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "https://www.afhl.com.au/calculators/", label: "Calculator", external: true },
  { href: "/contact", label: "Contact" },
] as const;

export const footerPages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "https://www.afhl.com.au/calculators/", label: "Calculator" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Free quote" },
] as const;

export const footerServices = [
  { href: "/services/first-home-buyer", label: "First home buyer" },
  { href: "/services/house-and-land", label: "House & land packages" },
  { href: "/services/property-investment", label: "Property investment" },
  { href: "/services/refinancing", label: "Refinancing" },
  { href: "/services/commercial-finance", label: "Commercial finance" },
  { href: "/services/smsf", label: "SMSF" },
] as const;
