import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Truck, Phone, ChevronDown } from 'lucide-react';
import { CONTACT_INFO, SPECIAL_SERVICES, RIYADH_REGIONS } from '../constants';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const NavDropdown = ({ title, items, idPrefix, type }: { title: string, items: any[], idPrefix: string, type: 'services' | 'regions' }) => (
    <div 
      className="relative group"
      onMouseEnter={() => setActiveDropdown(type)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button className="flex items-center gap-1 hover:text-brand transition-colors py-8 cursor-default">
        {title}
        <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === type ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {activeDropdown === type && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {items.map((item, idx) => (
                <a
                  key={idx}
                  href={`#${idPrefix}-${idx}`}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800 transition-colors group/item"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span className="text-sm font-bold text-slate-200 group-hover/item:text-brand transition-colors">
                    {item.title}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-700 group-hover/item:bg-brand transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-slate-950 shadow-lg shadow-brand/20">
              <Truck size={28} />
            </div>
            <a href="/">
              <div>
                <h1 className="text-xl font-black tracking-tight text-brand md:text-2xl">
                  سطحة <span className="text-white">الرياض</span>
                </h1>
                <p className="text-[10px] text-slate-400 md:text-xs">نصلك أينما كنت في أسرع وقت - خدمة 24 ساعة</p>
              </div>
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
              <a href="#hero" className="hover:text-brand transition-colors py-8">الرئيسية</a>
              <NavDropdown title="خدماتنا" items={SPECIAL_SERVICES} idPrefix="service" type="services" />
              <NavDropdown title="المناطق" items={RIYADH_REGIONS} idPrefix="region" type="regions" />
            </div>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-brand/20 transition-all hover:bg-brand/90"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">اتصل الآن</span>
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
}
