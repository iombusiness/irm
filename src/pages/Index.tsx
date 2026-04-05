import AboutSection from "@/components/AboutSection";
import GuidesSection from "@/components/GuidesSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import DataPrivacySection from "@/components/DataPrivacySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutSection />
        <GuidesSection />
        <ScreenshotsSection />
        <DisclaimerSection />
        <DataPrivacySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
