import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-20 px-6 font-sans text-right" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <motion.a 
          href="/"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 text-brand mb-10 hover:underline"
        >
          <ArrowRight size={20} />
          <span>العودة للرئيسية</span>
        </motion.a>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/50 p-8 md:p-12 rounded-[2rem] border border-slate-800 backdrop-blur-sm"
        >
          <h1 className="text-4xl font-black text-white mb-8">الشروط والأحكام</h1>
          
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. قبول الشروط</h2>
              <p>باستخدامك لموقعنا وطلبك لخدماتنا، فإنك توافق على الالتزام بالشروط والأحكام الموضحة هنا.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. الخدمات المقدمة</h2>
              <p>نحن نقدم خدمات نقل السيارات (سطحة هيدروليك وعادية) داخل الرياض وخارجها. نحن نبذل قصارى جهدنا لضمان الوصول في الوقت المحدد ونقل السيارة بأمان تام.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. مسؤولية العميل</h2>
              <p>يتحمل العميل مسؤولية التأكد من أن السيارة المطلوب نقلها مملوكة له أو لديه تفويض قانوني بنقلها. كما يجب تقديم معلومات دقيقة عن الموقع ونوع العطل.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. الأسعار والدفع</h2>
              <p>يتم الاتفاق على السعر قبل بدء الخدمة بناءً على نوع السطحة والمسافة. يتم الدفع بعد إتمام الخدمة مباشرة بالطرق المتاحة (نقداً أو تحويل).</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. حدود المسؤولية</h2>
              <p>طاقم عملنا مدرب باحترافية، ومع ذلك نحن لا نتحمل المسؤولية عن أي أضرار ناتجة عن عيوب سابقة في السيارة أو ظروف قاهرة خارجة عن إرادتنا أثناء عملية النقل.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. القانون المطبق</h2>
              <p>تخضع هذه الشروط والأحكام للقوانين والأنظمة المعمول بها في المملكة العربية السعودية.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
