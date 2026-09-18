import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SocialWidget } from "@/components/layout/SocialWidget";
import { StudioChrome } from "@/components/layout/StudioChrome";

export function AppChrome({ children }: { children: React.ReactNode }) {
  return (
    <StudioChrome header={<Header />} footer={<Footer />} widget={<SocialWidget />}>
      {children}
    </StudioChrome>
  );
}
