import { pgTable, text, serial, timestamp, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  technologies: text("technologies").notNull(),
  image_url: text("image_url").notNull(),
  github_url: text("github_url"),
  live_url: text("live_url"),
  created_at: timestamp("created_at").defaultNow().notNull(),
  // GitHub specific fields
  github_id: integer("github_id").unique(),
  github_stars: integer("github_stars"),
  github_forks: integer("github_forks"),
  github_last_updated: timestamp("github_last_updated"),
  github_languages: jsonb("github_languages"),
  github_topics: text("github_topics").array(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  tags: text("tags").array().notNull(),
  reading_time: integer("reading_time").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull()
});

export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  organization: text("organization").notNull(),
  date_achieved: timestamp("date_achieved").notNull(),
  description: text("description").notNull(),
  verification_url: text("verification_url")
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull()
});

export const insertProjectSchema = createInsertSchema(projects);
export const selectProjectSchema = createSelectSchema(projects);
export const insertBlogPostSchema = createInsertSchema(blogPosts);
export const selectBlogPostSchema = createSelectSchema(blogPosts);
export const insertCertificationSchema = createInsertSchema(certifications);
export const selectCertificationSchema = createSelectSchema(certifications);
export const insertContactSchema = createInsertSchema(contacts);
export const selectContactSchema = createSelectSchema(contacts);

export type Project = typeof projects.$inferSelect;
export type BlogPost = typeof blogPosts.$inferSelect;
export type Certification = typeof certifications.$inferSelect;
export type Contact = typeof contacts.$inferSelect;