import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative bg-cover bg-center h-[70vh] flex items-center justify-center" style={{ backgroundImage: 'url(/images/hero-home.jpg)' }}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow">
          Transforming Audio Production
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-shadow max-w-3xl mx-auto">
          Professional solutions for every creator, from emerging artists to established studios
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="font-bold text-base">
            <Link href="/services">
              Explore Services
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-bold text-base">
            <Link href="/client-stories">
              Read Success Stories
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Add custom styles to global.css
// .text-shadow {
//   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
// } 