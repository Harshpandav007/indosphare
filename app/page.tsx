'use client'
import { AppProvider } from '@/lib/store'
import LoadingScreen from '@/components/LoadingScreen'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import StatsBand from '@/components/StatsBand'
import Products from '@/components/Products'
import WhyUs from '@/components/WhyUs'
import Certifications from '@/components/Certifications'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ProductPanel from '@/components/ProductPanel'
import MissionPage from '@/components/MissionPage'
import LegalModal from '@/components/LegalModal'

export default function HomePage() {
  return (
    <AppProvider>
      <LoadingScreen />
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <StatsBand />
        <Products />
        <WhyUs />
        <Certifications />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ProductPanel />
      <MissionPage />
      <LegalModal type="privacy" />
      <LegalModal type="terms" />
    </AppProvider>
  )
}
