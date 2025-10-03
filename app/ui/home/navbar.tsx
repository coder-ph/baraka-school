'use client';

import { useState } from 'react';
import Logo from './logo';
import Dropdown from './dropdown';
import MobileMenu from './mobile-menu';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const admissionsItems = [
    { label: 'Fee Structure', href: '/admissions/fee-structure' },
    { label: 'Apply for Admission', href: '/admissions/apply' },
  ];

  const newsItems = [
    { label: 'Latest News', href: '/news' },
    { label: 'Events', href: '/news/events' },
    { label: 'Achievements', href: '/news/achievements' },
  ];

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50 pl-5 pr-5">
       
        
        <div className="container mx-auto" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 text-[#001f5b]">
              <Dropdown title="Admissions" items={admissionsItems} />
              
              <a
                href="/primary"
                className=" hover:text-blue-600 transition-colors duration-200 font-medium"
                
              >
                Academics
              </a>
              
              <Dropdown title="News" items={newsItems} />
              
              <a
                href="/contact"
                className=" hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Contact Info
              </a>
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