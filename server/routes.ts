import type { Express } from "express";
import { createServer, type Server } from "http";
import {
  getProjects,
  getBlogPosts,
  getCertifications,
  getEducation,
  type Project,
  type BlogPost,
  type Certification
} from "./data";

export function registerRoutes(app: Express): Server {
  // Projects
  app.get("/api/projects", async (_req, res) => {
    try {
      const data = await getProjects();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const projects = await getProjects();
      const project = projects.find(p => p.id === parseInt(req.params.id));
      if (!project) {
        res.status(404).send("Project not found");
        return;
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });

  // Blog Posts
  app.get("/api/blog-posts", async (_req, res) => {
    try {
      const data = await getBlogPosts();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog-posts/:id", async (req, res) => {
    try {
      const posts = await getBlogPosts();
      const post = posts.find(p => p.id === parseInt(req.params.id));
      if (!post) {
        res.status(404).send("Blog post not found");
        return;
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  // Certifications
  app.get("/api/certifications", async (_req, res) => {
    try {
      const data = await getCertifications();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch certifications" });
    }
  });

  // Education
  app.get("/api/education", async (_req, res) => {
    try {
      const data = await getEducation();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch education data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}