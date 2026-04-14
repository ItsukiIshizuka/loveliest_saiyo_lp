import Header from '@/components/Header'
import Hero from '@/components/Hero'
import JobOpening from '@/components/JobOpening'
import Benefits from '@/components/Benefits'
import MediaSection from '@/components/MediaSection'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Access from '@/components/Access'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

export default function Home() {
  return (
    <>
      {/* スクロールリビールの Intersection Observer を起動 */}
      <ScrollRevealInit />

      <Header />

      <main id="main-content">
        <Hero />
        <JobOpening />
        <Benefits />
        <MediaSection />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Access />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
