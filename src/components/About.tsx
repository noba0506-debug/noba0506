import React from 'react';
import { motion } from 'motion/react';
import aboutImg from '../assets/images/wok_fire_vibrant_no_person_1778990817141.png';

interface AboutProps {
  content: { title: string; description: string };
}

export default function About({ content }: AboutProps) {
  return (
    <section className="py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-brand-gray overflow-hidden">
             <img 
              src={aboutImg} 
              alt="The Essence of Wok Hei" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Subtle vertical text (Luxury Recipe 12) */}
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[0.4em] font-mono opacity-30 whitespace-nowrap hidden md:block">
            SINCERITY • PHILOSOPHY • ARTISTRY
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-purple mb-6 opacity-80">
            About Chan-hyeong-gak
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight">
            {content.title}
          </h3>
          <p className="text-lg text-white/70 leading-relaxed mb-12 whitespace-pre-line font-light">
            {content.description}
          </p>
          
          <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
            <div>
              <span className="block font-serif text-3xl mb-2 italic">60+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Square Space (py)</span>
            </div>
            <div>
              <span className="block font-serif text-3xl mb-2 italic">15+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Chef's Heritage</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
