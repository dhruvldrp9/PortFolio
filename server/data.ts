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

async function writeJsonFile<T>(filename: string, data: T): Promise<void> {
  const filePath = path.join(dataDir, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
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

// Add new item functions
export async function addProject(project: Omit<Project, 'id' | 'created_at'>): Promise<Project> {
  const data = await readJsonFile<{ projects: Project[] }>('projects.json');
  const newId = Math.max(0, ...data.projects.map(p => p.id)) + 1;
  const newProject = {
    ...project,
    id: newId,
    created_at: new Date().toISOString()
  };
  data.projects.push(newProject);
  await writeJsonFile('projects.json', data);
  return newProject;
}

export async function addBlogPost(post: Omit<BlogPost, 'id' | 'created_at'>): Promise<BlogPost> {
  const data = await readJsonFile<{ posts: BlogPost[] }>('blog-posts.json');
  const newId = Math.max(0, ...data.posts.map(p => p.id)) + 1;
  const newPost = {
    ...post,
    id: newId,
    created_at: new Date().toISOString()
  };
  data.posts.push(newPost);
  await writeJsonFile('blog-posts.json', data);
  return newPost;
}

export async function addCertification(cert: Omit<Certification, 'id'>): Promise<Certification> {
  const data = await readJsonFile<{ certifications: Certification[] }>('certifications.json');
  const newId = Math.max(0, ...data.certifications.map(c => c.id)) + 1;
  const newCert = { ...cert, id: newId };
  data.certifications.push(newCert);
  await writeJsonFile('certifications.json', data);
  return newCert;
}
