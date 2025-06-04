import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Biography } from './components/sections/Biography';
import { CatDiary } from './components/sections/CatDiary';
import { Affiliations } from './components/sections/Affiliations';
import { PersonalInfo } from './components/sections/PersonalInfo';
import { Contact } from './components/sections/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-sans bg-amber-50 text-brown-900 min-h-screen">
      <NavBar />
      <main className="relative lg:ml-64">
        <Hero />
        <Biography />
        <CatDiary />
        <Affiliations />
        <PersonalInfo />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;