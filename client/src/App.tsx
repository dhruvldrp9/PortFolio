import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import PageTransition from "@/components/layout/page-transition";
import Home from "@/pages/home";
import Education from "@/pages/education";
import Projects from "@/pages/projects";
import ProjectDetail from "@/pages/project-detail";
import Certifications from "@/pages/certifications";
import Blog from "@/pages/blog";
import BlogDetail from "@/pages/blog-detail";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Switch location={location} key={location}>
            <Route path="/">
              <PageTransition>
                <Home />
              </PageTransition>
            </Route>
            <Route path="/education">
              <PageTransition>
                <Education />
              </PageTransition>
            </Route>
            <Route path="/projects">
              <PageTransition>
                <Projects />
              </PageTransition>
            </Route>
            <Route path="/projects/:id">
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
            </Route>
            <Route path="/certifications">
              <PageTransition>
                <Certifications />
              </PageTransition>
            </Route>
            <Route path="/blog">
              <PageTransition>
                <Blog />
              </PageTransition>
            </Route>
            <Route path="/blog/:id">
              <PageTransition>
                <BlogDetail />
              </PageTransition>
            </Route>
            <Route path="/contact">
              <PageTransition>
                <Contact />
              </PageTransition>
            </Route>
            <Route>
              <PageTransition>
                <NotFound />
              </PageTransition>
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;