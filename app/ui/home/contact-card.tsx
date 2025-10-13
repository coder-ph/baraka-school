export default function ContactCard() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 h-full">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Contact Us</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>

        {/* Contact Information */}
        <div className="flex-1 space-y-6">
          {/* Address Section */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
              <div className="text-gray-600 space-y-1">
                <p>Baraka</p>
                <p>Kibwezi East</p>
                <p>Kenya</p>
                
              </div>
            </div>
          </div>

          {/* Phone Numbers Section */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone Numbers</h3>
              <div className="text-gray-600 space-y-2">
                <div>
                  <p className="font-medium">School Contact</p>
                  <p className="text-blue-600 hover:text-blue-700 cursor-pointer">+254 (0)746407573</p>
                </div>
                <div>
                  <p className="font-medium">Admissions Office</p>
                  <p className="text-blue-600 hover:text-blue-700 cursor-pointer">+254 (0)701074875</p>
                </div>
               
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <div className="text-gray-600">
                <p className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
                   barakamtitoacademy@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}