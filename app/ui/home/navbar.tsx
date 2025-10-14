'use client';

import { useState } from 'react';
import Logo from './logo';
import Dropdown from './dropdown';
import MobileMenu from './mobile-menu';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const admissionsItems = [
    // { label: 'Fee Structure', href: '/' },
    { label: 'Apply for Admission', href: '/admissions/apply' },
  ];

  const newsItems = [
    { label: 'Latest News', href: '/news' },
    { label: 'Events', href: '/news/events' },
    { label: 'Achievements', href: '/news/achievements' },
  ];

  return (
    <>
      <nav className="bg-gray-50 sticky top-3 z-50 pl-8 pr-8 pb-8">
        <div className="container mx-auto" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <div className="flex justify-between items-center h-16">
            <Logo />
            <div className="hidden text-[20px] lg:flex items-center space-x-8 text-[#3d1f4c]">
              <Dropdown title="Admissions" items={admissionsItems} />
              
              <Link
                href="/academics"
                className=" hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Academics
              </Link>
              
              {/* <Dropdown title="News" items={newsItems} /> */}

              {/* School Life Link */}
              <Link
                href="/school-life"
                className=" hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                School Life
              </Link>
              
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md  hover:text-blue-600 hover:bg-black-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}