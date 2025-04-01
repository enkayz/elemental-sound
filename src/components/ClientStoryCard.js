'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ClientStoryCard({ name, type, description, imageSrc, link, viewAll }) {
  if (viewAll) {
    return (
      <div className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center h-full">
        <h3 className="text-xl font-bold mb-3 text-primary-DEFAULT">Explore All Success Stories</h3>
        <p className="text-gray-700 mb-6">Discover how creators of all types have transformed their work through our ecosystem</p>
        <Button asChild>
          <Link href={link}>
            View All Stories
          </Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 relative">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-primary-DEFAULT">{name}</h3>
        <p className="text-accent-DEFAULT font-semibold text-sm mb-3">{type}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <Button asChild variant="secondary">
          <Link href={link}>
            Read Story
          </Link>
        </Button>
      </div>
    </div>
  );
} 