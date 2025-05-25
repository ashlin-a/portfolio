import Navbar from '@/components/Navbar';
import ProgrammingSkillSection from '@/components/ProgrammingSkillSection';
import ContactSection from '@/components/ContactSection';
import IntroSection from '@/components/IntroSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <IntroSection />
      <ProgrammingSkillSection />
      <ContactSection />
      <Footer/>
    </>
  );
}
