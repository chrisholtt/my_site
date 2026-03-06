"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/lib/blogs";
import { experiences } from "@/lib/experience";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="lg:flex lg:justify-between lg:gap-4 max-w-7xl mx-auto px-10 py-12 md:py-24 lg:px-0 lg:py-0">
      {/* Left Column - Sticky */}
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:pl-10 lg:overflow-hidden">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Chris Holt
            </h1>
            <span className="inline-flex items-center rounded-md bg-violet-400/10 px-2.5 py-0.5 text-xs font-medium text-violet-300 ring-1 ring-inset ring-violet-400/30">
              v5.0
            </span>
          </div>
          <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
            Full Stack Engineer
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
          
          {/* Navigation - Desktop only */}
          <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
            <ul className="w-max space-y-3">
              <li>
                <a href="#about" className="group flex items-center py-3 cursor-pointer">
                  <span className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground ${
                    activeSection === "about" ? "w-16 bg-foreground" : "w-8 bg-muted-foreground"
                  }`}></span>
                  <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-foreground group-focus-visible:text-foreground ${
                    activeSection === "about" ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    About
                  </span>
                </a>
              </li>
              <li>
                <a href="#experience" className="group flex items-center py-3 cursor-pointer">
                  <span className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground ${
                    activeSection === "experience" ? "w-16 bg-foreground" : "w-8 bg-muted-foreground"
                  }`}></span>
                  <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-foreground group-focus-visible:text-foreground ${
                    activeSection === "experience" ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    Experience
                  </span>
                </a>
              </li>
              <li>
                <a href="#projects" className="group flex items-center py-3 cursor-pointer">
                  <span className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground ${
                    activeSection === "projects" ? "w-16 bg-foreground" : "w-8 bg-muted-foreground"
                  }`}></span>
                  <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-foreground group-focus-visible:text-foreground ${
                    activeSection === "projects" ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    Projects
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Social Links */}
        <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
          <li>
            <a
              href="https://github.com/chrisholtt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-violet-300 transition-colors cursor-pointer"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/chris-holt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-violet-300 transition-colors cursor-pointer"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
          </li>
        </ul>
      </header>

      {/* Right Column - Scrollable Content */}
      <motion.main
        variants={pageTransition}
        initial="hidden"
        animate="show"
        className="pt-24 lg:w-1/2 lg:py-24 lg:pr-10"
      >
        {/* About */}
        <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
            <h2 className="text-sm font-bold uppercase tracking-widest">About</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Back in 2018, I stumbled into web development while trying to build a simple landing page 
              for a side project. What started as tweaking HTML and CSS quickly spiraled into a deep dive 
              into JavaScript, frameworks, and the endless rabbit hole of modern web development. Fast-forward 
              to today, and I've had the privilege of building software for startups, enterprise companies, 
              and everything in between.
            </p>
            <p>
              When I'm not coding, you can find me exploring the Scottish Highlands, experimenting with 
              digital art, or diving into the latest frontend frameworks and tooling. I'm always eager 
              to learn new technologies and share knowledge with the developer community.
            </p>
            <p>
              I also occasionally write about web development, sharing insights on system design, 
              performance optimization, and the lessons learned from building production applications. 
              Check out my <a href="#projects" className="font-medium text-foreground hover:text-primary transition-colors cursor-pointer">projects</a> to 
              see what I've been working on.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
            <h2 className="text-sm font-bold uppercase tracking-widest">Experience</h2>
          </div>
          <div>
            <ul className="group/list space-y-12">
              {experiences.map((experience) => (
                <li key={experience.id} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:opacity-100! lg:group-hover/list:opacity-50 cursor-pointer">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                    {experience.period}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug">
                      <div className="group/link">
                        <span className="inline-flex items-baseline font-medium leading-tight text-base group-hover/link:text-violet-300 transition-colors">
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded lg:-inset-x-6 lg:block"></span>
                          <span>{experience.title}</span>
                          {experience.company && (
                            <>
                              <span className="mx-2">·</span>
                              <span className="text-muted-foreground">{experience.company}</span>
                            </>
                          )}
                        </span>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      {experience.description}
                    </p>
                    {experience.techStack && experience.techStack.length > 0 && (
                      <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
                        {experience.techStack.map((tech) => (
                          <li key={tech}>
                            <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
            <h2 className="text-sm font-bold uppercase tracking-widest">Projects</h2>
          </div>
          <div>
            <ul className="group/list space-y-12">
              {blogs.map((blog) => (
                <li key={blog.id} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:opacity-100! lg:group-hover/list:opacity-50 cursor-pointer">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 mb-2 mt-1 sm:col-span-2">
                    <Image
                      src={blog.imageSrc}
                      alt={blog.title}
                      width={200}
                      height={48}
                      className="rounded border-2 border-muted/40 transition group-hover:border-muted/60"
                    />
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug">
                      <Link href={`/blog/${blog.id}`} className="inline-flex items-baseline font-medium leading-tight group/link text-base group-hover:text-violet-300 transition-colors">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded lg:-inset-x-6 lg:block"></span>
                        <span>{blog.title}</span>
                        <svg className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      {blog.excerpt}
                    </p>
                    {blog.techStack && blog.techStack.length > 0 && (
                      <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
                        {blog.techStack.slice(0, 5).map((tech) => (
                          <li key={tech}>
                            <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </motion.main>
    </div>
  );
}
