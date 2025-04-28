"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { NewsSlide, NewsItem } from "@/types/index";

interface HeroCarouselProps {
  slides: NewsSlide[];
  selectedNews: NewsItem | null;
  onBackClick: () => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides,
  selectedNews,
  onBackClick,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentNewsImage, setCurrentNewsImage] = useState(0);

  const nextSlide = () => {
    if (selectedNews) {
      setCurrentNewsImage((prev) =>
        prev === selectedNews.images.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (selectedNews) {
      setCurrentNewsImage((prev) =>
        prev === 0 ? selectedNews.images.length - 1 : prev - 1
      );
    } else {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  const goToSlide = (index: number) => {
    if (selectedNews) {
      setCurrentNewsImage(index);
    } else {
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    if (!selectedNews) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentSlide, selectedNews]);

  useEffect(() => {
    setCurrentNewsImage(0);
  }, [selectedNews]);

  if (selectedNews) {
    // Calculate a safe index, default to 0 if currentNewsImage is out of bounds
    const safeImageIndex = currentNewsImage >= selectedNews.images.length ? 0 : currentNewsImage;

    return (
      <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img
            src={selectedNews.images[safeImageIndex].url}
            alt={selectedNews.title}
            className="h-full w-full object-cover"
          />
          {/* <div className="absolute top-4 left-4 z-30">
            <button
              onClick={onBackClick}
              className="flex items-center space-x-2 text-white bg-black/30 hover:bg-black/50 rounded-full px-4 py-2 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to slides</span>
            </button>
          </div> */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {selectedNews.title}
            </h2>
            {/* <p className="text-lg mb-4">{selectedNews.excerpt}</p> */}
            {selectedNews.images[safeImageIndex].caption && (
              <p className="text-sm opacity-75 mb-2">
                {selectedNews.images[safeImageIndex].caption}
              </p>
            )}
          </div>
        </div>

        {selectedNews.images.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              onClick={prevSlide}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              onClick={nextSlide}
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
              {selectedNews.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentNewsImage ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {slide.title}
            </h2>
            <p className="mb-4">{slide.description}</p>
            <div className="text-sm opacity-75">{slide.date}</div>
          </div>
        </div>
      ))}

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
