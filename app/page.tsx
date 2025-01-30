import HeroSection from '@/components/splash/hero-section'
import FeaturesSection from '@/components/splash/features-section'
import PricingSection from '@/components/splash/pricing-section'
import WhoWeAreSection from '@/components/splash/who-we-are-section'
import CTASection from '@/components/splash/cta-section'
import FooterSection from '@/components/splash/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <WhoWeAreSection />
      <PricingSection />
      <CTASection />
      <FooterSection />
    </main>
  )
} 