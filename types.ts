
export interface Service {
  name: string;
  slug: string;
  category: string;
  keywords: string[];
  shortDescription: string;
  longDescription: string;
  priceIndicator: string;
}

export interface Neighborhood {
  name: string;
  slug: string;
  zip: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
