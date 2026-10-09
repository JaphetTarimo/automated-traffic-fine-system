import { getCitizenFines } from '@/lib/mock-data';
import { Clock3, CreditCard, MapPin, ShieldAlert } from 'lucide-react';

export default function CitizenPage() {
  const fines = getCitizenFines();

  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 rounded-3xl bg-slate-950 p-6 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Citizen services</p>
          <h1 className="mt-2 text-3xl font-bold">My traffic fines</h1>
        </header>

        <section className="space-y-5">
          {fines.map((fine) => (
            <div key={fine.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <ShieldAlert className="text-amber-500" size={18} />
                    <p className="text-sm font-medium uppercase tracking-wide text-slate-500">{fine.type}</p>
                  </div>
                  <h2 className="text-2xl font-bold">AED {fine.amount}</h2>
                  <p className="mt-2 text-slate-600">Vehicle {fine.vehiclePlate}</p>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {fine.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock3 size={16} />
                    {fine.date}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CreditCard size={16} />
                  Status: <span className="font-semibold text-slate-900">{fine.status}</span>
                </div>
                <div className="flex gap-3">
                  <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    Dispute
                  </button>
                  <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-400">
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
