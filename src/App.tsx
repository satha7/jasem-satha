/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SEOSection from './components/SEOSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { CONTACT_INFO } from './constants';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <SEOSection />
      </main>
      <FloatingButtons />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "سطحة الرياض - نقل سيارات سريع",
          "description": "أسرع خدمة سطحة في الرياض لنقل السيارات، سطحات هيدروليك وعادية متوفرة 24 ساعة.",
          "telephone": CONTACT_INFO.phone,
          "areaServed": "Riyadh, Saudi Arabia",
          "url": "https://riyadh-tow.sa",
          "image": "https://i.postimg.cc/SsrpCX0m/stht-hydrwlyk-fy-altryq.png",
          "priceRange": "$$"
        })}
      </script>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans antialiased text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
