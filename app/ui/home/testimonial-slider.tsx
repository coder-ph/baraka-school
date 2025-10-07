'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "As a parent, I could not have asked for a better school for my child. The teachers at Baraka Academy are not only professional but also genuinely caring. My daughter has grown in confidence, developed strong values, and discovered talents I never knew she had.",
    author: "Happy Parent",
    role: "Parent"
  },
  {
    id: 2,
    text: "For more than 22 years, I have had the privilege of witnessing the unique journey of Baraka Academy. I have seen children walk through our gates with curiosity and potential and leave as confident, capable and compassionate young people.",
    author: "Dorothy Katiku",
    role: "Board Member"
  },
  {
    id: 3,
    text: "What makes Baraka Academy stand out is that we go beyond academics. Yes, we pursue excellence in learning, but just as importantly, we instill values, resilience and character. Here, every child is known and supported.",
    author: "School Administrator",
    role: "Administration"
  },
  {
    id: 4,
    text: "The boarding facility has been a blessing, providing my son with a safe and supportive home away from home. Baraka truly feels like family and has helped him become more independent and responsible.",
    author: "Satisfied Parent",
    role: "Parent"
  },
  {
    id: 5,
    text: "I'm amazed by the holistic approach to education at Baraka Academy. My child not only excels academically but has also developed strong moral values and social skills that will serve them for life.",
    author: "Grateful Mother",
    role: "Parent"
  },
  {
    id: 6,
    text: "The facilities and resources at Baraka Academy are exceptional. The modern classrooms and sports facilities provide an ideal environment for learning and growth.",
    author: "Impressed Visitor",
    role: "Education Consultant"
  },
  {
    id: 7,
    text: "As an alumnus, I can confidently say that Baraka Academy laid a strong foundation for my success. The values and education I received here have been invaluable throughout my career.",
    author: "Successful Alumnus",
    role: "Former Student"
  },
  {
    id: 8,
    text: "The teachers' dedication to each student's success is remarkable. They go above and beyond to ensure every child reaches their full potential in a nurturing environment.",
    author: "Appreciative Father",
    role: "Parent"
  }
];

export default function TestimonialSlider() {
  const [currentSet, setCurrentSet] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const cardsPerView = 4;
  const totalSets = Math.ceil(testimonials.length / cardsPerView);

  const nextSet = () => {
    setCurrentSet((prev) => (prev === totalSets - 1 ? 0 : prev + 1));
    setExpandedCard(null); // Collapse any expanded card when changing sets
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev === 0 ? totalSets - 1 : prev - 1));
    setExpandedCard(null); // Collapse any expanded card when changing sets
  };

  // Get current set of testimonials to display
  const getCurrentTestimonials = () => {
    const startIndex = currentSet * cardsPerView;
    return testimonials.slice(startIndex, startIndex + cardsPerView);
  };

  const handleCardClick = (cardId: number) => {
    if (expandedCard === cardId) {
      // If clicking the same card that's already expanded, collapse it and resume auto-play
      setExpandedCard(null);
      setIsAutoPlaying(true);
    } else {
      // Expand the clicked card and pause auto-play
      setExpandedCard(cardId);
      setIsAutoPlaying(false);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(nextSet, 5000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, currentSet]); // Add dependencies to restart interval when auto-play resumes

  const currentTestimonials = getCurrentTestimonials();

  return (
    <div className="w-full">
      {/* Auto-play Status Indicator (optional - you can remove this if you don't want it) */}
      <div className="text-center mb-4">
        {/* <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          <div className={`w-2 h-2 rounded-full mr-2 ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></div>
          <span>{isAutoPlaying ? 'Auto-rotating' : 'Paused - Reading'}</span>
        </div> */}
      </div>

      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {currentTestimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            onClick={() => handleCardClick(testimonial.id)}
            className={`bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-all duration-300 cursor-pointer ${
              expandedCard === testimonial.id 
                ? 'h-80 transform scale-105 z-10' // Expanded state
                : 'h-64 hover:scale-102' // Normal state with slight hover scale
            }`}
            style={{
              transform: expandedCard === testimonial.id ? 'scale(1.05)' : 'scale(1)',
              zIndex: expandedCard === testimonial.id ? 10 : 1
            }}
          >
            {/* Quote Icon */}
            <div className="text-blue-500 text-2xl mb-2">"</div>
            
            {/* Testimonial Text */}
            <div className={`mb-4 overflow-hidden transition-all duration-300 ${
              expandedCard === testimonial.id ? 'flex-1' : 'h-24'
            }`}>
              <p className={`text-gray-700 text-sm leading-relaxed ${
                expandedCard === testimonial.id 
                  ? 'line-clamp-none' // Show all text when expanded
                  : 'line-clamp-4' // Limit to 4 lines when collapsed
              }`}>
                {testimonial.text}
              </p>
            </div>
            
            {/* Author Info - Always visible at bottom */}
            <div className="border-t border-gray-100 pt-3 mt-auto">
              <p className="font-semibold text-gray-800 text-sm">{testimonial.author}</p>
              <p className="text-blue-600 text-xs">{testimonial.role}</p>
            </div>

            {/* Expand/Collapse Indicator */}
            <div className="text-center mt-2">
              <div className={`inline-flex items-center text-blue-500 text-xs transition-all duration-300 ${
                expandedCard === testimonial.id ? 'opacity-100' : 'opacity-70'
              }`}>
                {/* <span>{expandedCard === testimonial.id ? 'Click to collapse' : 'Click to read more'}</span> */}
                <svg 
                  className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                    expandedCard === testimonial.id ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center space-x-4">
        {/* Previous Button */}
        <button
          onClick={prevSet}
          className="bg-white hover:bg-blue-50 text-blue-600 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300"
          aria-label="Previous testimonials"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Page Indicators */}
        <div className="flex space-x-2">
          {Array.from({ length: totalSets }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSet(index);
                setExpandedCard(null);
                setIsAutoPlaying(true); // Resume auto-play when manually navigating
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSet 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-blue-300 hover:bg-blue-400'
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSet}
          className="bg-white hover:bg-blue-50 text-blue-600 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300"
          aria-label="Next testimonials"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}