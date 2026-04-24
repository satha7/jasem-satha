import { motion } from 'motion/react';
import { Phone, ChevronLeft, MapPin, Truck } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" id="hero">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Large Bento Hero Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative col-span-1 flex flex-col justify-end overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 shadow-2xl lg:col-span-2 lg:h-[480px]"
        >
          {/* Main Hero Image */}
          <img 
            src="https://i.postimg.cc/SsrpCX0m/stht-hydrwlyk-fy-altryq.png" 
            alt="سطحة هيدروليك في الطريق الرياض" 
            className="absolute inset-0 h-full w-full object-cover object-center opacity-70 transition-opacity duration-300 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <div className="relative z-10">
            <div className="mb-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-brand px-4 py-1 text-xs font-black text-slate-900 shadow-lg shadow-brand/20">خبرة 10 سنوات</span>
              <span className="rounded-full bg-white/10 backdrop-blur-md px-4 py-1 text-xs font-black text-white border border-white/20">#سطحة_هيدروليك</span>
            </div>
            
            <h2 className="mb-4 text-4xl font-black leading-tight text-white sm:text-6xl text-shadow-sm">
              أفضل مجموعة سطحات <br /> <span className="text-brand">في الرياض</span>
            </h2>
            
            <p className="mb-8 max-w-xl text-lg font-bold text-slate-200 md:text-xl drop-shadow-md">
              نغطي كافة أحياء الرياض بخدمات الهيدروليك والسطحة العادية. <br className="hidden md:block" />
              فريقنا المتنقل يصلك خلال 10 دقائق بكافة المعدات وبسعر مناسب لك.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-8 py-4 text-xl font-black text-white shadow-xl transition-all"
              >
                <Phone size={24} />
                <span>اتصل الآن: {CONTACT_INFO.phone}</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Small Bento Stats Card */}
        <div className="flex flex-col gap-6">
          <div className="flex-1 rounded-[2rem] border border-slate-800 bg-surface p-8 shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-brand">
              <MapPin size={32} />
            </div>
            <h3 className="mb-2 text-2xl font-black text-white">مجموعة سطحات الرياض</h3>
            <p className="text-slate-400">نحن فريق متكامل نغطي جميع أحياء الرياض بسعر مناسب لك وسرعة استثنائية (10 دقائق).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
