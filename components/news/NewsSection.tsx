"use client";

import HeroCarousel from "@/components/news/HeroCarousel";
import NewsSidebar from "@/components/news/NewsSidebar";
import { NewsItem } from "@/types/index";
import React, { useState } from "react";
import { heroSlides, sidebarNews } from "@/app/data/newsData";

const NewsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(sidebarNews[0]);

  const handleNewsClick = (news: NewsItem) => {
    setSelectedNews(news);
  };

  const handleBackToSlides = () => {
    setSelectedNews(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <HeroCarousel
            slides={heroSlides}
            selectedNews={selectedNews}
            onBackClick={handleBackToSlides}
          />
        </div>
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6">
            {/* የቅርብ ጊዜያት */}
            Recent Activities
            </h2>
          <NewsSidebar
            news={sidebarNews}
            onNewsClick={handleNewsClick}
            selectedNewsId={selectedNews?.id}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
