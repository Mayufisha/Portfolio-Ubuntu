import { useEffect, useState } from "react";

export const projects = [
  {
    title: "SkillSwap 2.0",
    image: "/Images/skillSwap.png",
    alt: "SkillSwap 2.0 Screenshot",
    description:
      "A peer-learning platform with profiles, skill feeds, categories, favorites, and a responsive Tailwind UI.",
    tags: ["React", "Tailwind", "Responsive UI"],
    githubRepo: "Mayufisha/SkillSwap-2.0",
    links: [
      { label: "Live Demo", href: "https://skillswap-2-0.netlify.app/" },
      { label: "GitHub", href: "https://github.com/Mayufisha/SkillSwap-2.0", secondary: true },
    ],
  },
  {
    title: "CareHub",
    role: "Full-stack Developer",
    image: "/Images/carehub_logo.jpg",
    alt: "CareHub logo",
    description:
      "A care-facility platform for residents, medications, staff, MAR records, inventory, and AI handoffs.",
    tags: ["React", "React Native", ".NET 8", "ASP.NET Core", "PostgreSQL", "Docker"],
    githubRepo: "Mayufisha/CareHub",
    links: [{ label: "GitHub", href: "https://github.com/Mayufisha/CareHub" }],
  },
  {
    title: "Stock Broker Application",
    role: "Android/backend Developer",
    image: "/Images/StockBroker.png",
    alt: "Stock Broker Application logo",
    description:
      "A Kotlin trading simulator with buy/sell flows, portfolio tracking, transactions, admin tools, and AI guidance.",
    tags: ["Kotlin", "Jetpack Compose", "Node.js", "Express", "MongoDB", "Firebase Gemini"],
    githubRepo: "Maheep123/Stock_Broker_TheRest",
    links: [{ label: "GitHub", href: "https://github.com/Maheep123/Stock_Broker_TheRest" }],
  },
  {
    title: "Expense Tracker",
    image: "/Images/expense-tracker.png",
    alt: "Expense Tracker Screenshot",
    description: "A .NET MAUI app for expenses, goals, charts, schedules, and monthly budgeting.",
    tags: [".NET MAUI", "C#", "SQLite", "Charts"],
    githubRepo: "Mayufisha/ExpenseTracker",
    links: [{ label: "GitHub", href: "https://github.com/Mayufisha/ExpenseTracker" }],
  },
  {
    title: "Job Application Tracker",
    image: "/Images/Job-tracker-logo.png",
    alt: "Job Application Tracker Screenshot",
    description: "A full-stack CRUD app for job applications with filters, secure login, and responsive design.",
    tags: ["React", "Node", "MongoDB"],
    githubRepo: "Mayufisha/Job-Application-Tracker",
    links: [
      { label: "Live Demo", href: "https://my-job-application-tracker.netlify.app/" },
      { label: "GitHub", href: "https://github.com/Mayufisha/Job-Application-Tracker", secondary: true },
    ],
  },
  {
    title: "A Personal Portfolio",
    image: "/Images/plain-portfolio.png",
    alt: "Personal Portfolio",
    description: "A responsive portfolio for projects, skills, and contact info. Built with HTML, Tailwind, and JavaScript.",
    tags: ["HTML", "Tailwind", "JavaScript"],
    githubRepo: "Mayufisha/Portfolio-2.0",
    links: [
      { label: "Live Demo", href: "https://mayufisha.github.io/Portfolio-2.0" },
      { label: "GitHub", href: "https://github.com/Mayufisha/Portfolio-2.0", secondary: true },
    ],
  },
  {
    title: "Little Lemon Restaurant",
    image: "/Images/little-lemon-preview.png",
    alt: "Little Lemon Restaurant",
    description: "A responsive website for a fictional restaurant with a clean UI and smooth navigation.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubRepo: "Mayufisha/Little-Lemon-Restaurant",
    links: [
      { label: "Live Demo", href: "https://mayufisha.github.io/Little-Lemon-Restaurant/index.html" },
      { label: "GitHub", href: "https://github.com/Mayufisha/Little-Lemon-Restaurant", secondary: true },
    ],
  },
];

function formatRepoName(name) {
  return name.replace(/[-_]/g, " ");
}

function mergeGithubData(project, githubData) {
  const repo = githubData[project.githubRepo];

  if (!repo) {
    return project;
  }

  return {
    ...project,
    title: formatRepoName(repo.name),
    links: project.links.map((link) =>
      link.label === "GitHub" ? { ...link, href: repo.html_url } : link
    ),
  };
}

function ProjectCard({ project }) {
  return (
    <div className="relative bg-slate-900/80 rounded-xl border border-slate-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-amber-500 overflow-hidden">
      {project.role && (
        <p className="absolute left-3 top-3 z-10 rounded bg-slate-950/90 px-3 py-1 text-xs font-semibold text-amber-400">
          {project.role}
        </p>
      )}
      <img src={project.image} alt={project.alt} className="block w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-medium mb-2">{project.title}</h3>
        <p className="text-slate-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-sm mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full border border-slate-700 text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={
                link.secondary
                  ? "border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-100 font-medium py-1 px-4 rounded transition"
                  : "bg-amber-500 hover:bg-amber-600 text-slate-100 font-medium py-1 px-4 rounded transition"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [githubData, setGithubData] = useState({});
  const syncedProjects = projects.map((project) => mergeGithubData(project, githubData));
  const visibleProjects = showMore ? syncedProjects : syncedProjects.slice(0, 6);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGithubData() {
      const repos = [...new Set(projects.map((project) => project.githubRepo).filter(Boolean))];
      const results = await Promise.allSettled(
        repos.map(async (repo) => {
          const response = await fetch(`https://api.github.com/repos/${repo}`, {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          });

          if (!response.ok) {
            throw new Error(`GitHub request failed for ${repo}`);
          }

          const data = await response.json();
          return [repo, { name: data.name, html_url: data.html_url }];
        })
      );

      const nextGithubData = {};
      results.forEach((result) => {
        if (result.status === "fulfilled") {
          const [repo, data] = result.value;
          nextGithubData[repo] = data;
        }
      });

      setGithubData(nextGithubData);
    }

    loadGithubData().catch((error) => {
      if (error.name !== "AbortError") {
        console.error(error);
      }
    });

    return () => controller.abort();
  }, []);

  return (
    <section id="projects" className="min-h-screen py-16 bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-semibold text-center tracking-tight mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {syncedProjects.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowMore((current) => !current)}
              className="bg-amber-500 hover:bg-amber-600 text-slate-100 font-semibold py-2 px-6 rounded transition"
            >
              {showMore ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
