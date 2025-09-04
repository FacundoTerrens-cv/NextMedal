'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

interface Testimonial {
  _key: string;
  rating: number;
  quote: string;
  author: string;
  position: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

export default function TestimonialSlider({ 
  testimonials, 
  autoPlay = true, 
  interval = 5000 
}: TestimonialSliderProps) {
  const { language } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoPlaying, interval, testimonials.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(autoPlay);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!testimonials || testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div 
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Testimonial Content */}
      <div className="text-center transition-all duration-500 ease-in-out">
        {/* Rating Stars */}
        <div className="flex justify-center items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-5 h-5',
                i < currentTestimonial.rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-500'
              )}
            />
          ))}
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
            {currentTestimonial.rating}/5
          </span>
        </div>

        {/* Quote */}
        <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed text-lg">
          "{currentTestimonial.quote}"
        </blockquote>

        {/* Author */}
        <div className="text-sm">
          <div className="font-bold text-gray-900 dark:text-white">
            {currentTestimonial.author}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            {currentTestimonial.position}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-600 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-600 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {testimonials.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-200',
                index === currentIndex
                  ? 'bg-purple-600 dark:bg-purple-400 w-4'
                  : 'bg-gray-300 dark:bg-gray-500 hover:bg-gray-400'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Testimonial Counter */}
      {testimonials.length > 1 && (
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
          {currentIndex + 1} {language === 'no' ? 'av' : 'of'} {testimonials.length}
        </div>
      )}
    </div>
  );
}






