/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import SearchBlock from './components/SearchBlock';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30">
      <Header />
      <Hero />
      <SearchBlock />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}
