import React, { useEffect, useRef } from 'react';
import { SectionHeader } from '../SectionHeader';

export const Biography = () => {
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

  return (
    <section id="biography" ref={sectionRef} className="relative">
      <SectionHeader
        title="経歴"
        subtitle="Biography"
        imageUrl="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto px-6 py-12 opacity-0"
      >
        <div className="bg-amber-100/80 p-8 rounded-lg shadow-md border border-amber-200">
          <h3 className="text-2xl font-semibold text-amber-900 mb-6 border-b-2 border-amber-300 pb-2">
            プロフェッショナルな経験
          </h3>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center mb-4">
              <span className="text-amber-800 font-semibold md:w-32">2020 - 現在</span>
              <div>
                <h4 className="text-xl font-medium text-amber-900">シニアウェブデザイナー</h4>
                <p className="text-amber-700">デザインスタジオ株式会社</p>
              </div>
            </div>
            <p className="text-amber-800 ml-0 md:ml-32">
              UIデザインとフロントエンド開発を担当。クライアントのブランドを強化するモダンでレスポンシブなウェブサイトを制作。
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center mb-4">
              <span className="text-amber-800 font-semibold md:w-32">2015 - 2020</span>
              <div>
                <h4 className="text-xl font-medium text-amber-900">グラフィックデザイナー</h4>
                <p className="text-amber-700">クリエイティブ広告エージェンシー</p>
              </div>
            </div>
            <p className="text-amber-800 ml-0 md:ml-32">
              印刷物やデジタル広告のデザインを担当。ブランドガイドラインに基づいた視覚的に魅力的なコンテンツの制作。
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-amber-900 mb-6 border-b-2 border-amber-300 pb-2 mt-12">
            教育
          </h3>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center mb-4">
              <span className="text-amber-800 font-semibold md:w-32">2011 - 2015</span>
              <div>
                <h4 className="text-xl font-medium text-amber-900">美術大学</h4>
                <p className="text-amber-700">グラフィックデザイン学部</p>
              </div>
            </div>
            <p className="text-amber-800 ml-0 md:ml-32">
              視覚コミュニケーションと現代デザイン理論に重点を置いた学士号を取得。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};