export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  tags: string[];
  image: string;
  supportImage?: string;
  featured?: boolean;
  relatedPostSlugs?: string[];
}
