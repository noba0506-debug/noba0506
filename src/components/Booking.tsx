import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Users, Clock, Phone, Mail, User } from 'lucide-react';

interface BookingProps {
  onBack: () => void;
}

export default function Booking({ onBack }: BookingProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 px-8 max-w-2xl mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mb-8 shadow-lg shadow-brand-yellow/20"
        >
          <Calendar className="text-brand-black" size={32} />
        </motion.div>
        <h2 className="font-traditional text-4xl mb-4 text-brand-yellow">예약이 완료되었습니다</h2>
        <p className="opacity-60 mb-12 max-w-md mx-auto leading-relaxed">
          찬형각을 선택해 주셔서 감사합니다. 곧 담당 직원이 확인 전화를 드릴 예정입니다.
        </p>
        <button 
          onClick={onBack}
          className="border border-brand-purple px-12 py-4 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-brand-purple transition-all shadow-lg shadow-brand-purple/10"
        >
          Explore More
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-8 max-w-4xl mx-auto min-h-screen">
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
        className="mb-16 text-center"
      >
        <h2 className="font-traditional text-5xl md:text-7xl mb-6 text-brand-yellow">온라인 예약</h2>
        <div className="w-24 h-[1px] bg-brand-purple mx-auto mb-8" />
        <p className="font-sans text-lg opacity-60 max-w-2xl mx-auto leading-relaxed">
          조찬형 셰프의 찬형각에서 경험하는 궁극의 미식 여행. 정성을 다해 모시겠습니다.
        </p>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-brand-gray/30 p-8 md:p-12 border border-white/5 backdrop-blur-md"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-[10px] uppercase tracking-widest opacity-40 mb-3 ml-1 font-bold">Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={18} />
              <input 
                required
                type="text" 
                placeholder="예약자 성함" 
                className="w-full bg-brand-black/50 border border-white/10 px-12 py-4 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple/30 transition-all font-light"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest opacity-40 mb-3 ml-1 font-bold">Phone</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={18} />
              <input 
                required
                type="tel" 
                placeholder="010-8734-4869" 
                className="w-full bg-brand-black/50 border border-white/10 px-12 py-4 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple/30 transition-all font-light"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest opacity-40 mb-3 ml-1 font-bold">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={18} />
              <input 
                type="email" 
                placeholder="example@email.com" 
                className="w-full bg-brand-black/50 border border-white/10 px-12 py-4 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple/30 transition-all font-light"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-widest opacity-40 mb-3 ml-1 font-bold">Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={18} />
                <input 
                  required
                  type="date" 
                  className="w-full bg-brand-black/50 border border-white/10 pl-12 pr-4 py-4 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple/30 transition-all font-light appearance-none text-white/70"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest opacity-40 mb-3 ml-1 font-bold">Time</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={18} />
                <select 
                  required
                  className="w-full bg-brand-black/50 border border-white/10 pl-12 pr-4 py-4 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple/30 transition-all font-light appearance-none text-white/70"
                >
                  <option value="">시간 선택</option>
                  <option value="12:00">12:00 (Lunch)</option>
                  <option value="13:00">13:00 (Lunch)</option>
                  <option value="18:00">18:00 (Dinner)</option>
                  <option value="19:00">19:00 (Dinner)</option>
                  <option value="20:00">20:00 (Dinner)</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest opacity-40 mb-3 ml-1 font-bold">Guests</label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={18} />
              <select 
                required
                className="w-full bg-brand-black/50 border border-white/10 pl-12 pr-4 py-4 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple/30 transition-all font-light appearance-none text-white/70"
              >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5+">5+ People (단체석)</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest opacity-40 mb-3 ml-1 font-bold">Requests</label>
            <textarea 
              placeholder="특별한 요청 사항이 있으시면 입력해 주세요." 
              rows={3}
              className="w-full bg-brand-black/50 border border-white/10 px-4 py-4 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple/30 transition-all font-light resize-none"
            />
          </div>
        </div>

        <div className="md:col-span-2 pt-6">
          <button 
            type="submit"
            className="w-full bg-brand-purple py-5 rounded-full text-sm uppercase tracking-[0.3em] font-bold hover:bg-brand-purple-deep transition-all shadow-xl shadow-brand-purple/20 relative overflow-hidden group"
          >
            <span className="relative z-10 transition-transform group-hover:scale-105 inline-block">Confirm Reservation</span>
          </button>
          <p className="text-[10px] text-center opacity-30 mt-6 tracking-wider">
            당일 예약의 경우 매장 상황에 따라 제한될 수 있으니 전화 문의 부탁드립니다.
          </p>
        </div>
      </motion.form>
    </div>
  );
}
