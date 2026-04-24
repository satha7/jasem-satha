import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function FloatingButtons() {
  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
    boxShadow: [
      "0 0 0px 0px rgba(245, 158, 11, 0)",
      "0 0 30px 15px rgba(245, 158, 11, 0.4)",
      "0 0 0px 0px rgba(245, 158, 11, 0)"
    ]
  };

  const whatsappPulse = {
    ...pulseAnimation,
    boxShadow: [
      "0 0 0px 0px rgba(37, 211, 102, 0)",
      "0 0 30px 15px rgba(37, 211, 102, 0.4)",
      "0 0 0px 0px rgba(37, 211, 102, 0)"
    ]
  };

  const transition = {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  };

  return (
    <div className="fixed bottom-8 left-6 z-[9999] flex flex-col gap-8 md:bottom-10 md:left-10">
      {/* WhatsApp Button */}
      <div className="flex flex-col items-center gap-1">
        <motion.span 
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={transition}
          className="text-xs font-black text-[#25D366] bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-md"
        >
          واتساب
        </motion.span>
        <motion.a
          animate={whatsappPulse}
          transition={transition}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl"
          id="whatsapp-float"
        >
          <MessageCircle size={30} fill="currentColor" className="text-white fill-white" />
        </motion.a>
      </div>
      
      {/* Phone Button */}
      <div className="flex flex-col items-center gap-1">
        <motion.span 
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={transition}
          className="text-xs font-black text-brand bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-md"
        >
          اتصال سريع
        </motion.span>
        <motion.a
          animate={pulseAnimation}
          transition={transition}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-slate-950 shadow-2xl"
          id="phone-float"
        >
          <Phone size={34} fill="currentColor" />
        </motion.a>
      </div>
    </div>
  );
}
