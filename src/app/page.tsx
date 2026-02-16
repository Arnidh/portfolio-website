import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import ExtracurricularsSection from '@/components/sections/photography';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import ResumeSection from '@/components/sections/resume';
import LeetCodeStats from '@/components/sections/leetcode-stats';
import BlogSection from '@/components/sections/blog';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="container mx-auto px-4 md:px-6 space-y-12 md:space-y-20">
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <LeetCodeStats />
            <ResumeSection />
          </div>

          <BlogSection />
          <ExtracurricularsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
