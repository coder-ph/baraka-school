import Image from 'next/image';
import Link from 'next/link';

export default function CombinedWelcomeCard() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[350px] md:h-[450px] lg:h-[500px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left Side - Welcome Message */}
        <div className="p-12 flex flex-col items-center justify-center text-center bg-[#3d1f4c] text-white">
            <div>
                <h2 className="text-4xl font-bold mb-6">
                    Welcome to Baraka School{' '}
                    <br/>
                    <span className="text-xl italic font-bold">
                        Where knowledge inspires self-reliance.
                    </span>
                </h2>
                <div className="space-y-6 leading-relaxed max-w-2xl mx-auto">
                    <p>
                        Baraka Mtito Academy is an educational school in Kibwezi East, Kenya.
                        
                    </p>
                </div>
            </div>

        <div className="mt-10">
            <Link
            href="/about"
            className="inline-block bg-white text-[#3d1f4c] font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-100"
            >
            <span>Read More</span>
            <svg
                className="w-5 h-5 ml-2 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
        </div>


        {/* Right Side - Image */}
        <div className="relative h-full min-h-[300px] lg:min-h-0">
          <Image
            src="/im8.jpeg"
            alt="Baraka School Campus"
            fill
            className="object-cover"
            priority
          />
          {/* Optional: Add a subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black/5"></div>
        
         
        </div>
      </div>
    </div>
  );
}