export interface NewsSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export interface NewsImage {
  url: string;
  caption?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  images: NewsImage[];
  url: string;
}
