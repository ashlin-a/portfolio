import Navbar from '@/components/Navbar';
import ProgrammingSkillSection from '@/components/ProgrammingSkillSection';
import ContactSection from '@/components/ContactSection';
import IntroSection from '@/components/IntroSection';
import Footer from '@/components/Footer';
import ProjectSection from '@/components/ProjectSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <IntroSection />
      <ProgrammingSkillSection />
      {/* <ProjectSection /> */}
      <ContactSection />
      <Footer/>
    </>
  );
}
