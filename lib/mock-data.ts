export type ViolationStatus = 'pending' | 'paid' | 'appealed';

export type Violation = {
  id: string;
  vehiclePlate: string;
  driverName: string;
  type: string;
  location: string;
  amount: number;
  date: string;
  status: ViolationStatus;
};

export type Fine = {
  id: string;
  vehiclePlate: string;
  type: string;
  amount: number;
  date: string;
  location: string;
  status: ViolationStatus;
};

const violations: Violation[] = [
  {
    id: 'V-1001',
    vehiclePlate: 'DXB-7431',
    driverName: 'Aisha Al Mansoori',
    type: 'Speeding',
    location: 'Sheikh Zayed Road',
    amount: 1200,
    date: '2026-10-09',
    status: 'pending'
  },
  {
    id: 'V-1002',
    vehiclePlate: 'JLT-2094',
    driverName: 'Omar Rahman',
    type: 'Mobile phone use',
    location: 'Al Khail Road',
    amount: 800,
    date: '2026-10-08',
    status: 'paid'
  },
  {
    id: 'V-1003',
    vehiclePlate: 'RTA-6559',
    driverName: 'Nadia Hassan',
    type: 'Seatbelt violation',
    location: 'Downtown Dubai',
    amount: 600,
    date: '2026-10-07',
    status: 'appealed'
  }
];

export function getViolations() {
  return violations;
}

export function createViolation(overrides: Partial<Violation>) {
  const nextViolation: Violation = {
    id: `V-${Date.now()}`,
    vehiclePlate: overrides.vehiclePlate ?? 'UNKNOWN',
    driverName: overrides.driverName ?? 'Unknown driver',
    type: overrides.type ?? 'Unknown violation',
    location: overrides.location ?? 'Unknown location',
    amount: overrides.amount ?? 500,
    date: overrides.date ?? new Date().toISOString().slice(0, 10),
    status: overrides.status ?? 'pending'
  };

  violations.unshift(nextViolation);
  return nextViolation;
}

export function getCitizenFines(): Fine[] {
  return violations.map((violation) => ({
    id: violation.id,
    vehiclePlate: violation.vehiclePlate,
    type: violation.type,
    amount: violation.amount,
    date: violation.date,
    location: violation.location,
    status: violation.status
  }));
}

export function getFineSummary() {
  const issued = violations.reduce((sum, item) => sum + item.amount, 0);
  const paid = violations.filter((v) => v.status === 'paid').reduce((sum, item) => sum + item.amount, 0);
  const outstanding = violations.filter((v) => v.status !== 'paid').reduce((sum, item) => sum + item.amount, 0);

  return {
    issued: `AED ${issued.toLocaleString()}`,
    paid: `AED ${paid.toLocaleString()}`,
    outstanding: `AED ${outstanding.toLocaleString()}`
  };
}

export function markFineAsPaid(id: string) {
  const violation = violations.find((item) => item.id === id);
  if (!violation) return null;

  violation.status = 'paid';
  return { ...violation };
}
