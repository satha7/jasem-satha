import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-background px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row pb-12 border-b border-slate-900 mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white overflow-hidden">
              <img 
                src="https://i.postimg.cc/DZ2d3wKc/Chat-GPT-Image-25-abryl-2026-03-29-33-s-(1).png" 
                alt="لوجو سطحة الرياض" 
                className="h-full w-full object-contain p-1"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-2xl font-black tracking-tight">
              سطحة <span className="text-brand">الرياض</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <Link to="/privacy-policy" className="hover:text-brand transition-colors">#سياسة_الخصوصية</Link>
            <Link to="/terms" className="hover:text-brand transition-colors">#الشروط_والأحكام</Link>
            <span>#نقل_سيارات</span>
            <span>#تقدير_حوادث</span>
          </div>
        </div>

        <div className="text-center sm:text-right flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
            © {new Date().getFullYear()} سطحة الرياض السريعة. جميع الحقوق محفوظة. نحن مجموعة سطحات نخدم جميع أحياء الرياض (شمال، شرق، غرب، جنوب) وبنقل آمن وسريع.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link to="/privacy-policy" className="hover:text-slate-300">سياسة الخصوصية</Link>
            <Link to="/terms" className="hover:text-slate-300">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
