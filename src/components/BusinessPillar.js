'use client';

import Link from 'next/link';

export default function BusinessPillar({ title, description, linkHref }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold mb-2 text-primary-DEFAULT">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link 
        href={linkHref}
        className="text-sm font-medium text-secondary-DEFAULT hover:underline inline-flex items-center"
      >
        Learn more
        <svg 
          className="ml-1 h-4 w-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
} 