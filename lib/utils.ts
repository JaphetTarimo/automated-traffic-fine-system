const APP_NAME = 'Traffic4U';

export function formatCurrency(amount: number) {
  return `AED ${amount.toLocaleString()}`;
}

export function getStatusStyle(status: string) {
  if (status === 'paid') return 'bg-emerald-100 text-emerald-800';
  if (status === 'appealed') return 'bg-amber-100 text-amber-800';
  return 'bg-slate-100 text-slate-700';
}

export { APP_NAME };
