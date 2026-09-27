import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import SlamScan from "@/components/SlamScan";
import ProjectIndex from "@/components/ProjectIndex";
import SiteFooter from "@/components/SiteFooter";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SlamScan />
        <ProjectIndex />
      </main>
      <SiteFooter />
    </>
  );
}
