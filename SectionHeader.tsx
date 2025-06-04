import React, { useEffect, useRef, useState } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  imageUrl,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="relative h-80 mb-12 overflow-hidden"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-amber-950/40"></div>
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center text-center p-6 transition-all duration-1000 ${
          isVisible
            ? 'opacity-100 transform-none'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-amber-50 mb-4 drop-shadow-lg">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-amber-100 max-w-2xl drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div>
    </div>
  );
};