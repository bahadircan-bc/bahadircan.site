import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import AmbientField from "@/components/AmbientField";
import ProjectIndex from "@/components/ProjectIndex";
import SiteFooter from "@/components/SiteFooter";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AmbientField />
        <ProjectIndex />
      </main>
      <SiteFooter />
    </>
  );
}
