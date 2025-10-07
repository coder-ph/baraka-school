'use client';

import { useState } from 'react';

export default function MapCard() {
  const [zoom, setZoom] = useState(13); // use 14–16 for better readability

  // Baraka School - Kibwezi East, Kenya
  const schoolLocation = {
    lat: -2.6423835,
    lng: 38.1277475,
  };

  // Cleaner Google Maps embed URL
  const mapUrl = `https://www.google.com/maps?q=${schoolLocation.lat},${schoolLocation.lng}&z=${zoom}&output=embed`;

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 1, 20));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 1, 1));

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 h-full">
      <div className="flex flex-col h-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>

        {/* Map */}
        <div className="flex-1 relative rounded-xl overflow-hidden border border-gray-200">
          <iframe
            className="w-full h-full"
            src={mapUrl}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Baraka School Location - Google Maps"
          ></iframe>

          {/* Zoom Controls */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <button
              onClick={handleZoomIn}
              className="bg-white hover:bg-gray-50 text-gray-700 rounded-lg w-10 h-10 flex items-center justify-center shadow-md border border-gray-200"
              aria-label="Zoom in"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
              </svg>
            </button>
            <button
              onClick={handleZoomOut}
              className="bg-white hover:bg-gray-50 text-gray-700 rounded-lg w-10 h-10 flex items-center justify-center shadow-md border border-gray-200"
              aria-label="Zoom out"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-sm text-gray-700 font-medium">
            📍 Baraka School - Kibwezi East, Kenya
          </p>
        </div>

        {/* Directions */}
        <div className="mt-4">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${schoolLocation.lat},${schoolLocation.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center block"
          >
            🗺️ Get Directions on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
