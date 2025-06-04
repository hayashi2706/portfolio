import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '../SectionHeader';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative">
      <SectionHeader
        title="Contact Me"
        subtitle="お問い合わせ"
        imageUrl="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto px-6 py-12 opacity-0"
      >
        <div className="bg-amber-100/80 p-8 rounded-lg shadow-md border border-amber-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-6 border-b-2 border-amber-300 pb-2">
                連絡先情報
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-amber-200 p-2 rounded-full mr-4">
                    <Mail size={20} className="text-amber-800" />
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800">メール</h4>
                    <a
                      href="mailto:contact@example.com"
                      className="text-amber-700 hover:text-amber-900 transition-colors"
                    >
                      contact@example.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-200 p-2 rounded-full mr-4">
                    <Phone size={20} className="text-amber-800" />
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800">電話番号</h4>
                    <a
                      href="tel:+81-3-1234-5678"
                      className="text-amber-700 hover:text-amber-900 transition-colors"
                    >
                      03-1234-5678
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-200 p-2 rounded-full mr-4">
                    <MapPin size={20} className="text-amber-800" />
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800">所在地</h4>
                    <p className="text-amber-700">
                      〒150-0002 東京都渋谷区渋谷1-1-1
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-6 border-b-2 border-amber-300 pb-2">
                お問い合わせフォーム
              </h3>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md">
                  <p className="font-medium">
                    ありがとうございます。メッセージを受け付けました。
                  </p>
                  <p className="mt-2">
                    できるだけ早くご連絡いたします。
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-green-700 underline"
                  >
                    新しいメッセージを送信する
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-amber-800 font-medium mb-1"
                    >
                      お名前
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-amber-800 font-medium mb-1"
                    >
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-amber-800 font-medium mb-1"
                    >
                      メッセージ
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-amber-800 hover:bg-amber-700 text-amber-50 px-6 py-2 rounded-md transition-colors duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};