import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface FeaturesProps {
  features: { id: string; title: string; description: string }[];
}

export default function Features({ features }: FeaturesProps) {
  const getIcon = (id: string) => {
    switch(id) {
      case 'philosophy': return <Sparkles className="text-brand-purple" size={32} />;
      case 'dining': return <Building2 className="text-brand-purple" size={32} />;
      case 'ingredients': return <ShieldCheck className="text-brand-purple" size={32} />;
      default: return null;
    }
  };

  return (
    <section className="py-32 px-8 bg-brand-gray/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
                {getIcon(feature.id)}
              </div>
              
              <h4 className="font-serif text-2xl mb-6 flex items-center">
                <span className="text-brand-purple/40 text-xs mr-4 font-mono">0{idx + 1}</span>
                {feature.title}
              </h4>
              <p className="text-white/60 leading-relaxed font-light">
                {feature.description}
              </p>
              
              <div className="mt-8 h-[1px] w-0 bg-brand-purple group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
