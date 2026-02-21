import Header from "./components/layout/Header";
import HomeHeroSwiper from "./components/home/HomeHeroSwiper";
import AboutSection from "./components/home/AboutSection";
import TrustSection from "./components/home/TrustSection";
import ClientsLogo from "./components/home/ClientsLogo";
import ProjectsShowcaseSection from "./components/home/Cases";
import ContactSection from "./components/home/ContactSection";

export default function Home() {
  return (
    <div >
      <Header />
      <HomeHeroSwiper />
      <AboutSection />
      <TrustSection />
      <ClientsLogo />
      <ProjectsShowcaseSection />
      <ContactSection />
    </div>
  );
}
