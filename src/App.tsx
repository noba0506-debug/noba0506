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
  const [isAdmin, setIsAdmin] = useState(false);
  const [view, setView] = useState<View>('home');

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data));
  }, []);

  const handleUpdate = (newContent: SiteContent) => {
    setContent(newContent);
  };

  const handleViewChange = (newView: View) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!content) return <div className="h-screen w-full bg-black flex items-center justify-center text-brand-purple animate-pulse font-serif italic text-2xl">찬형각</div>;

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
