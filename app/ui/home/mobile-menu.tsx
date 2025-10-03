'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const admissionsItems = [
    { label: 'Fee Structure', href: '/admissions/fee-structure' },
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
      <div className="px-5 py-6"> {/* Added left and right padding of 5 */}
        <div className="space-y-4">
          {/* Admissions Dropdown */}
          <div className="border-b border-black-200 pb-4">
            <details className="group">
              <summary 
                className="flex justify-between items-center text-black cursor-pointer list-none py-3"
                style={{ fontSize: '23px' }}
              >
                Admissions
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                {admissionsItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-3 text-black hover:text-blue-600"
                    style={{ fontSize: '20px' }}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>

          {/* Academics */}
          <div className="border-b border-black-200 pb-4">
            <Link
              href="/primary"
              className="block text-black hover:text-blue-600 py-3"
              style={{ fontSize: '23px' }}
              onClick={onClose}
            >
              Academics
            </Link>
          </div>

          {/* News Dropdown */}
          <div className="border-b border-black-200 pb-4">
            <details className="group">
              <summary 
                className="flex justify-between items-center text-black cursor-pointer list-none py-3"
                style={{ fontSize: '23px' }}
              >
                News
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                {newsItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-3 text-black hover:text-blue-600"
                    style={{ fontSize: '20px' }}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>

          {/* Contact */}
          <div className="border-b border-black-200 pb-4">
            <Link
              href="/contact"
              className="block text-black hover:text-blue-600 py-3"
              style={{ fontSize: '23px' }}
              onClick={onClose}
            >
              Contact Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}