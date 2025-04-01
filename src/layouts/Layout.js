import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/images/logo.png" alt="Elemental Sound Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-primary-DEFAULT"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white py-4 px-4">
            <div className="flex flex-col space-y-4">
              <NavLinks mobile setMobileMenuOpen={setMobileMenuOpen} />
            </div>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-dark-DEFAULT text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Elemental Sound</h3>
              <p className="text-gray-300">
                Transforming the audio production industry through innovation, community, and education.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link href="/business-strategy" className="text-gray-300 hover:text-white">Business Strategy</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
                <li><Link href="/client-stories" className="text-gray-300 hover:text-white">Client Stories</Link></li>
                <li><Link href="/implementation" className="text-gray-300 hover:text-white">Implementation</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/membership" className="text-gray-300 hover:text-white">Studio Membership</Link></li>
                <li><Link href="/services/equipment-rental" className="text-gray-300 hover:text-white">Equipment Rental</Link></li>
                <li><Link href="/services/education" className="text-gray-300 hover:text-white">Education Platform</Link></li>
                <li><Link href="/services/mobile-recording" className="text-gray-300 hover:text-white">Mobile Recording</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@elementalsound.com</li>
                <li>Phone: 1800 ELEMENTAL</li>
                <li>Address: Unit 10-12, 45 Ladner St, O'Connor WA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Elemental Sound. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLinks({ mobile, setMobileMenuOpen }) {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/business-strategy', label: 'Business Strategy' },
    { href: '/services', label: 'Services' },
    { href: '/client-stories', label: 'Client Stories' },
    { href: '/implementation', label: 'Implementation' },
    { href: '/about', label: 'About' },
  ];

  return links.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`font-medium ${
        mobile
          ? 'block py-2 text-gray-900 hover:text-primary-DEFAULT'
          : 'text-gray-700 hover:text-primary-DEFAULT px-3 py-2'
      }`}
      onClick={() => mobile && setMobileMenuOpen(false)}
    >
      {link.label}
    </Link>
  ));
} 