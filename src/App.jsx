import Hero from './components/Hero';
import Profile from './components/Profile';
import ExperienceTimeline from './components/ExperienceTimeline';
import Awards from './components/Awards';
import EducationSection from './components/Education';
import LanguageSkillsSection from './components/LanguageSkills';
import SkillsSection from './components/Skills';
import ContactSection from './components/Contacts';
import OtherSkillsSection from './components/OtherSkills';
import DigitalSkillsSection from './components/DigitalSkills';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import RecognitionsSection from './components/Recognitions';
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <ExperienceTimeline />
      <Awards />
      <RecognitionsSection />
      <EducationSection />
      <LanguageSkillsSection />
      <SkillsSection />
      <OtherSkillsSection />
      <DigitalSkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
