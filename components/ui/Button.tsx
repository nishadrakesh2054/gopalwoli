import Link from "next/link";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outlineLight";
  size?: "sm" | "md";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
};

const styles = {
  primary: "bg-cta text-white hover:bg-cta-dark",
  secondary: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-brand text-brand hover:bg-brand hover:text-white",
  outlineLight: "border border-white/70 text-white hover:bg-white hover:text-navy",
};

const sizes = {
  sm: "h-8 px-4 text-[13px]",
  md: "h-11 px-5 text-[15px]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  onClick,
}: Props) {
  const cls = `inline-flex items-center justify-center rounded-full font-semibold no-underline transition-colors ${sizes[size]} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
