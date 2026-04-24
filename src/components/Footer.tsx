import { Truck, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-background px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row pb-12">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-slate-950">
              <Truck size={24} />
            </div>
            <span className="text-2xl font-black tracking-tight">
              سطحة <span className="text-brand">الرياض</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <span>#سطحة_الرياض</span>
            <span>#سطحة_هيدروليك</span>
            <span>#نقل_سيارات</span>
            <span>#تقدير_حوادث</span>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 text-center sm:text-right">
          <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
            © {new Date().getFullYear()} سطحة الرياض السريعة. نحن نقدم خدمة نقل السيارات في جميع أحياء الرياض (شمال، شرق، غرب، جنوب) وفق أعلى معايير السلامة والجودة والالتزام بسياسات النشر لمحركات البحث.
          </p>
        </div>
      </div>
    </footer>
  );
}
