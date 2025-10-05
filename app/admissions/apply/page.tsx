export default function Admissions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Admissions</h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to our admissions page. Here you can find information about 
            the admission process, fee structure, and arrange a visit to our school.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Arrange a Visit</h3>
              <p className="text-gray-600 mb-4">
                Schedule a tour of our campus to see our facilities and meet our staff.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Tour
              </button>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Apply Now</h3>
              <p className="text-gray-600 mb-4">
                Start your application process for the upcoming academic year.
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Start Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}