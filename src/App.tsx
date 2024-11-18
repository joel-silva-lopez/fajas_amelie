import { Component } from 'solid-js';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: Component = () => {
  return (
    <div class="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;