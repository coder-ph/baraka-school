import Carousel from "./ui/home/carousel";
import Navbar from "./ui/home/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pl-10 pr-10">
      {/* Sticky Navbar */}
      <div className="sticky top-0 bg-white z-50">
        <Navbar />
        <div className="border-b-2 border-blue-600"></div>
      </div>

      {/* Hero Carousel Section */}
      <section className="relative">
        <Carousel />
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Welcome to Our School
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Discover excellence in education with our comprehensive academic programs, 
            dedicated faculty, and state-of-the-art facilities that nurture young minds 
            for a brighter future.
          </p>
        </div>
      </section>
    </div>
  );
}
