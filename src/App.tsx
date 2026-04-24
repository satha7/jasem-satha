/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SEOSection from './components/SEOSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SEOSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
