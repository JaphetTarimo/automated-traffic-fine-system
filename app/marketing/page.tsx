import Link from 'next/link';
import { AlertTriangle, Car, CheckCircle, CreditCard, MapPin, Smartphone, TrendingUp, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Topbar */}
      <div className="hidden lg:block bg-slate-900 text-white py-3 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:support@traffic4u.com" className="hover:text-blue-400 transition">
              📧 support@traffic4u.com
            </a>
            <a href="tel:+971501234567" className="hover:text-blue-400 transition">
              📱 +971 50 123 4567
            </a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition">Help</a>
            <a href="#" className="hover:text-blue-400 transition">Support</a>
            <a href="#" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              T
            </div>
            <div>
              <p className="font-bold text-lg">Traffic4U</p>
              <p className="text-xs text-slate-500">Smart Enforcement</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 transition font-medium">Home</a>
            <a href="#features" className="text-slate-700 hover:text-blue-600 transition font-medium">Features</a>
            <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition font-medium">How It Works</a>
            <a href="#dashboard" className="text-slate-700 hover:text-blue-600 transition font-medium">Dashboard</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition font-medium">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/admin" className="hidden sm:block px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition font-medium">
              Admin Portal
            </Link>
            <Link href="/citizen" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              Citizen Portal
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="inline-block px-4 py-2 bg-blue-500/30 rounded-full text-sm font-medium mb-6 border border-blue-400/50">
                🚗 Smart Traffic Enforcement
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Automated Traffic Fine System
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Next-generation AI-powered traffic violation detection, automatic fine generation, and citizen payment portal. Powered by Vercel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/citizen" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition inline-block text-center">
                  View Portal
                </Link>
                <Link href="#features" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition inline-block text-center">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="bg-blue-500/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-400/30">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Car className="w-32 h-32 mx-auto mb-4 opacity-80" />
                    <p className="text-white text-lg font-semibold">Real-Time Detection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">24.6K</div>
              <p className="text-slate-300">Violations Processed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">91.4%</div>
              <p className="text-slate-300">Payment Completion Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">4.8 min</div>
              <p className="text-slate-300">Avg. Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">128K</div>
              <p className="text-slate-300">Active Vehicles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
              SYSTEM CAPABILITIES
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Built for Modern Traffic Enforcement</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Complete automated workflow from detection to payment, with citizen appeals and admin analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Smartphone, title: 'AI Detection', desc: 'Speeding, phone use, seatbelt, red lights, and more' },
              { icon: Car, title: 'ANPR Tech', desc: 'Automatic license plate recognition and vehicle matching' },
              { icon: AlertTriangle, title: 'Auto Fine Gen', desc: 'Instant digital fine creation with black points' },
              { icon: CreditCard, title: 'Payment Portal', desc: 'Secure online payment and transaction tracking' },
              { icon: Users, title: 'Citizen Access', desc: 'View fines, pay online, and submit appeals' },
              { icon: TrendingUp, title: 'Admin Dashboard', desc: 'Analytics, reporting, and violation monitoring' },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-6 border border-slate-200 rounded-2xl hover:shadow-lg hover:border-blue-300 transition group">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
              WORKFLOW
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">How Traffic4U Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Violation Detected', desc: 'AI cameras identify traffic violations in real-time' },
              { step: '2', title: 'Plate Recognition', desc: 'ANPR system reads license plate and vehicle owner' },
              { step: '3', title: 'Fine Generated', desc: 'Automatic fine calculation and black points assignment' },
              { step: '4', title: 'Notification & Payment', desc: 'SMS/Email sent to driver with payment portal link' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-lg mb-4 relative z-10">
                  {item.step}
                </div>
                {i < 3 && (
                  <div className="absolute left-[26px] top-12 w-0.5 h-20 bg-blue-300 hidden md:block" />
                )}
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
                ADMIN DASHBOARD
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Real-Time Monitoring & Control</h2>
              <p className="text-xl text-slate-600 mb-6">
                Comprehensive dashboard for traffic enforcement officials with live violation data, fine tracking, and reporting.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Real-time violation monitoring',
                  'Fine payment tracking dashboard',
                  'Black points system management',
                  'Appeal review and decision making',
                  'Comprehensive analytics & reports',
                  'User management & permissions',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/admin" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                View Admin Demo
              </Link>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl">
              <div className="bg-slate-800 rounded-lg p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700 rounded p-4">
                    <p className="text-slate-400 text-sm">Total Violations</p>
                    <p className="text-3xl font-black text-blue-400">1,284</p>
                  </div>
                  <div className="bg-slate-700 rounded p-4">
                    <p className="text-slate-400 text-sm">Pending Fines</p>
                    <p className="text-3xl font-black text-red-400">436</p>
                  </div>
                  <div className="bg-slate-700 rounded p-4">
                    <p className="text-slate-400 text-sm">Paid This Week</p>
                    <p className="text-3xl font-black text-green-400">AED 184.6K</p>
                  </div>
                  <div className="bg-slate-700 rounded p-4">
                    <p className="text-slate-400 text-sm">System Status</p>
                    <p className="text-sm font-bold text-emerald-400">🟢 Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citizen Portal */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg order-2 md:order-1">
              <div className="space-y-4">
                {[
                  { status: 'Speeding', amount: 'AED 1,200', date: 'Oct 9, 2026' },
                  { status: 'Mobile Use', amount: 'AED 800', date: 'Oct 8, 2026' },
                  { status: 'Seatbelt', amount: 'AED 600', date: 'Oct 7, 2026' },
                ].map((fine, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">{fine.status} Violation</p>
                      <p className="text-sm text-slate-500">{fine.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">{fine.amount}</p>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Pay Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
                CITIZEN PORTAL
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Easy Fine Management</h2>
              <p className="text-xl text-slate-600 mb-6">
                Citizens can view their fines, make online payments, and submit appeals directly through our user-friendly portal.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'View all issued fines instantly',
                  'Secure online payment with multiple methods',
                  'Appeal fines with detailed reasoning',
                  'Track payment history and receipts',
                  'SMS and email notifications',
                  '24/7 customer support access',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/citizen" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                Access Citizen Portal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
              TECHNOLOGY
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Enterprise-Grade Stack</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built on modern, scalable technologies for reliability and performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Next.js', icon: '⚛️' },
              { name: 'TypeScript', icon: '🔷' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'Prisma', icon: '📊' },
              { name: 'Stripe', icon: '💳' },
              { name: 'Vercel', icon: '▲' },
              { name: 'Twilio', icon: '📱' },
              { name: 'SendGrid', icon: '📧' },
              { name: 'JWT Auth', icon: '🔐' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'API Routes', icon: '🔌' },
              { name: 'Cloud Ready', icon: '☁️' },
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <p className="font-semibold text-slate-900 text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-600 text-blue-100 rounded-full text-sm font-bold mb-4">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Contact Us</h2>
            <p className="text-xl text-slate-300">Have questions? We're here to help.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '📧', title: 'Email', value: 'support@traffic4u.com' },
              { icon: '📱', title: 'Phone', value: '+971 50 123 4567' },
              { icon: '📍', title: 'Location', value: 'Dubai, UAE' },
            ].map((contact, i) => (
              <div key={i} className="text-center p-6 bg-slate-800 rounded-xl">
                <p className="text-4xl mb-3">{contact.icon}</p>
                <p className="text-slate-300 font-semibold mb-2">{contact.title}</p>
                <p className="text-white font-bold">{contact.value}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/citizen" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-white mb-4">Traffic4U</p>
              <p className="text-sm">Automated traffic enforcement system powered by AI and Vercel.</p>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Product</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#dashboard" className="hover:text-white transition">Dashboard</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Portals</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/admin" className="hover:text-white transition">Admin Portal</Link></li>
                <li><Link href="/citizen" className="hover:text-white transition">Citizen Portal</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Legal</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Traffic4U. All rights reserved. Built with Next.js & Vercel.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
