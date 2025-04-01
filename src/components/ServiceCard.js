'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ServiceCard({ title, description, imageSrc, features, price, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary-DEFAULT">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <ul className="space-y-1 mb-4 text-gray-700">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-secondary-DEFAULT mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
        
        {price && (
          <div className="italic text-gray-700 mb-4">
            From <span className="font-bold text-accent-DEFAULT">{price}</span>
          </div>
        )}
        
        <Button asChild className="w-full">
          <Link href={link}>
            Learn More
          </Link>
        </Button>
      </div>
    </div>
  );
} 