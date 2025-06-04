import React, { useEffect, useState } from 'react';

export const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1600)',
      }}
    >
      <div className="absolute inset-0 bg-amber-950/60"></div>
      <div
        className={`relative z-10 text-center p-6 max-w-3xl transition-all duration-700 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-amber-50 mb-4">
          山田 太郎
        </h1>
        <p className="text-xl md:text-2xl text-amber-100 mb-8">
          ウェブデザイナー・イラストレーター
        </p>
        <div className="inline-block relative">
          <button
            onClick={() => {
              document
                .getElementById('biography')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative z-10 bg-amber-800 hover:bg-amber-700 text-amber-50 px-8 py-3 rounded-md transition-colors duration-300 shadow-lg"
          >
            詳細を見る
          </button>
          <div className="absolute -inset-1 bg-amber-400 rounded-md blur opacity-30"></div>
        </div>
      </div>
    </section>
  );
};