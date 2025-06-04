import React, { useEffect, useRef } from 'react';
import { SectionHeader } from '../SectionHeader';

export const CatDiary = () => {
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

  const diaryEntries = [
    {
      date: '2025年5月15日',
      title: 'モモの誕生日',
      content:
        '今日はモモの3歳の誕生日。特別な猫用ケーキを作って、新しいおもちゃをプレゼントした。とても喜んでいた様子で、一日中遊んでいた。',
      image: 'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      date: '2025年4月28日',
      title: '窓辺の日光浴',
      content:
        'モモは今日も窓辺で日光浴を楽しんでいた。日差しが差し込む窓際は彼のお気に入りの場所。穏やかな午後のひとときを過ごした。',
      image: 'https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      date: '2025年4月10日',
      title: '新しいキャットタワー',
      content:
        '新しいキャットタワーを購入。最初は警戒していたモモだが、すぐに気に入った様子で、一番高い場所でくつろいでいる。',
      image: 'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  ];

  return (
    <section id="cat-diary" ref={sectionRef} className="relative">
      <SectionHeader
        title="猫日記"
        subtitle="Cat Diary"
        imageUrl="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto px-6 py-12 opacity-0"
      >
        <div className="space-y-10">
          {diaryEntries.map((entry, index) => (
            <div
              key={index}
              className="bg-amber-100/80 rounded-lg overflow-hidden shadow-md border border-amber-200"
            >
              <div className="md:flex">
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="text-amber-700 mb-2">{entry.date}</div>
                  <h3 className="text-2xl font-semibold text-amber-900 mb-4">
                    {entry.title}
                  </h3>
                  <p className="text-amber-800">{entry.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};