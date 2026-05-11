"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "AI-Powered Appointment Booking System",
    description: "An intelligent appointment scheduling system leveraging AI to automate booking workflows, send reminders, and optimize scheduling efficiency.",
    tags: ["n8n", "AI", "Twilio", "APIs"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: "📅",
    features: ["Smart Scheduling", "Automated Reminders", "Calendar Integration"]
  },
  {
    id: 2,
    title: "Full-Stack House Rental Application",
    description: "A comprehensive MERN stack application for property listings, tenant management, and rental transactions with secure payment integration.",
    tags: ["MERN", "MongoDB", "Node.js", "React"],
    gradient: "from-green-500/20 to-emerald-500/20",
    icon: "🏠",
    features: ["Property Listings", "User Authentication", "Payment Integration"]
  },
  {
    id: 3,
    title: "AI-Based Resume Shortlisting Automation",
    description: "Automated resume screening system using AI to analyze, score, and shortlist candidates based on job requirements and skill matching.",
    tags: ["Python", "AI", "Flask", "NLP"],
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: "📄",
    features: ["AI Scoring", "Skill Matching", "Automated Filtering"]
  },
  {
    id: 4,
    title: "AI-Driven Workflow Automation Suite",
    description: "Enterprise-grade workflow automation platform integrating multiple services with intelligent routing, error handling, and monitoring.",
    tags: ["n8n", "Make.ai", "APIs", "AWS"],
    gradient: "from-orange-500/20 to-red-500/20",
    icon: "⚡",
    features: ["Multi-Service Integration", "Error Handling", "Real-time Monitoring"]
  },
  {
    id: 5,
    title: "Employee Management System",
    description: "Comprehensive HR management solution with attendance tracking, leave management, performance reviews, and payroll integration.",
    tags: ["MERN", "MySQL", "REST APIs"],
    gradient: "from-indigo-500/20 to-blue-500/20",
    icon: "👥",
    features: ["Attendance Tracking", "Leave Management", "Performance Reviews"]
  },
  {
    id: 6,
    title: "Rapid Prototyping Projects",
    description: "Collection of quick-turnaround projects demonstrating versatility in building MVPs, proof-of-concepts, and experimental features.",
    tags: ["React", "Node.js", "Flask", "APIs"],
    gradient: "from-teal-500/20 to-cyan-500/20",
    icon: "🚀",
    features: ["Fast Development", "MVP Creation", "Experimentation"]
  }
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative glass rounded-3xl p-6 h-full border border-white/5 group-hover:border-primary/30 transition-colors duration-300 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        </div>

        {/* Icon */}
        <motion.div
          animate={{ y: isHovered ? -5 : 0, scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="text-4xl mb-4"
        >
          {project.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-4 space-y-2">
          {project.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover glow line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left"
        />
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-semibold">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI automation, full-stack development, and workflow optimization
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
