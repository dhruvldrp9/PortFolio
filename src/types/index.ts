export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  image_url: string;
  github_url?: string;
  live_url?: string;
  category: string;
  is_live_demo: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  category: string;
  tags: string[];
  reading_time: number;
  created_at: string;
}

export interface Certification {
  id: number;
  name: string;
  organization: string;
  date_achieved: string;
  description: string;
  verification_url?: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}
