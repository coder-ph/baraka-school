import Image from "next/image";
import AcademicsCarousel from "../ui/home/academics-carousel";
import Footer from "../ui/home/footer";
import Navbar from "../ui/home/navbar";
import Link from "next/link";

export default function Academics() {
  return (
    <>
    <div>
      
    </div>
      <div className="sticky top-0 bg-white z-0 pl-11.5 pr-16.5">
        <Navbar />
        <div className="border-b-2 border-blue-600"></div>
      </div>
   
      <div className="min-h-screen bg-gray-50 py-8 pr-15 pl-10">
        <div className="container mx-auto max-w-6xl"> 
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-30">
            {/* Left Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Breadcrumb */}
              <div className="text-sm text-gray-600 mb-6">
                <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
                  Home
                </Link>
                {" / "}
                <span className="font-semibold">Academics</span>
              </div>
              
              {/* Academics Title with Blue Background */}
              <div className="bg-blue-600 text-white px-6 py-4 rounded-lg">
                <h1 className="text-2xl font-bold">Academics</h1>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="lg:col-span-3 pt-20 pl-15">
              {/* Carousel Card */}
              <div className="bg-white rounded-lg shadow-lg mb-5">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                      {/* Single Static Image */}
                      
                        <Image
                          src="/lab3.jpg"
                          alt="Baraka Mtito Academy Laboratory"
                          fill
                          className="object-cover"
                          priority
                        />
                      
                    </div>
              </div>

              {/* Content Cards */}
              <div className="space-y-6 pl-10">
                {/* Card 1: Legacy of Excellence */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">A Legacy of Academic Excellence</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Baraka Mtito Academy has long stood as a beacon of academic excellence in Kibwezi Sub-County 
                    and across Makueni County. The school has consistently produced learners who are not only 
                    well-grounded in knowledge but also confident, disciplined and ready to excel in higher 
                    levels of education.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Many of our alumni have proudly joined National schools across the country, a testament 
                    to the quality of education we offer.
                  </p>
                </div>

                {/* Card 2: 8-4-4 System Achievements */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Consistent Top Performance</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Before the transition from the 8-4-4 system to the Competency-Based Curriculum (CBC), 
                    Baraka Mtito Academy consistently ranked among the top schools in both the sub-county and 
                    zonal examinations.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                      <h3 className="font-semibold text-gray-800 mb-2">Sub-County Rankings</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• 2022: 7th position out of 258 schools</li>
                        <li>• 2023: 6th position out of 258 schools</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
                      <h3 className="font-semibold text-gray-800 mb-2">Zonal Rankings</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• 2023: 2nd position</li>
                        <li>• 2024: 2nd position</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mt-4">
                    These achievements further solidify our reputation as an academic powerhouse in the region.
                  </p>
                </div>

                {/* Card 3: CBC Transition Success */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Excelling in the CBC Era</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Even after transitioning to the Competency-Based Curriculum (CBC) system, Baraka Mtito Academy 
                    continues to uphold its tradition of excellence. Our commitment to quality education 
                    remains unwavering as we adapt to the new curriculum while maintaining our high standards.
                  </p>
                  
                  <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500 mt-4">
                    <h3 className="font-semibold text-gray-800 mb-3">Outstanding Grade 6 Performance</h3>
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl font-bold text-yellow-600">90%</div>
                      <div className="text-gray-700">
                        of our Grade 6 learners have exceeded expectations in their CBC assessments, 
                        demonstrating exceptional competency across all learning areas.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4: Our Academic Tradition */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Enduring Academic Tradition</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At Baraka Mtito Academy, academic success is more than just a goal—it's a tradition we nurture 
                    and uphold with pride. Our dedicated teaching staff, comprehensive curriculum, and 
                    supportive learning environment ensure that every student reaches their full potential.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-blue-600 font-bold text-lg mb-2">Confident</div>
                      <p className="text-gray-700 text-sm">Learners who believe in their abilities</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-green-600 font-bold text-lg mb-2">Disciplined</div>
                      <p className="text-gray-700 text-sm">Students with strong work ethics</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-purple-600 font-bold text-lg mb-2">Prepared</div>
                      <p className="text-gray-700 text-sm">Ready for higher education challenges</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mt-6">
                    Join us at Baraka Mtito Academy, where we continue to build on our legacy of excellence 
                    and prepare students for success in an ever-changing world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}