/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import SearchBlock from './components/SearchBlock';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 pt-[124px] md:pt-[144px]">
      <Header />
      <Hero />
      <SearchBlock />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}
