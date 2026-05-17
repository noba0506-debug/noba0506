/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import Menu from './components/Menu';
import Booking from './components/Booking';

export interface SiteContent {
  hero: { title: string; subtitle: string };
  about: { title: string; description: string };
  features: { id: string; title: string; description: string }[];
}

export type View = 'home' | 'menu' | 'booking';

export default function App() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [view, setView] = useState<View>('home');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch('/api/content');
        if (!res.ok) throw new Error('Failed to fetch content');
        const data = await res.json();
        setContent(data);
      } catch (err) {
        console.error(err);
        setError('서비스 준비 중입니다. 잠시 후 다시 시도해 주세요.');
        // Fallback content in case API fails
        setContent({
          hero: { title: "중식의 맛있는 상상,\n예술이 되어\n당신의 미각을 깨우다.", subtitle: "조찬형 셰프의 철학과 정성이 빚어내는 궁극의 중식 미학, 찬형각." },
          about: { title: "The Art of Modern Chinese Cuisine", description: "중식은 불과 향, 그리고 타이밍이 만들어내는 하나의 예술입니다. '찬형각'은 오랜 시간 쌓아온 조찬형 셰프의 노하우와 미학을 바탕으로, 전통 중식의 깊은 깊이에 현대적인 감각을 더한 프리미엄 다이닝을 선보입니다." },
          features: [
            { id: "philosophy", title: "Chef’s Philosophy", description: "조찬형 셰프가 식재료 선정부터 레시피 개발까지 모든 과정을 직접 총괄하여 독창적인 요리를 선보입니다." },
            { id: "dining", title: "Sensory Dining", description: "60평 규모의 모던하고 세련된 인테리어, 프라이빗한 룸에서 아늑하고 품격 있는 다이닝을 즐기실 수 있습니다." },
            { id: "ingredients", title: "Premium Ingredients", description: "타합하지 않는 신선함. 당일 엄선된 최고의 재료만을 사용하여 요리의 깊이와 풍미를 극대화합니다." }
          ]
        });
      }
    };

    fetchContent();
  }, []);

  const handleUpdate = (newContent: SiteContent) => {
    setContent(newContent);
  };

  const handleViewChange = (newView: View) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!content) return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-brand-purple font-serif italic text-2xl">
      <div className="animate-pulse mb-4">찬형각</div>
      {error && <div className="text-white/40 text-xs not-italic font-sans">{error}</div>}
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-black text-white relative overflow-hidden">
      <Header 
        onAdminToggle={() => setIsAdmin(!isAdmin)} 
        isAdmin={isAdmin} 
        onViewChange={handleViewChange}
        currentView={view}
      />
      
      <AnimatePresence mode="wait">
        {isAdmin ? (
          <motion.div
            key="admin"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-24 pb-12 px-4 md:px-8 max-w-4xl mx-auto"
          >
            <AdminPanel content={content} onUpdate={handleUpdate} />
          </motion.div>
        ) : view === 'menu' ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          >
            <Menu onBack={() => setView('home')} />
            <Footer />
          </motion.div>
        ) : view === 'booking' ? (
          <motion.div
            key="booking"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Booking onBack={() => setView('home')} />
            <Footer />
          </motion.div>
        ) : (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero content={content.hero} onMenuClick={() => setView('menu')} />
            <About content={content.about} />
            <Features features={content.features} />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Decorative vertical line (Luxury Recipe 12) */}
      <div className="fixed left-8 top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block" />
      <div className="fixed right-8 top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block" />
    </div>
  );
}
