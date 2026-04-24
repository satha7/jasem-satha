import { motion } from 'motion/react';
import { Truck, ShieldCheck, FileCheck, Map } from 'lucide-react';
import { SPECIAL_SERVICES } from '../constants';

export default function Services() {
  const icons = [Truck, Truck, FileCheck, Map];
  
  return (
    <section className="bg-background py-12 px-4" id="services">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl font-black text-white md:text-5xl">
            خدماتنا <span className="text-brand">المتكاملة</span>
          </h2>
          <p className="mt-4 text-slate-400">نوفر كافة أنواع نقل السيارات والمساعدة على الطريق بأعلى المعايير.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {SPECIAL_SERVICES.map((service, i) => {
            const Icon = icons[i] || ShieldCheck;
            return (
              <motion.div
                key={i}
                id={`service-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-full rounded-[2.5rem] border border-slate-800 bg-surface p-10 transition-all hover:bg-slate-900"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-brand text-slate-950 shadow-2xl shadow-brand/40 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={40} />
                </div>
                <h3 className="mb-4 text-3xl font-black text-white">{service.title}</h3>
                <p className="text-lg leading-relaxed text-slate-400">{service.description}</p>
                
                <div className="absolute top-10 left-10 opacity-5">
                  <span className="text-[120px] font-black text-brand leading-none">0{i + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
