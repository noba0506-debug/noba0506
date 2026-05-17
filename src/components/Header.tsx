import React from 'react';
import { motion } from 'motion/react';
import { Settings } from 'lucide-react';
import { View } from '../App';

interface HeaderProps {
  onAdminToggle: () => void;
  isAdmin: boolean;
  onViewChange: (view: View) => void;
  currentView: View;
}

export default function Header({ onAdminToggle, isAdmin, onViewChange, currentView }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-brand-black/80 backdrop-blur-md border-b border-white/5">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => onViewChange('home')}
      >
        <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] relative flex items-center justify-center">
          <img 
            src="/src/assets/images/chan_hyeong_gak_logo_v3_1779010164070.png" 
            alt="찬형각 로고"
            className="w-full h-full object-contain mix-blend-screen"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-traditional text-3xl md:text-4xl tracking-widest text-white leading-none">찬형각</span>
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase opacity-40 mt-2">中華料理</span>
        </div>
      </motion.div>
      
      <nav className="flex items-center gap-8">
        <ul className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
          <li 
            onClick={() => onViewChange('home')}
            className={`group transition-colors cursor-pointer w-16 text-center ${currentView === 'home' ? 'text-brand-purple opacity-100' : 'opacity-60 hover:text-brand-purple'}`}
          >
            <span className="block group-hover:hidden">Home</span>
            <span className="hidden group-hover:block text-[12px] tracking-normal font-sans">홈</span>
          </li>
          <li 
            onClick={() => onViewChange('menu')}
            className={`group transition-colors cursor-pointer w-16 text-center ${currentView === 'menu' ? 'text-brand-purple opacity-100' : 'opacity-60 hover:text-brand-purple'}`}
          >
            <span className="block group-hover:hidden">Menu</span>
            <span className="hidden group-hover:block text-[12px] tracking-normal font-sans">메뉴</span>
          </li>
          <li className="group opacity-60 hover:text-brand-purple transition-colors cursor-pointer w-16 text-center">
            <span className="block group-hover:hidden">Space</span>
            <span className="hidden group-hover:block text-[12px] tracking-normal font-sans">공간</span>
          </li>
          <li className="group opacity-60 hover:text-brand-purple transition-colors cursor-pointer w-16 text-center">
            <span className="block group-hover:hidden">Inquiry</span>
            <span className="hidden group-hover:block text-[12px] tracking-normal font-sans">문의</span>
          </li>
        </ul>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onAdminToggle}
            className={`p-2 rounded-full transition-all duration-300 ${isAdmin ? 'bg-brand-purple text-white' : 'bg-white/5 hover:bg-brand-purple/20 text-white/60'}`}
          >
            <Settings size={18} />
          </button>
          <button 
            onClick={() => onViewChange('booking')}
            className={`group px-6 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all shadow-lg shadow-brand-purple/20 min-w-[120px] ${currentView === 'booking' ? 'bg-brand-purple-deep text-white shadow-none' : 'bg-brand-purple hover:bg-brand-purple-deep text-white'}`}
          >
            <span className="block group-hover:hidden">Booking</span>
            <span className="hidden group-hover:block tracking-normal font-sans">예약하기</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
