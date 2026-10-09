import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    status: 'healthy',
    app: 'automated-traffic-fine-system',
    timestamp: new Date().toISOString()
  });
}
