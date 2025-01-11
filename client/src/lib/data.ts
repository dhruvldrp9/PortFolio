import type { Project, BlogPost, Certification, Education } from './types';

export async function getProjects(): Promise<Project[]> {
  const response = await fetch('/data/projects.json');
  const data = await response.json();
  return data.projects;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch('/data/blog-posts.json');
  const data = await response.json();
  return data.posts;
}

export async function getCertifications(): Promise<Certification[]> {
  const response = await fetch('/data/certifications.json');
  const data = await response.json();
  return data.certifications;
}

export async function getEducation(): Promise<Education[]> {
  const response = await fetch('/data/education.json');
  const data = await response.json();
  return data.education;
}

export async function getProjectById(id: number): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find(project => project.id === id);
}

export async function getBlogPostById(id: number): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find(post => post.id === id);
}