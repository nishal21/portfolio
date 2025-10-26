import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import VideoGallery from '@/components/VideoGallery';
import ContactSection from '@/components/ContactSection';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <VideoGallery />
      <ContactSection />
    </div>
  );
}
