"use client";

import React from "react";
import { NewsItem } from "@/types/index";   
import Image from "next/image";
interface NewsSidebarProps {
  news: NewsItem[];
  onNewsClick: (news: NewsItem) => void;
  selectedNewsId?: number;
}

const NewsSidebar: React.FC<NewsSidebarProps> = ({
  news,
  onNewsClick,
  selectedNewsId,
}) => {
  return (
    <div className="space-y-6">
      {news.map((item) => (
        <button
          key={item.id}
          onClick={() => onNewsClick(item)}
          className={`w-full text-left group flex items-start space-x-4 p-2 rounded-lg transition-colors ${
            selectedNewsId === item.id ? "bg-indigo-50" : "hover:bg-gray-50"
          }`}
        >
          <div className="flex-shrink-0 w-20 h-20">
            <Image
              src={item.images[0].url}
              alt={item.title}
              className="w-full h-full object-cover rounded-md"
              width={80}
              height={80}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p
              className={`text-sm font-medium line-clamp-2 transition-colors ${
                selectedNewsId === item.id
                  ? "text-indigo-600"
                  : "text-gray-900 group-hover:text-indigo-600"
              }`}
            >
              {item.title}
            </p>
            <p className="text-sm text-gray-500 line-clamp-2 mt-1">
              {/* {item.excerpt} */}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default NewsSidebar;
