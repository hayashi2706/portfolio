import React, { useEffect, useRef } from 'react';
import { SectionHeader } from '../SectionHeader';

export const Affiliations = () => {
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

  const affiliations = [
    {
      name: 'デザイン協会',
      role: '正会員',
      period: '2018年〜現在',
      description:
        'プロのデザイナーのためのコミュニティ。年次展示会やワークショップに積極的に参加。',
    },
    {
      name: 'クリエイティブ・ギルド',
      role: '共同設立者',
      period: '2020年〜現在',
      description:
        'デザイナーと開発者の協力を促進するためのローカルグループ。月例ミートアップを開催。',
    },
    {
      name: 'ウェブデザイナー連盟',
      role: 'メンター',
      period: '2019年〜現在',
      description:
        '新進デザイナーへのメンタリングとキャリアガイダンスを提供。オンラインワークショップを主催。',
    },
  ];

  return (
    <section id="affiliations" ref={sectionRef} className="relative">
      <SectionHeader
        title="所属"
        subtitle="Affiliations"
        imageUrl="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto px-6 py-12 opacity-0"
      >
        <div className="bg-amber-100/80 p-8 rounded-lg shadow-md border border-amber-200">
          <div className="grid grid-cols-1 gap-8">
            {affiliations.map((affiliation, index) => (
              <div
                key={index}
                className="border-b border-amber-300 pb-6 last:border-b-0 last:pb-0"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-amber-900">
                    {affiliation.name}
                  </h3>
                  <div className="text-amber-700 mt-1 md:mt-0 md:ml-4">
                    {affiliation.period}
                  </div>
                </div>
                <div className="text-lg font-medium text-amber-800 mb-2">
                  {affiliation.role}
                </div>
                <p className="text-amber-800">{affiliation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};