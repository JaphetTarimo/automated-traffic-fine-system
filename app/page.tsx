import Link from 'next/link';

const stats = [
  { label: 'Violations processed', value: '24,680' },
  { label: 'Avg. response time', value: '4.8 min' },
  { label: 'Payment completion', value: '91.4%' },
  { label: 'Active vehicles', value: '128k' }
];

const features = [
  'AI-based detection pipeline for speeding, phone use, and seatbelt violations',
  'Automatic plate recognition and vehicle registry matching',
  'Digital traffic fine generation with black points calculation',
  'Citizen portal for viewing, disputing, and paying fines',
  'SMS and email notifications with audit logging',
  'Admin dashboard for operations, funding, and compliance reporting'
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <nav className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 font-bold text-white">
              T
            </div>
            <div>
              <p className="text-lg font-semibold">Traffic4U</p>
              <p className="text-xs text-slate-300">Automated fine management</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-sm text-slate-200 hover:text-white">
              Admin
            </Link>
            <Link href="/citizen" className="text-sm text-slate-200 hover:text-white">
              Citizen Portal
            </Link>
            <Link
              href="/admin"
              className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-400"
            >
              Launch demo
            </Link>
          </div>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200">
              Vercel-ready traffic enforcement starter
            </div>
            <h1 className="max-w-xl text-4xl font-black leading-tight md:text-6xl">
              AI-powered traffic fines, fully automated.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              This starter project simulates a digital traffic enforcement system for speed,
              seatbelt, mobile phone, and red-light violations, with a citizen portal and admin
              operations dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/admin"
                className="rounded-xl bg-brand-500 px-6 py-3 font-medium text-white transition hover:bg-brand-400"
              >
                View admin dashboard
              </Link>
              <Link
                href="/citizen"
                className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-medium text-slate-100 transition hover:border-slate-500"
              >
                View citizen portal
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-soft">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Live operations</p>
                <h2 className="text-2xl font-bold">System summary</h2>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300">
                online
              </div>
            </div>
            <div className="space-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <span className="text-sm text-slate-300">{stat.label}</span>
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-300">
              System capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">Built for a modern automated enforcement workflow</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-sm text-slate-200">
                <div className="mb-4 h-10 w-10 rounded-xl bg-brand-500/15 flex items-center justify-center">
                  ✓
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
