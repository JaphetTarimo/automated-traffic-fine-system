export const metadata = {
  title: 'Traffic4U - Automated Traffic Fine System',
  description: 'Next-generation AI-powered traffic violation detection and fine management system. Powered by Vercel.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
