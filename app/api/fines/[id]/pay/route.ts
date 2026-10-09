import { NextResponse } from 'next/server';
import { getCitizenFines, markFineAsPaid } from '@/lib/mock-data';

export async function POST(request: Request) {
  const body = await request.json();
  const fineId = body.fineId ?? 'FINE-1001';

  const updated = markFineAsPaid(fineId);

  if (!updated) {
    return NextResponse.json(
      {
        success: false,
        message: 'Fine not found or already paid.'
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    message: 'Payment processed successfully.',
    data: updated
  });
}

export async function GET() {
  return NextResponse.json({
    success: true,
    data: getCitizenFines()
  });
}
