import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Traffic Fine Automation System',
  description: 'Starter platform for automated traffic violation detection, fine processing, and citizen portal.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
