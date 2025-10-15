import Image from 'next/image';
import Footer from "../ui/home/footer";
import Navbar from "../ui/home/navbar";
import Link from 'next/link';

export const metadata = {
  title: "Baraka Mtito Academy | Home - Quality Education in Kibwezi East",
  description: "Welcome to Baraka Mtito Academy. Premier education institution offering academic excellence and holistic development for students.",
}
export default function SchoolLife() {
  const schoolLifeSections = [
    {
  id: 1,
  image: '/trophy.jpg',
  title: 'Excellence Award Victory',
  description: 'Baraka Mtito Academy proudly received the National Academic Excellence Trophy, a testament to our students’ hard work, discipline, and commitment to excellence. This achievement reflects our dedication to nurturing not only bright minds but also future leaders who strive for greatness in every pursuit.',
  align: 'right'
},
    {
      id: 2,
      image: '/class.jpg',
      title: 'Interactive Classroom Learning',
      description: 'Our students engage in dynamic classroom activities that foster critical thinking and collaborative learning. With modern teaching methodologies and well-equipped classrooms, we create an environment where every student can thrive academically.',
      align: 'left'
    },
    {
      id: 3,
      image: '/play.jpeg',
      title: 'Sports & Recreational Activities',
      description: 'Physical education and sports play a vital role in our holistic development approach. Students participate in various sports activities that promote teamwork, discipline, and physical fitness while having fun and building lasting friendships.',
      align: 'right'
    },
    {
      id: 4,
      image: '/boardingf.jpeg',
      title: 'Girls Boarding Facilities',
      description: 'Our girls\' boarding facility provides a safe, nurturing, and comfortable home away from home. With dedicated matrons and modern amenities, we ensure our female students feel supported and empowered in their educational journey.',
      align: 'left'
    },
    {
      id: 5,
      image: '/boardingm.jpeg',
      title: 'Boys Boarding Facilities',
      description: 'The boys\' boarding house offers a structured and supportive environment that promotes responsibility and independence. Our boarding masters provide guidance and mentorship, creating a conducive atmosphere for academic and personal growth.',
      align: 'right'
    },
    {
      id: 6,
      image: '/pract.jpg',
      title: 'Hands-on Practical Learning',
      description: 'We believe in learning by doing. Our practical sessions in sciences, technology, and creative arts allow students to apply theoretical knowledge, develop problem-solving skills, and discover their passions through experiential learning.',
      align: 'left'
    },
    {
      id: 7,
      image: '/assembly.jpg',
      title: 'Morning Assembly & Gatherings',
      description: 'Daily assemblies bring our school community together for prayer, announcements, and motivational talks. These gatherings foster unity, discipline, and school spirit while setting a positive tone for the day ahead.',
      align: 'right'
    },
    {
  id: 8,
  image: '/trip.jpeg',
  title: 'Academic Trip',
  description: 'Educational excursions provide students with immersive learning experiences beyond the classroom. Our trips expose students to real-world applications of academic concepts, broaden their perspectives, and create memorable moments that strengthen bonds within the school community.',
  align: 'left'
}
  ];

  return (
    <>
      <div className="sticky top-0 bg-gray-50 z-50 pl-9 pr-9">
        <Navbar />
        <div className='pl-9 pr-9'>
            <div className="border-b-2 border-blue-600"></div>
        </div>
        
      </div>
   
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-1">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-600 mb-6">
                  <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
                    Home
                  </Link>
                  {" / "}
                  <span className="font-semibold">School Life</span>
                </div>
                
                {/* School Life Title with Blue Background */}
                <div className="bg-blue-600 text-white px-6 py-4 rounded-lg">
                  <h1 className="text-2xl font-bold">School Life</h1>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-3 pt-8">
                
              </div>
            </div>
          </div>

          {/* School Life Sections */}
          <div className="space-y-16">
            {schoolLifeSections.map((section, index) => (
              <section
                key={section.id}
                className={`flex flex-col ${
                  section.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-8 lg:gap-12`}
              >
                {/* Image Container */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 w-full ">
                  <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg ">
                      {section.description}
                    </p>
                    
                    {/* Simple decorative element */}
                    <div className="mt-6 flex items-center">
                      <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 text-center">
            <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Join Our Vibrant Community</h2>
              <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
                Experience the Baraka Mtito Academy difference - where education meets excellence, 
                and every student discovers their potential in a supportive, engaging environment.
              </p>
              <Link 
                href="/admissions/apply"
                className="inline-block bg-white text-blue-600 font-bold px-6 lg:px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}