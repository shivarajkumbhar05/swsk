import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import HowItWorks from "./components/HowItWorks";
import ReviewSection from "./components/ReviewSection"; // 👈 Import ReviewSection
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        
        {/* 👇 Add ReviewSection here - between ProjectsSection and HowItWorks */}
        <ReviewSection />
        
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}