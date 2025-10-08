'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const admissionsItems = [
    { label: 'Fee Structure', href: '/' },
    { label: 'Apply for Admission', href: '/admissions/apply' },
  ];

  const newsItems = [
    { label: 'Latest News', href: '/news' },
    { label: 'Events', href: '/news/events' },
    { label: 'Achievements', href: '/news/achievements' },
  ];

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {/* Admissions Dropdown */}
          <div className="border-b border-gray-200 pb-4">
            <details className="group">
              <summary className="flex justify-between items-center font-medium text-gray-700 cursor-pointer list-none">
                Admissions
                <svg className="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                {admissionsItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>

          {/* Academics */}
          <div className="border-b border-gray-200 pb-4">
            <Link
              href="/academics"
              className="block font-medium text-gray-700 hover:text-blue-600 py-2"
              onClick={onClose}
            >
              Academics
            </Link>
          </div>

          {/* News Dropdown */}
          <div className="border-b border-gray-200 pb-4">
            <details className="group">
              <summary className="flex justify-between items-center font-medium text-gray-700 cursor-pointer list-none">
                News
                <svg className="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                {newsItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>

          {/* School Life */}
          <div className="border-b border-gray-200 pb-4">
            <Link
              href="/school-life"
              className="block font-medium text-gray-700 hover:text-blue-600 py-2"
              onClick={onClose}
            >
              School Life
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}