import Carousel from "./ui/home/carousel";
import Navbar from "./ui/home/navbar";
import CombinedWelcomeCard from "./ui/home/combined-welcome-card";
import MapCard from "./ui/home/map-card";
import ContactCard from "./ui/home/contact-card";
import Footer from "./ui/home/footer";

export default function Home() {
  return (
    <>
   
    <div className="min-h-screen bg-gray-50 ">
      {/* Sticky Navbar */}
      <div className="sticky top-0 bg-white z-50">
        <Navbar />
        <div className="border-b-2 border-blue-600"></div>
      </div>

      {/* Hero Carousel Section */}
      <section className="relative lg:pl-46 lg:pr-46">
        <Carousel />
      </section>

      {/* Combined Welcome Card Section */}
      <section className="py-5">
        <div className="container mx-auto">
          <div className=" mx-auto">
            {/* Single Combined Card */}
            <div>
              <CombinedWelcomeCard />
            </div>
          </div>
        </div>
      </section>

      {/* Map and Contact Cards Section */}
      <section className="bg-white pb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-8xl mx-auto">
            {/* Left Card - Map */}
            <div className="h-[600px]">
              <MapCard />
            </div>

            {/* Right Card - Contact Information */}
            <div className="h-[600px] ">
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