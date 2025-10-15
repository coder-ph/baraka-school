import Carousel from "./ui/home/carousel";
import Navbar from "./ui/home/navbar";
import CombinedWelcomeCard from "./ui/home/combined-welcome-card";
import MapCard from "./ui/home/map-card";
import ContactCard from "./ui/home/contact-card";
import Footer from "./ui/home/footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:pl-15 lg:pr-15">
        {/* Sticky Navbar */}
        <div className="sticky top-0 bg-gray-100 z-50">
          <Navbar />
          <div className="border-b-2 border-blue-600"></div>
        </div>

     
        <section className="relative">
          <Carousel />
        </section>

        
        <section className="py-5">
          <div className="container mx-auto px-0 sm:px-4">
            <div className="max-w-8xl mx-auto">
              {/* Single Combined Card */}
              <div>
                <CombinedWelcomeCard />
              </div>
            </div>
          </div>
        </section>

        {/* Map and Contact Cards Section */}
        <section className="pb-10">
          <div className="container mx-auto px-0 sm:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 max-w-8xl mx-auto">
              {/* Left Card - Map */}
              <div className="h-[500px] sm:h-[600px]">
                <MapCard />
              </div>

              {/* Right Card - Contact Information */}
              <div className="h-[500px] sm:h-[600px]">
                <ContactCard />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}