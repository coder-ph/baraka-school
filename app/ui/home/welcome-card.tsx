import Link from 'next/link';

export default function WelcomeCard() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl  h-full">
      <div className="h-full flex flex-col">
        <div className="flex-1">
          <h2 className="lg:text-3xl font-bold text-gray-800 mb-4">Welcome to Baraka School</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Baraka school is an educational school in Kibwezi East. We teach children 
              following the National Curriculum of Kenya.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <Link 
            href="/about"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>Read More</span>
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}