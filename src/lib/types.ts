export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceCaseStudy {
  title: string;
  neighborhood: string;
  projectType: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceContent {
  benefits: ServiceBenefit[];
  processSteps: ServiceProcessStep[];
  caseStudy: ServiceCaseStudy;
  faqs: ServiceFAQ[];
  localContext: string;
  maintenanceTips: string[];
  whyChooseUs: string;
  relatedServices: string[];
}

export interface Service {
  name: string;
  slug: string;
  category: string;
  keywords: string[];
  shortDescription: string;
  longDescription: string;
  priceIndicator: string;
  content?: ServiceContent;
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
