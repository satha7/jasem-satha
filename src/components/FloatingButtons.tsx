import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { handleCallConversion } from '../lib/gtag';

export default function FloatingButtons() {
  const transition = {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  };

  return (
    <div className="fixed bottom-6 left-4 z-[9999] flex flex-col gap-4 md:bottom-8 md:left-8">
      {/* WhatsApp Button */}
      <motion.div
        whileHover={{ x: 4, y: 4 }}
        whileTap={{ scale: 0.98 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-[#a6a6a6] rounded-xl translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-4 rounded-xl bg-[#10d361] p-3 px-6 text-white shadow-xl min-w-[220px]"
          id="whatsapp-float"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
            <MessageCircle size={32} fill="white" className="text-white" />
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] font-bold opacity-90 leading-tight">تراسل معنا</span>
            <span className="text-2xl font-black leading-tight">واتساب الآن</span>
          </div>
        </a>
      </motion.div>
      
      {/* Phone Button */}
      <motion.div
        whileHover={{ x: 4, y: 4 }}
        whileTap={{ scale: 0.98 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-[#a6a6a6] rounded-xl translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          onClick={(e) => {
            e.preventDefault();
            handleCallConversion(`tel:${CONTACT_INFO.phone}`);
          }}
          className="relative flex items-center gap-4 rounded-xl bg-[#0f172a] p-3 px-6 text-white shadow-xl min-w-[220px]"
          id="phone-float"
        >
          <div className="flex h-12 w-12 items-center justify-center">
            <Phone size={32} className="text-[#ffb800]" fill="#ffb800" />
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] font-bold text-[#ffb800] leading-tight">متاحون 24/7</span>
            <span className="text-2xl font-black text-[#ffb800] leading-tight">اتصل بنا فوراً</span>
          </div>
        </a>
      </motion.div>
    </div>
  );
}
