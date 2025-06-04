import React, { useEffect, useRef } from 'react';
import { SectionHeader } from '../SectionHeader';
import { Award, Book, Coffee, Heart, Music, Palette } from 'lucide-react';

export const PersonalInfo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contentRef.current?.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    'UI/UXデザイン',
    'Figma',
    'Adobe Creative Suite',
    'HTML/CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'レスポンシブデザイン',
  ];

  const interests = [
    {
      icon: <Palette size={24} />,
      label: '絵画',
    },
    {
      icon: <Book size={24} />,
      label: '読書',
    },
    {
      icon: <Coffee size={24} />,
      label: 'カフェ巡り',
    },
    {
      icon: <Music size={24} />,
      label: 'ジャズ',
    },
    {
      icon: <Heart size={24} />,
      label: '猫と過ごす時間',
    },
    {
      icon: <Award size={24} />,
      label: 'デザインの研究',
    },
  ];

  return (
    <section id="personal-info" ref={sectionRef} className="relative">
      <SectionHeader
        title="個人情報"
        subtitle="Personal Information"
        imageUrl="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto px-6 py-12 opacity-0"
      >
        <div className="bg-amber-100/80 p-8 rounded-lg shadow-md border border-amber-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Details */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-6 border-b-2 border-amber-300 pb-2">
                基本情報
              </h3>
              <ul className="space-y-4">
                <li className="flex flex-col md:flex-row">
                  <span className="font-medium text-amber-800 md:w-32">名前:</span>
                  <span className="text-amber-700">山田 太郎</span>
                </li>
                <li className="flex flex-col md:flex-row">
                  <span className="font-medium text-amber-800 md:w-32">生年月日:</span>
                  <span className="text-amber-700">1990年1月1日</span>
                </li>
                <li className="flex flex-col md:flex-row">
                  <span className="font-medium text-amber-800 md:w-32">居住地:</span>
                  <span className="text-amber-700">東京都渋谷区</span>
                </li>
                <li className="flex flex-col md:flex-row">
                  <span className="font-medium text-amber-800 md:w-32">言語:</span>
                  <span className="text-amber-700">日本語（ネイティブ）, 英語（ビジネスレベル）</span>
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-6 border-b-2 border-amber-300 pb-2">
                スキル
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-amber-900 mb-6 border-b-2 border-amber-300 pb-2">
              趣味・興味
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-amber-200/50 rounded-lg"
                >
                  <div className="text-amber-700 mr-3">{interest.icon}</div>
                  <span className="text-amber-800">{interest.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};