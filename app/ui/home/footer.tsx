import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Column 1 - Logo, School Name, and Social Media */}
          <div className="space-y-6">
            {/* Logo and School Name */}
            <div className="space-y-3">
              <div className="w-24 h-16 relative">
                <Image
                  src="/baraka.png"
                  alt="Baraka Mtito Academy Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-white">Baraka Mtito Academy</h3>
              <p className="text-gray-300 text-sm">
                Education for Self Reliance
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="space-y-3">
              <p className="text-gray-300 text-sm font-medium">Follow Us</p>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/17CnMfESA6/"
                  className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com/BarakaMtito?t=k6ilY6Rm9Dl5FozJLmXgpQ&s=09"
                  className="bg-blue-400 hover:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>

                {/* Instagram */}
                {/* <a
                  href="#"
                  className="bg-pink-600 hover:bg-pink-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.189-1.551-.741-.941-1.009-2.142-.723-3.379.286-1.237 1.108-2.237 2.242-2.767 1.134-.53 2.468-.53 3.602 0 1.134.53 1.956 1.53 2.242 2.767.286 1.237.018 2.438-.723 3.379-.741.94-1.892 1.551-3.189 1.551z"/>
                  </svg>
                </a> */}
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links with wider space */}
          <div className="md:ml-16"> {/* Added margin for wider space */}
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                {/* Admissions Dropdown Links */}
                <div>
                  <p className="text-blue-400 font-medium text-sm mb-2">Admissions</p>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                        Fee Structure
                      </Link>
                    </li>
                    <li>
                      <Link href="/admissions/apply" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                        Apply for Admission
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Academics */}
                <div>
                  <p className="text-blue-400 font-medium text-sm mb-2">Academics</p>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/primary" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                        Primary
                      </Link>
                    </li>
                    <li>
                      <Link href="/secondary" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                        Secondary
                      </Link>
                    </li>
                    <li>
                      <Link href="/sixth-form" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                        Sixth Form
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                {/* News Dropdown Links */}
                <div>
                  <p className="text-blue-400 font-medium text-sm mb-2">News</p>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/news" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                        Latest News
                      </Link>
                    </li>
                    <li>
                      <Link href="/news/events" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link href="/news/achievements" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                        Achievements
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Other Links */}
                <div>
                  <p className="text-blue-400 font-medium text-sm mb-2">Information</p>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                        Contact Info
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">
                    Baraka<br />
                    Kibwezi East<br />
                    Kenya<br />
                    
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-green-400 flex-shrink-0">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">
                      <span className="font-medium">School Contact:</span> +254 (0)746407573<br />
                      <span className="font-medium">Admissions Office:</span> +254 (0)701074875<br />
                      {/* <span className="font-medium">Secondary:</span> +254 (0)721 499 951 */}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-purple-400 flex-shrink-0">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <a 
                    href="mailto: barakamtitoacademy@gmail.com" 
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                     barakamtitoacademy@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Baraka Mtito Academy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}