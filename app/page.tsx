"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import {ArrowUpRight} from "lucide-react";
import { experiences } from "@/lib/experience"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const fadeInUp = {
    initial: { opacity: 0, x: -20, filter: "blur(10px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "projects", "connect"].map((section, index) => {
               return <motion.button
                  key={section}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() =>
                      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`w-2 hover:h-8 h-4 rounded-full transition-all duration-500 ${
                      activeSection === section
                          ? "bg-foreground h-8"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Navigate to ${section}`}
              />
          })}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <motion.header
          id="intro"
          /*@ts-ignore*/
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <motion.div className="space-y-3 sm:space-y-2" variants={fadeInUp} transition={{
                delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1]
              }}>
                <div className="text-sm text-muted-foreground tracking-wider">PORTFOLIO / 2026</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Jack
                  <br />
                  <span className="text-muted-foreground">Patterson</span>
                </h1>
              </motion.div>

              <motion.div className="space-y-6 max-w-md" variants={fadeInUp} transition={{
                delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1]
              }}>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Software engineer and entrepreneur building
                  <span className="text-foreground"> AI-powered applications</span>,
                  <span className="text-foreground"> Web3 solutions</span>, and scalable
                  <span className="text-foreground"> full-stack platforms</span>.
                  Stevens Institute of Technology alumnus.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground/40 rounded-full"></div>
                    Not open to opportunities
                  </div>
                  <div>Hoboken, NJ</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0"
              variants={fadeInUp} transition={{
              delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1]
            }}
            >
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">AI-Driven Business Development Lead</div>
                  <div className="text-muted-foreground">@ Go!Foton</div>
                  <div className="text-xs text-muted-foreground">Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "Supabase"].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, borderColor: "hsl(var(--muted-foreground))" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.header>

        <motion.section
          id="work"
          /*@ts-ignore*/
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="space-y-12 sm:space-y-16">
            <motion.div
              className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>
              <div className="text-sm text-muted-foreground ">2022 — Present</div>
            </motion.div>

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((job) => (
                <motion.div
                  key={job.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={`/experience/${job.slug}`}
                    className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                  >
                    <div className="lg:col-span-2">
                      <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                        {job.year}
                      </div>
                    </div>

                    <div className="lg:col-span-6 space-y-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-medium flex items-center gap-2">
                          {job.role}
                          <ArrowUpRight
                            size={16}
                            className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-muted-foreground"
                          />
                        </h3>
                        <div className="text-muted-foreground">{job.company}</div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                    </div>

                    <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          /*@ts-ignore*/
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="space-y-12 sm:space-y-16">
            <motion.h2
              className="text-3xl sm:text-4xl font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Featured Projects
            </motion.h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Aventix",
                  excerpt:
                    "Multi-platform ticket logistics and distribution platform leveraging Web3 infrastructure to ensure security, transparency, and authenticity in ticket transactions.",
                  date: "Nov 2022",
                  tech: "Next.js, React Native, Supabase, Blockchain",
                  link: "https://aventix.net",
                },
                {
                  title: "Rinkside",
                  excerpt:
                    "Native iOS app delivering rich NHL stats, charts, and game-day data with smooth animations and a privacy-first design — no analytics, no tracking, all preferences stored on-device.",
                  date: "Jan 2024",
                  tech: "React Native, Expo, TypeScript, NHL Data",
                    link: "https://github.com/JackTPatterson/Rinkside",
                },
                {
                  title: "FRCS",
                  excerpt:
                    "Innovative online international crowd-sourced data collection platform designed for First Robotics Competitions, collecting thousands of submissions from 100+ countries.",
                  date: "Jan 2020",
                  tech: "Python, Django, JavaScript, SQLite",
                },
              ].map((post, index) => (
                <motion.article
                    onClick={()=>{
                        window.open(
                            post.link ? post.link : '#',
                            '_blank'
                        )
                    }}
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                    className="group p-6 sm:p-8 border border-border rounded-lg
           hover:border-muted-foreground/50 hover:shadow-lg
           transition-colors duration-200 cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground ">
                      <span>{post.date}</span>
                      <span>{post.tech}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div
                      className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      <span>View project</span>
                      <ArrowUpRight size={16} className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"/>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="connect"
          /*@ts-ignore*/
          ref={(el) => (sectionsRef.current[3] = el)}
          className="py-20 sm:py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <motion.div
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Not currently open to new opportunities, but always happy to chat about technology, design, and what I'm building.
                </p>

                <div className="space-y-4">
                  <div>
                    <Link
                      href="mailto:jpatterson@jpdigital.studio"
                      className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                    >
                      <span className="text-base sm:text-lg">jpatterson@jpdigital.studio</span>
                      <ArrowUpRight size={16} className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"/>
                    </Link>
                  </div>
                  <div className="text-base sm:text-lg text-muted-foreground">631-569-6601</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-sm text-muted-foreground ">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "Github", url: "#" },
                  { name: "LinkedIn", handle: "LinkedIn", url: "#" },
                  { name: "Aventix", handle: "Co-Founder", url: "#" },
                  { name: "Stevens", handle: "Alumnus", url: "#" },
                ].map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <Link
                      href={social.url}
                      className="group block p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                    >

                      <div className="space-y-2 w-full">
                        <div className={'flex items-center gap-2 w-full justify-between'}>
                        <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                          {social.name}
                        </div>
                          <ArrowUpRight size={16} className="w-4 h-4 group-hover:opacity-100 opacity-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"/>
                        </div>
                        <div className="text-sm text-muted-foreground">{social.handle}</div>
                      </div>

                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.footer
          className="py-12 sm:py-16 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2026 Jack Patterson. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 011.414 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
