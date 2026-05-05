import Hero from '@/components/Hero';
import TrustSection from '@/components/trustSection';
import Courses from '@/components/Courses';
import SuccessSection from '@/components/testimonial';
import GlobalAlliance from '@/components/affilation';
import CallToAction from '@/components/CallToAction';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <Courses />
      <SuccessSection />
      <GlobalAlliance />
      <CallToAction />
    </>
  );
}