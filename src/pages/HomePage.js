import { Header } from '@/components/Header';
import { Section } from '@/components/Section';
import { Footer } from '@/components/Footer';
import { MyWorks } from '@/components/MyWorks';
import { AboutMe } from '@/components/AboutMe';
export default function HomePage() {
  return (
    <main>
      <Header />
      <MyWorks />
      <AboutMe />
      <Section title={'Skills'} />
      <Section title={'Testimonials'} />
      <Section title={'Resume'} />
      <Footer />
    </main>
  );
}
