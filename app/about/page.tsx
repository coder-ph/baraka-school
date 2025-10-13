import Footer from "../ui/home/footer";
import Navbar from "../ui/home/navbar";
import TestimonialSlider from "../ui/home/testimonial-slider";

export default function About() {
  return (
    <>
    <div className="sticky top-0 bg-white z-50 pl-19 pr-19">
            <Navbar />
            <div className="border-b-2 border-blue-600 "></div>
          </div>
    <div className="min-h-screen bg-white pl-15 pr-15">
        
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Baraka Academy</h1>
          
          {/* Our Story */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Story - Baraka Junior School under Turner Foundation</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Baraka Junior School (Baraka Academy) was established through the efforts of the Turner Foundation, 
                a registered Community-Based Organization (CBO) founded in 2003 in Mtito Andei, Makueni County.
              </p>
              <p>
                The CBO began with projects aimed at improving access to electricity, clean water, and education for 
                the local community. Over the years, Turner CBO has drilled boreholes, extended water pipelines, 
                installed solar panels, and partnered with government and local stakeholders to address water and 
                environmental challenges.
              </p>
              <p>
                Education quickly became a central focus. In 2012, the CBO supported Kithingiisyo Primary School by 
                constructing classrooms, dormitories, a dining hall, and a kitchen to improve learning conditions for 
                children from less privileged backgrounds.
              </p>
              <p>
                In 2013, the CBO acquired land in Kwa Kithokoi town and established Baraka Academy. With eleven modern 
                classrooms, dormitories for boys and girls, a kitchen, dining hall, playground, and junior secondary 
                facilities, the school now provides a nurturing environment for over 200 pupils under the guidance of 
                qualified teachers.
              </p>
              <p>
                At Baraka Junior School, we carry forward this spirit of community service and commitment to quality 
                education under the leadership of Turner Foundation — shaping a brighter future for every child.
              </p>
            </div>
          </section>

          {/* School Information */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-4">School Information</h3>
                <div className="space-y-2 text-black">
                  <p><strong>Motto:</strong> Education for Self reliance</p>
                  <p><strong>Vision:</strong> To produce useful citizens who are academically competent, morally upright and socially responsible.</p>
                  <p><strong>Mission:</strong> To equip learners with knowledge, skills and values that promote creativity, innovation and self-reliance for life long success.</p>
                  <p><strong>Core Values:</strong> Discipline, Excellence, Respect, Integrity and Innovation</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-4">Welcome Message from the Headteacher</h3>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 italic mb-4">
                    "Welcome to Baraka Academy! It gives me great joy to welcome you to our school community. 
                    At Baraka Academy, we believe that every child is gifted with unique talents waiting to be nurtured..."
                  </p>
                  <p className="font-semibold text-black">– Mr. John Okoth, Headteacher</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Baraka Academy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Why Choose Baraka Academy?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Individualized Attention – accommodative size ensuring every child's needs are met.",
                "Qualified and Passionate Teachers – Dedicated to nurturing talent and inspiring excellence.",
                "CBC-Aligned Curriculum with Enrichment – We combine the national curriculum with innovative teaching methods.",
                "Modern Boarding Facilities – Safe, homely and well-supervised accommodation for boarders.",
                "Holistic Growth – We nurture learners academically, socially, spiritually and emotionally.",
                "State of the Art Resources – Access to ICT, sports and creative arts.",
                "Strong Discipline and Values – Instilling responsibility, confidence, and respect.",
                "Parent Involvement – Open communication ensures a strong school-home partnership.",
                "Secure and Conducive Environment – Safe grounds where learners thrive without distraction.",
                "A Track Record of Success – Our learners stand out with confidence, skills, and character."
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">{index + 1}.</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Testimonials Section with Light Blue Background */}
        <section className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What People Say About Us</h2>
          <TestimonialSlider />
        </section>

        {/* Facilities Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Our Facilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "ECDE & Pre-Primary Playground: Modern, child-friendly playground for our youngest learners",
              "Sports & Games: Spacious sports field for football, athletics, and handball",
              "Digital Learning Spaces: Well-equipped online classrooms with modern technology",
              "Boarding Facilities: Safe, clean, and nurturing home away from home",
              "Science Laboratory: Modern lab for hands-on experiments and critical thinking"
            ].map((facility, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
}