import type { Project, BlogPost, Certification } from "@/types";

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

export async function getEducation() {
  const response = await fetch('/data/education.json');
  const data = await response.json();
  return data.education;
}