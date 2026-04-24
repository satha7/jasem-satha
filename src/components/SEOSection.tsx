import { motion } from 'motion/react';
import { RIYADH_REGIONS } from '../constants';

export default function SEOSection() {
  return (
    <section className="bg-background py-16 px-4" id="seo-neighborhoods">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-black text-white md:text-5xl">
          أحياء الرياض التي نخدمها <span className="text-brand">24/7</span>
        </h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {RIYADH_REGIONS.map((region, idx) => (
            <motion.div
              key={idx}
              id={`region-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bento-card"
            >
              <h3 className="mb-4 flex items-center gap-2 border-b border-slate-800 pb-3 text-lg font-bold text-brand">
                <span className="h-2 w-2 rounded-full bg-brand"></span>
                {region.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {region.neighborhoods.map((hood, hIdx) => (
                  <span
                    key={hIdx}
                    className="rounded-lg bg-surface-lighter px-2.5 py-1.5 text-[11px] font-medium text-slate-300 border border-slate-700/50 transition-colors hover:border-brand hover:text-white"
                  >
                    سطحة {hood}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2.5rem] bg-surface-lighter p-8 border border-slate-700/50">
            <h4 className="mb-4 font-black text-white text-xl">لماذا تختار سطحة الرياض الخاصة بنا؟</h4>
            <p className="leading-relaxed text-slate-400 text-sm">
              نحن نوفر خدمات السطحة في جميع أنحاء الرياض بأسرع وقت ممكن. سواء كنت تبحث عن 
              <strong className="text-brand mx-1">سطحة هيدروليك</strong> 
              أو 
              <strong className="text-brand mx-1">سطحة تقدير</strong>، 
              فنحن خيارك الأول. محركات بحث جوجل تتعرف علينا من خلال تواجدنا في كل حي مثل 
              حي العقيق وحي النرجس وحي النسيم وغيرها. نحن نلتزم بسياسات جوجل الإعلانية ونوفر تجربة مستخدم واضحة وسريعة.
            </p>
          </div>
          
          <div className="rounded-[2.5rem] bg-gradient-to-r from-slate-900 to-slate-950 p-8 border border-slate-800 flex flex-col justify-center">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-4">SEO Keywords & Search Visibility</p>
            <div className="flex flex-wrap gap-3">
               {RIYADH_REGIONS.flatMap(r => r.keywords).map((kw, kIdx) => (
                 <span key={kIdx} className="text-[10px] bg-slate-800/50 text-slate-500 px-2 py-1 rounded border border-slate-800">
                   #{kw.replace(/\s+/g, '_')}
                 </span>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
