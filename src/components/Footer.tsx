import React from 'react';

export default function Footer() {
  return (
    <footer className="py-24 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
        <div className="md:col-span-2">
          <div className="font-serif text-3xl tracking-widest mb-8">찬형각</div>
          <p className="text-white/40 max-w-sm leading-relaxed text-sm">
            조찬형 셰프의 철학이 담긴 프리미엄 다이닝 공간으로, 
            중식의 전통과 현대를 아우르는 예술적인 경험을 제공합니다.
          </p>
        </div>
        
        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-brand-purple">Contact</h5>
          <ul className="space-y-4 text-white/60 text-sm font-light">
            <li>010-8734-4869</li>
            <li>경기도 안성시 신건지동 17</li>
            <li>@chan_hyeong_gak</li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-brand-purple">Reservation</h5>
          <ul className="space-y-4 text-white/60 text-sm font-light">
            <li>Lunch: 12:00 - 15:00</li>
            <li>Dinner: 18:00 - 22:00</li>
            <li className="text-brand-purple">Break Time: 15:00 - 18:00</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] uppercase tracking-[0.2em] opacity-30">
          © 2026 CHAN-HYEONG-GAK. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] opacity-30">
          <span className="hover:opacity-100 cursor-pointer">Privacy Policy</span>
          <span className="hover:opacity-100 cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
