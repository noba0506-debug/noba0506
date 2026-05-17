import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import imgJeongabok from '../assets/images/jeongabok_premium_hero_v2_1778991027317.png';
import imgJjamppong from '../assets/images/menu_signature_jjamppong_1778992293242.png';
import imgTangsuyuk from '../assets/images/menu_signature_tangsuyuk_1778992310748.png';
import imgYusanseul from '../assets/images/menu_signature_yusanseul_1778992327348.png';

interface MenuProps {
  onBack: () => void;
}

const menuItems = [
  {
    id: 1,
    name: '전가복 (全家福)',
    description: '전복, 해삼, 관자 등 엄선된 해산물을 정성껏 볶아낸 찬형각의 시그니처 보양 요리',
    image: imgJeongabok,
    price: '₩120,000'
  },
  {
    id: 2,
    name: '삼선 짬뽕',
    description: '신선한 해산물이 듬뿍 들어간 깊고 칼칼한 맛의 명품 짬뽕',
    image: imgJjamppong,
    price: '₩25,000'
  },
  {
    id: 3,
    name: '프리미엄 탕수육',
    description: '최상급 한돈을 사용하여 겉은 바삭하고 속은 촉촉한 궁극의 탕수육',
    image: imgTangsuyuk,
    price: '₩55,000'
  },
  {
    id: 4,
    name: '유산슬',
    description: '풍부한 해산물과 고기, 야채가 어우러진 담백하고 고소한 풍미의 일품 요리',
    image: imgYusanseul,
    price: '₩65,000'
  }
];

export default function Menu({ onBack }: MenuProps) {
  return (
    <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12 flex items-center gap-4 cursor-pointer group"
        onClick={onBack}
      >
        <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform text-brand-purple" />
        <span className="text-sm uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity">Back to Main</span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <h2 className="font-traditional text-5xl md:text-7xl mb-6 text-brand-yellow">시그니처 메뉴</h2>
        <div className="w-24 h-[1px] bg-brand-purple mx-auto mb-8" />
        <p className="font-sans text-lg opacity-60 max-w-2xl mx-auto leading-relaxed">
          조찬형 셰프가 엄선한 최고의 식재료와 수년간의 철학이 담긴 찬형각의 대표 요리들을 소개합니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {menuItems.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[16/9] overflow-hidden mb-8 border border-white/5 bg-brand-gray/50">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-md px-4 py-2 border border-white/10 text-brand-yellow font-serif">
                {item.price}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-traditional text-3xl text-white group-hover:text-brand-yellow transition-colors duration-300">
                {item.name}
              </h3>
              <div className="w-12 h-[1px] bg-brand-purple/30 group-hover:w-20 transition-all duration-500" />
              <p className="text-white/60 font-light leading-relaxed max-w-lg mt-2">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 text-center border-t border-white/5 pt-20"
      >
        <p className="text-brand-purple/60 text-sm uppercase tracking-[0.3em] font-medium mb-12">More dishes available at the restaurant</p>
        <button 
          onClick={onBack}
          className="border border-brand-purple px-12 py-4 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-brand-purple transition-all shadow-lg shadow-brand-purple/10"
        >
          Explore Main
        </button>
      </motion.div>
    </div>
  );
}
