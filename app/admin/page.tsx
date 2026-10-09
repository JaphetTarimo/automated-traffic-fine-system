import { getViolations, getFineSummary } from '@/lib/mock-data';
import { AlertTriangle, CarFront, CreditCard, ShieldCheck, Smartphone } from 'lucide-react';

const cards = [
  { label: 'Total violations', value: '1,284', icon: CarFront },
  { label: 'Pending fines', value: '436', icon: AlertTriangle },
  { label: 'Paid this week', value: 'AED 184,600', icon: CreditCard },
  { label: 'Low-risk vehicles', value: '97.3%', icon: ShieldCheck }
];

export default async function AdminPage() {
  const violations = getViolations();
  const summary = getFineSummary();

  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 rounded-3xl bg-slate-950 p-6 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Operations</p>
            <h1 className="mt-2 text-3xl font-bold">Admin dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
              System online
            </div>
            <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-400">
              Export report
            </button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div key={card.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-slate-500">{card.label}</span>
                  <div className="rounded-lg bg-brand-100 p-2 text-brand-700">
                    <IconComponent size={18} />
                  </div>
                </div>
                <p className="text-3xl font-bold">{card.value}</p>
              </div>
            );
          })}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">Recent violation activity</h2>
              <button className="text-sm font-medium text-brand-700">View all</button>
            </div>
            <div className="space-y-4">
              {violations.slice(0, 5).map((violation) => (
                <div key={violation.id} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 p-4">
                  <div>
                    <p className="font-semibold text-slate-900">{violation.vehiclePlate}</p>
                    <p className="text-sm text-slate-500">{violation.type} • {violation.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">AED {violation.amount}</p>
                    <p className="text-xs uppercase tracking-wide text-slate-500">{violation.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-bold">Fine summary</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">Issued</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">{summary.issued}</p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">Paid</p>
                <p className="mt-2 text-3xl font-bold text-emerald-600">{summary.paid}</p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">Outstanding</p>
                <p className="mt-2 text-3xl font-bold text-amber-600">{summary.outstanding}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
