import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '..', 'data');

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  image_url: string;
  github_url?: string;
  live_url?: string;
  created_at: string;
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

export interface Education {
  id: number;
  institution: string;
  degree: string;
  dates: string;
  achievements: string[];
  coursework: string[];
}

async function readJsonFile<T>(filename: string): Promise<T> {
  const filePath = path.join(dataDir, filename);
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function getProjects(): Promise<Project[]> {
  const data = await readJsonFile<{ projects: Project[] }>('projects.json');
  return data.projects;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const data = await readJsonFile<{ posts: BlogPost[] }>('blog-posts.json');
  return data.posts;
}

export async function getCertifications(): Promise<Certification[]> {
  const data = await readJsonFile<{ certifications: Certification[] }>('certifications.json');
  return data.certifications;
}

export async function getEducation(): Promise<Education[]> {
  const data = await readJsonFile<{ education: Education[] }>('education.json');
  return data.education;
}