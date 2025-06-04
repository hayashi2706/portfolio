import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 'biography', label: '経歴' },
    { id: 'cat-diary', label: '猫日記' },
    { id: 'affiliations', label: '所属' },
    { id: 'personal-info', label: '個人情報' },
    { id: 'contact', label: 'Contact Me' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 lg:hidden bg-amber-800 text-amber-50 p-2 rounded-md shadow-md"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Sidebar */}
      <nav className="fixed top-0 left-0 h-full w-64 bg-amber-900 text-amber-50 shadow-xl hidden lg:block z-40">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-amber-800">
            <h1 className="text-2xl font-bold text-amber-50">ポートフォリオ</h1>
          </div>
          <ul className="flex-1 py-4">
            {navItems.map((item) => (
              <li key={item.id} className="mb-2">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-6 py-3 transition-colors duration-200 relative ${
                    activeSection === item.id
                      ? 'bg-amber-800 text-amber-50'
                      : 'hover:bg-amber-800/50'
                  }`}
                >
                  {activeSection === item.id && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400"></span>
                  )}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="p-6 border-t border-amber-800 text-sm text-amber-300">
            © 2025 All Rights Reserved
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-amber-900 z-40 transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-amber-800">
            <h1 className="text-2xl font-bold text-amber-50">ポートフォリオ</h1>
          </div>
          <ul className="flex-1 py-4">
            {navItems.map((item) => (
              <li key={item.id} className="mb-2">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-6 py-3 transition-colors duration-200 relative ${
                    activeSection === item.id
                      ? 'bg-amber-800 text-amber-50'
                      : 'hover:bg-amber-800/50'
                  }`}
                >
                  {activeSection === item.id && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400"></span>
                  )}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="p-6 border-t border-amber-800 text-sm text-amber-300">
            © 2025 All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};