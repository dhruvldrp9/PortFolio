import { Octokit } from "@octokit/rest";
import type { Project } from "@db/schema";

export class GitHubService {
  private octokit: Octokit;
  
  constructor(token: string) {
    this.octokit = new Octokit({ auth: token });
  }

  async getRepositories(username: string): Promise<Omit<Project, "id">[]> {
    try {
      const { data: repos } = await this.octokit.repos.listForUser({
        username,
        sort: "updated",
        direction: "desc",
        per_page: 100,
      });

      const projects: Omit<Project, "id">[] = [];

      for (const repo of repos) {
        if (!repo.fork && !repo.private) { // Only include non-fork, public repos
          // Fetch languages for the repo
          const { data: languages } = await this.octokit.repos.listLanguages({
            owner: username,
            repo: repo.name,
          });

          // Get README content for description
          let description = repo.description || "";
          try {
            const { data: readme } = await this.octokit.repos.getReadme({
              owner: username,
              repo: repo.name,
            });
            const readmeContent = Buffer.from(readme.content, 'base64').toString();
            // Extract first paragraph from README if no description
            if (!description) {
              description = readmeContent.split('\n\n')[0].replace(/[#\n]/g, ' ').trim();
            }
          } catch (error) {
            // README not found, use repo description
          }

          projects.push({
            title: repo.name,
            description: description,
            technologies: Object.keys(languages).join(", "),
            image_url: "https://opengraph.githubassets.com/1/" + repo.full_name, // GitHub's OpenGraph image
            github_url: repo.html_url,
            live_url: repo.homepage || null,
            created_at: new Date(repo.created_at),
            github_id: repo.id,
            github_stars: repo.stargazers_count,
            github_forks: repo.forks_count,
            github_last_updated: new Date(repo.updated_at),
            github_languages: languages,
            github_topics: repo.topics || [],
          });
        }
      }

      return projects;
    } catch (error) {
      throw new Error(`Failed to fetch GitHub repositories: ${error.message}`);
    }
  }
}
