import Navbar from '@/components/Navbar';
import ProgrammingSkillSection from '@/components/ProgrammingSkillSection';
import ContactSection from '@/components/ContactSection';
import IntroSection from '@/components/IntroSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <ProgrammingSkillSection />
      <ContactSection />
    </div>
  );
}
