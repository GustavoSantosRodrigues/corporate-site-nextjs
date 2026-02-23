import HomeHeroSwiper from "../components/home/HomeHeroSwiper";
import AboutSection from "../components/home/AboutSection";
import TrustSection from "../components/home/TrustSection";
import ClientsLogo from "../components/home/ClientsLogo";
import ProjectsShowcaseSection from "../components/home/Cases";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <div >
      <HomeHeroSwiper />
      <AboutSection />
      <TrustSection />
      <ClientsLogo />
      <ProjectsShowcaseSection />
      <ContactSection />
    </div>
  );
}
