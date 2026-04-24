import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-black text-white mb-8">سياسة الخصوصية</h1>
          
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. مقدمة</h2>
              <p>نحن في "سطحة الرياض" نحترم خصوصيتك ونلتزم بحمايتها. تصف هذه السياسة أنواع المعلومات التي قد نجمعها منك أو التي قد تقدمها عند زيارة موقعنا.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. المعلومات التي نجمعها</h2>
              <p>نحن لا نجمع أي بيانات شخصية تلقائياً بمجرد التصفح. البيانات الوحيدة التي نحصل عليها هي التي تقدمها طواعية عند الاتصال بنا أو مراسلتنا عبر واتساب لطلب الخدمة، وتشمل:</p>
              <ul className="list-disc list-inside mr-4 mt-2 space-y-1">
                <li>رقم الهاتف.</li>
                <li>الموقع الجغرافي (لتحديد مكان السيارة).</li>
                <li>نوع السيارة وتفاصيل الخدمة المطلوبة.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. كيف نستخدم معلوماتك</h2>
              <p>نستخدم المعلومات فقط لتقديم خدمة السطحة لك، والتواصل معك لإتمام عملية النقل بسرعة وأمان.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. حماية البيانات</h2>
              <p>نحن نطبق إجراءات أمنية صارمة لمنع الوصول غير المصرح به إلى معلوماتك. لا نقوم ببيع أو مشاركة بياناتك مع أي طرف ثالث لأغراض تسويقية.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. ملفات تعريف الارتباط (Cookies)</h2>
              <p>قد يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل حركة المرور بشكل مجهول الهوية.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. التعديلات</h2>
              <p>نحتفظ بالحق في تحديث سياسة الخصوصية هذه في أي وقت. سيتم نشر أي تغييرات هنا مع تحديث تاريخ التعديل.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
