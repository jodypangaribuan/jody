import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "John Doe | Portfolio" },
    { name: "description", content: "Professional portfolio showcasing my skills, projects and experience in web development" },
  ];
};

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      let currentSection = activeSection;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-poppins font-bold text-primary-600 dark:text-primary-400">
              John<span className="text-slate-900 dark:text-white">Doe</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#home" isActive={activeSection === "home"}>Home</NavLink>
              <NavLink href="#about" isActive={activeSection === "about"}>About</NavLink>
              <NavLink href="#skills" isActive={activeSection === "skills"}>Skills</NavLink>
              <NavLink href="#projects" isActive={activeSection === "projects"}>Projects</NavLink>
              <NavLink href="#contact" isActive={activeSection === "contact"}>Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-900 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-2">
              <div className="flex flex-col space-y-3">
                <MobileNavLink href="#home" isActive={activeSection === "home"} onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                <MobileNavLink href="#about" isActive={activeSection === "about"} onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
                <MobileNavLink href="#skills" isActive={activeSection === "skills"} onClick={() => setIsMenuOpen(false)}>Skills</MobileNavLink>
                <MobileNavLink href="#projects" isActive={activeSection === "projects"} onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
                <MobileNavLink href="#contact" isActive={activeSection === "contact"} onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 animate-slide-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Hi, I'm <span className="text-primary-600 dark:text-primary-400">John Doe</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-6">
                  Full Stack Developer
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
                  I create elegant, efficient, and user-friendly web applications.
                  I'm passionate about crafting digital experiences that are both beautiful and functional.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#projects"
                    className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-primary-500 hover:dark:border-primary-500 text-slate-900 dark:text-white rounded-lg transition-colors"
                  >
                    View Projects
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 mt-12 md:mt-0 animate-slide-right">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto animate-float">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-primary-300 rounded-full opacity-20 blur-3xl"></div>
                  <div className="relative bg-white dark:bg-slate-800 border-2 border-primary-100 dark:border-primary-900 rounded-full w-full h-full overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl">
                      👨‍💻
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-6">
            <SectionHeading>About Me</SectionHeading>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                I'm a passionate Full Stack Developer with expertise in creating beautiful and functional web applications. 
                With a background in both front-end and back-end development, I enjoy solving complex problems and turning 
                ideas into reality through clean, efficient code.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                My journey in web development began 5 years ago, and I've since worked with a variety of technologies 
                and frameworks. I believe in writing code that is not only functional but also maintainable and scalable.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or enjoying outdoor activities like hiking and photography.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-6">
            <SectionHeading>My Skills</SectionHeading>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="mb-3 text-3xl">{skill.icon}</div>
                    <h3 className="font-medium text-slate-900 dark:text-white">{skill.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-6">
            <SectionHeading>Featured Projects</SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all animate-fade-in border border-slate-100 dark:border-slate-700"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center">
                    <span className="text-4xl">{project.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <a 
                        href={project.link} 
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <SectionHeading>Get In Touch</SectionHeading>
            
            <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-100 dark:border-slate-700">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 text-primary-600 dark:text-primary-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Email</p>
                        <a href="mailto:john@example.com" className="text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
                          john@example.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 text-primary-600 dark:text-primary-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Location</p>
                        <p className="text-slate-900 dark:text-white">New York, USA</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h4 className="text-slate-900 dark:text-white font-medium mb-3">Connect with me</h4>
                    <div className="flex space-x-4">
                      <SocialLink href="https://github.com/" icon="GitHub" />
                      <SocialLink href="https://linkedin.com/" icon="LinkedIn" />
                      <SocialLink href="https://twitter.com/" icon="Twitter" />
                      <SocialLink href="https://dribbble.com/" icon="Dribbble" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Send a Message</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">Have a question or want to work together?</p>

                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-sm mt-2">
            Built with Remix and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

// Navigation components
function NavLink({ href, isActive, children }: { href: string; isActive: boolean; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className={`text-sm font-medium transition-colors ${
        isActive
          ? "text-primary-600 dark:text-primary-400"
          : "text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400"
      }`}
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, isActive, onClick, children }: { href: string; isActive: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`block py-2 px-4 rounded-md transition-colors ${
        isActive
          ? "text-primary-600 dark:text-primary-400 bg-slate-100 dark:bg-slate-800"
          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400"
      }`}
    >
      {children}
    </a>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        {children}
      </h2>
      <div className="mt-3 mx-auto w-24 h-1 bg-primary-600 dark:bg-primary-400"></div>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 transition-colors"
      aria-label={icon}
    >
      {
        icon === "GitHub" ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        ) : icon === "LinkedIn" ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        ) : icon === "Twitter" ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm9.164 13.986c-.322 1.877-1.223 3.89-2.553 5.033-.93.59-1.388.432-1.767-.336-.342-.695-2.8-6.986-3.476-9.146-.447-1.42.156-1.86 1.24-1.533.264.08.548.21.85.404.3.193.465.575.496 1.145.032.57-.216 1.448-.744 2.634-.527 1.185-.63 1.776-.311 1.776.319 0 1.12-1.015 1.12-2.11 0-.421.277-.49.793-.207.517.284.517.67.532 1.386.016.72-.81 2.275-.834 2.83-.23.556.295.74.69.398.834-.723 1.416-1.897 1.752-3.521.217-1.045.357-2.138.357-2.89 0-1.59-.988-2.433-1.417-2.756-.429-.322-.413-.658.147-.974.558-.317 1.88-.728 1.88.474 0 .347.055.702.162 1.066.107.364.231.72.371 1.066.227.558.479 1.025.758 1.399.28.374.574.69.882.947.31.257.629.433.957.53.33.94.668.142 1.017.142.349 0 .944-.462.88-1.247-.065-.784.691-5.286-4.187-5.286-4.878 0-7.104 4.602-7.104 7.971 0 3.37 2.058 6.778 6.023 6.778 2.79 0 4.938-1.298 6.44-3.894.179-.31.05-.714-.287-.831-.337-.116-.464-.785-.321-1.198z" clipRule="evenodd" />
          </svg>
        )
      }
    </a>
  );
}

// Data
const skills = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "📘" },
  { name: "HTML/CSS", icon: "🎨" },
  { name: "Node.js", icon: "🖥️" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Remix", icon: "🚀" },
  { name: "UI/UX Design", icon: "✏️" },
  { name: "Git", icon: "🔄" },
  { name: "RESTful APIs", icon: "🔌" },
  { name: "GraphQL", icon: "⚙️" },
  { name: "Responsive Design", icon: "📱" }
];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A fully-featured online shopping platform with cart and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://github.com/",
    icon: "🛍️"
  },
  {
    title: "Task Management App",
    description: "A productivity app to help teams organize and track their projects.",
    technologies: ["TypeScript", "React", "Firebase"],
    link: "https://github.com/",
    icon: "📋"
  },
  {
    title: "Fitness Tracker",
    description: "Mobile app to track workouts, nutrition, and personal fitness goals.",
    technologies: ["React Native", "Redux", "Express"],
    link: "https://github.com/",
    icon: "💪"
  },
  {
    title: "Personal Blog",
    description: "A responsive blog built with modern web technologies.",
    technologies: ["Remix", "Tailwind CSS", "Markdown"],
    link: "https://github.com/",
    icon: "✍️"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps and forecasts.",
    technologies: ["JavaScript", "Weather API", "Chart.js"],
    link: "https://github.com/",
    icon: "🌤️"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics platform for tracking engagement across social platforms.",
    technologies: ["React", "Next.js", "OAuth"],
    link: "https://github.com/",
    icon: "📊"
  }
];
