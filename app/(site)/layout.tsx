import { TopNav } from "@/components/TopNav";
import { PageBackground } from "@/components/PageBackground";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <PageBackground />
      <TopNav />
      <div className="layout">{children}</div>
    </>
  );
}
