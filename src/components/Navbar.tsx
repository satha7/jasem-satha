import { motion } from 'motion/react';
import { Truck, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-slate-950 shadow-lg shadow-brand/20">
              <Truck size={28} />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-brand md:text-2xl">
                سطحة <span className="text-white">الرياض</span>
              </h1>
              <p className="text-[10px] text-slate-400 md:text-xs">نصلك أينما كنت في أسرع وقت - خدمة 24 ساعة</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
              <a href="#hero" className="hover:text-brand transition-colors">الرئيسية</a>
              <a href="#services" className="hover:text-brand transition-colors">خدماتنا</a>
              <a href="#seo-neighborhoods" className="hover:text-brand transition-colors">المناطق</a>
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
