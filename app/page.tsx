'use client'
// app/page.tsx
// Main page — wires all sections together

import { useState } from 'react'
import { useReveal } from '@/lib/useReveal'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import TickerStrip from '@/components/TickerStrip'
import ServicesSection from '@/components/ServicesSection'
import PackagesSection from '@/components/PackagesSection'
import PortalSection from '@/components/PortalSection'
import TrustStrip from '@/components/TrustStrip'
import Footer from '@/components/Footer'
import PaymentModal from '@/components/PaymentModal'

export default function HomePage() {
  useReveal()

  const [modal, setModal] = useState<{ open: boolean; name: string; price: string }>({
    open: false,
    name: '',
    price: '',
  })

  const openModal = (name: string, price: string) => setModal({ open: true, name, price })
  const closeModal = () => setModal(prev => ({ ...prev, open: false }))

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar onBookClick={() => openModal('Nuru Essentials Odogwu', '₦85,000/month')} />

      <HeroSection
        onPackagesClick={() => scrollToSection('packages')}
      />

      <TickerStrip />

      <ServicesSection />

      <PackagesSection onSelect={(name, price) => openModal(name, price)} />

      <PortalSection />

      <TrustStrip />

      <Footer />

      <PaymentModal
        isOpen={modal.open}
        onClose={closeModal}
        packageName={modal.name}
        packagePrice={modal.price}
      />
    </>
  )
}
