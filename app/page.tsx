import Footer from "../components/Footer";
import SectionHero from "./SectionHero";
import SectionLetsConnect from "./SectionLetsConnect";
import SectionMyLatestProject from "./SectionMyLatestProject";
import SectionQuote from "./SectionQuote";
import SectionTechnologyStack from "./SectionTechnologyStack";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (<><Navbar />
    <div className="safe-layout">
      
      <SectionHero />
      <SectionTechnologyStack />
      <SectionMyLatestProject />
      <SectionLetsConnect />
      <SectionQuote />
      <Footer />
    </div>
    </>
  )
}
