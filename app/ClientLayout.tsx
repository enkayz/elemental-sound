'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="header">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group transition-all duration-300">
              <div className="h-12 w-auto flex items-center">
                <Image 
                  src="/images/logo.png" 
                  alt="Elemental Sound Logo" 
                  width={160} 
                  height={48} 
                  priority
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks pathname={pathname} />
            <Link 
              href="/contact" 
              className="ml-2 bg-gradient-to-r from-primary-DEFAULT to-tertiary-DEFAULT hover:from-primary-dark hover:to-tertiary-dark text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-md"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-primary-DEFAULT transition-colors duration-300"
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
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav 
              className="md:hidden bg-white py-4 px-4 border-t border-gray-100"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                <NavLinks mobile setMobileMenuOpen={setMobileMenuOpen} pathname={pathname} />
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-primary-DEFAULT to-tertiary-DEFAULT hover:from-primary-dark hover:to-tertiary-dark text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-md text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image 
                  src="/images/logo-white.png" 
                  alt="Elemental Sound Logo" 
                  width={180} 
                  height={50} 
                  className="h-12 w-auto object-contain" 
                />
              </Link>
              <p className="text-light-DEFAULT text-sm leading-relaxed">
                Transforming the audio production industry through innovation, community, and education.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-white border-opacity-20 pb-2 inline-block text-secondary-DEFAULT">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-light-DEFAULT hover:text-secondary-DEFAULT transition-colors duration-200 text-sm flex items-center"><span className="mr-2">→</span>Home</Link></li>
                <li><Link href="/business-strategy" className="text-light-DEFAULT hover:text-secondary-DEFAULT transition-colors duration-200 text-sm flex items-center"><span className="mr-2">→</span>Business Strategy</Link></li>
                <li><Link href="/services" className="text-light-DEFAULT hover:text-secondary-DEFAULT transition-colors duration-200 text-sm flex items-center"><span className="mr-2">→</span>Services</Link></li>
                <li><Link href="/client-stories" className="text-light-DEFAULT hover:text-secondary-DEFAULT transition-colors duration-200 text-sm flex items-center"><span className="mr-2">→</span>Client Stories</Link></li>
                <li><Link href="/implementation" className="text-light-DEFAULT hover:text-secondary-DEFAULT transition-colors duration-200 text-sm flex items-center"><span className="mr-2">→</span>Implementation</Link></li>
                <li><Link href="/about" className="text-light-DEFAULT hover:text-secondary-DEFAULT transition-colors duration-200 text-sm flex items-center"><span className="mr-2">→</span>About</Link></li>
                <li><Link href="/contact" className="text-light-DEFAULT hover:text-secondary-DEFAULT transition-colors duration-200 text-sm flex items-center"><span className="mr-2">→</span>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-white border-opacity-20 pb-2 inline-block text-secondary-DEFAULT">Services</h3>
              <ul className="space-y-3">
                <li><Link href="/services/membership" className="text-light-DEFAULT hover:text-secondary-DEFAULT transition-colors duration-200 text-sm flex items-center"><span className="mr-2">→</span>Studio Membership</Link></li>
                <li><Link href="/services/equipment" className="text-light-DEFAULT hover:text-secondary-DEFAULT transition-colors duration-200 text-sm flex items-center"><span className="mr-2">→</span>Equipment Rental</Link></li>
                <li><Link href="/services/education" className="text-light-DEFAULT hover:text-secondary-DEFAULT transition-colors duration-200 text-sm flex items-center"><span className="mr-2">→</span>Education Platform</Link></li>
                <li><Link href="/services/mobile-recording" className="text-light-DEFAULT hover:text-secondary-DEFAULT transition-colors duration-200 text-sm flex items-center"><span className="mr-2">→</span>Mobile Recording</Link></li>
                <li><Link href="/services/consulting" className="text-light-DEFAULT hover:text-secondary-DEFAULT transition-colors duration-200 text-sm flex items-center"><span className="mr-2">→</span>Consulting</Link></li>
                <li><Link href="/services/post-production" className="text-light-DEFAULT hover:text-secondary-DEFAULT transition-colors duration-200 text-sm flex items-center"><span className="mr-2">→</span>Post Production</Link></li>
                <li><Link href="/services/studio" className="text-light-DEFAULT hover:text-secondary-DEFAULT transition-colors duration-200 text-sm flex items-center"><span className="mr-2">→</span>Studio Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-white border-opacity-20 pb-2 inline-block text-secondary-DEFAULT">Contact</h3>
              <ul className="space-y-3 text-light-DEFAULT text-sm">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-secondary-DEFAULT flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@elementalsound.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-secondary-DEFAULT flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>1800 ELEMENTAL</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-secondary-DEFAULT flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Unit 10-12, 45 Ladner St,<br/>O'Connor WA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center text-white text-opacity-60 text-sm">
            <p>&copy; {new Date().getFullYear()} Elemental Sound. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function NavLinks({ 
  mobile, 
  setMobileMenuOpen,
  pathname
}: { 
  mobile?: boolean; 
  setMobileMenuOpen?: (open: boolean) => void;
  pathname: string | null;
}) {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/business-strategy', label: 'Business Strategy' },
    { href: '/services', label: 'Services' },
    { href: '/client-stories', label: 'Client Stories' },
    { href: '/implementation', label: 'Implementation' },
    { href: '/about', label: 'About' },
  ];

  return links.map((link) => {
    const isActive = pathname === link.href || 
      (pathname !== null && link.href !== '/' && pathname.startsWith(link.href));
      
    return (
      <Link
        key={link.href}
        href={link.href}
        className={`font-medium relative hover:text-primary-DEFAULT transition-colors duration-300 ${
          mobile
            ? `block py-2 ${isActive ? 'text-primary-DEFAULT' : 'text-gray-800'}`
            : `text-gray-700 ${isActive ? 'text-primary-DEFAULT' : ''} px-3 py-2`
        }`}
        onClick={() => mobile && setMobileMenuOpen && setMobileMenuOpen(false)}
      >
        {link.label}
        {isActive && !mobile && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-DEFAULT rounded-full"
            layoutId="navigationIndicator"
            transition={{ duration: 0.3 }}
          />
        )}
      </Link>
    );
  });
} 