import { NextResponse } from 'next/server';
import { getViolations, type Violation, createViolation } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: getViolations()
  });
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<Violation>;

  const newViolation = createViolation({
    vehiclePlate: payload.vehiclePlate ?? 'DXB-1234',
    driverName: payload.driverName ?? 'Anonymous Driver',
    type: payload.type ?? 'Speeding',
    location: payload.location ?? 'Sheikh Zayed Road',
    amount: payload.amount ?? 800,
    status: payload.status ?? 'pending'
  });

  return NextResponse.json(
    {
      success: true,
      message: 'Violation record created successfully.',
      data: newViolation
    },
    { status: 201 }
  );
}
