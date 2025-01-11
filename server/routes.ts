import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { projects, blogPosts, certifications, contacts } from "@db/schema";
import { desc, eq } from "drizzle-orm";

export function registerRoutes(app: Express): Server {
  // Projects
  app.get("/api/projects", async (_req, res) => {
    const data = await db.query.projects.findMany({
      orderBy: desc(projects.created_at),
    });
    res.json(data);
  });

  app.get("/api/projects/:id", async (req, res) => {
    const data = await db.query.projects.findFirst({
      where: eq(projects.id, parseInt(req.params.id)),
    });
    if (!data) {
      res.status(404).send("Project not found");
      return;
    }
    res.json(data);
  });

  // Blog Posts
  app.get("/api/blog-posts", async (_req, res) => {
    const data = await db.query.blogPosts.findMany({
      orderBy: desc(blogPosts.created_at),
    });
    res.json(data);
  });

  // Certifications
  app.get("/api/certifications", async (_req, res) => {
    const data = await db.query.certifications.findMany({
      orderBy: desc(certifications.date_achieved),
    });
    res.json(data);
  });

  // Contacts
  app.post("/api/contacts", async (req, res) => {
    try {
      await db.insert(contacts).values({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
      });
      res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
