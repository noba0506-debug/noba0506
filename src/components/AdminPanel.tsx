import React, { useState } from 'react';
import { SiteContent } from '../App';
import { Save, RefreshCcw } from 'lucide-react';

interface AdminPanelProps {
  content: SiteContent;
  onUpdate: (content: SiteContent) => void;
}

export default function AdminPanel({ content, onUpdate }: AdminPanelProps) {
  const [formData, setFormData] = useState<SiteContent>(content);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      onUpdate(data.content);
      alert('Content saved successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to save content');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-brand-gray/50 border border-white/10 p-8 rounded-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-2xl font-serif mb-2">Admin Dashboard</h2>
          <p className="text-xs text-white/40 uppercase tracking-widest">Manage Site Content & CMS</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60"
        >
          <RefreshCcw size={18} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-purple border-b border-brand-purple/20 pb-2">Hero Section</h3>
          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-50">Title (use \n for line break)</label>
              <textarea 
                className="w-full bg-brand-black/50 border border-white/10 p-4 rounded-lg focus:border-brand-purple outline-none transition-all min-h-[100px]"
                value={formData.hero.title}
                onChange={e => setFormData({ ...formData, hero: { ...formData.hero, title: e.target.value } })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-50">Subtitle</label>
              <input 
                type="text"
                className="w-full bg-brand-black/50 border border-white/10 p-4 rounded-lg focus:border-brand-purple outline-none transition-all"
                value={formData.hero.subtitle}
                onChange={e => setFormData({ ...formData, hero: { ...formData.hero, subtitle: e.target.value } })}
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-purple border-b border-brand-purple/20 pb-2">About Section</h3>
          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-50">Title</label>
              <input 
                type="text"
                className="w-full bg-brand-black/50 border border-white/10 p-4 rounded-lg focus:border-brand-purple outline-none transition-all"
                value={formData.about.title}
                onChange={e => setFormData({ ...formData, about: { ...formData.about, title: e.target.value } })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-50">Description</label>
              <textarea 
                className="w-full bg-brand-black/50 border border-white/10 p-4 rounded-lg focus:border-brand-purple outline-none transition-all min-h-[150px] leading-relaxed"
                value={formData.about.description}
                onChange={e => setFormData({ ...formData, about: { ...formData.about, description: e.target.value } })}
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-purple border-b border-brand-purple/20 pb-2">Key Features</h3>
          <div className="grid gap-8">
            {formData.features.map((feature, idx) => (
              <div key={feature.id} className="p-6 bg-brand-black/30 rounded-xl border border-white/5 space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] uppercase tracking-widest opacity-30 font-mono">Feature 0{idx + 1}</span>
                  <span className="text-[10px] bg-brand-purple/20 text-brand-purple px-2 py-1 rounded uppercase tracking-widest font-bold">Editable</span>
                </div>
                <input 
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 pb-2 focus:border-brand-purple outline-none transition-all font-serif text-xl"
                  value={feature.title}
                  onChange={e => {
                    const newFeatures = [...formData.features];
                    newFeatures[idx].title = e.target.value;
                    setFormData({ ...formData, features: newFeatures });
                  }}
                />
                <textarea 
                  className="w-full bg-transparent p-0 border-none outline-none focus:ring-0 text-white/50 text-sm leading-relaxed"
                  value={feature.description}
                  onChange={e => {
                    const newFeatures = [...formData.features];
                    newFeatures[idx].description = e.target.value;
                    setFormData({ ...formData, features: newFeatures });
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 sticky bottom-0 bg-brand-gray/50 py-4 -mx-8 px-8 border-t border-white/10 flex justify-end backdrop-blur-md">
          <button 
            type="submit"
            disabled={saving}
            className="flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-deep px-10 py-4 rounded-full text-xs uppercase tracking-[.2em] font-bold transition-all shadow-xl shadow-brand-purple/20 disabled:opacity-50"
          >
            {saving ? <RefreshCcw className="animate-spin" size={16} /> : <Save size={16} />}
            {saving ? 'Saving Changes...' : 'Save All Content'}
          </button>
        </div>
      </form>
    </div>
  );
}
