"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    id: 1,
    role: "Generative AI Intern",
    company: "Eduskills",
    period: "2024",
    description: "Worked on cutting-edge generative AI projects, developing prompts and implementing AI-powered solutions for various use cases.",
    skills: ["Prompt Engineering", "AI Integration", "Python"],
    color: "primary"
  },
  {
    id: 2,
    role: "Cloud Computing Intern",
    company: "AWS Academy",
    period: "2024",
    description: "Gained hands-on experience with AWS services including EC2, S3, IAM, and cloud architecture best practices.",
    skills: ["AWS EC2", "S3", "IAM", "Cloud Architecture"],
    color: "accent"
  },
  {
    id: 3,
    role: "Web Development Intern",
    company: "IBM",
    period: "2023",
    description: "Developed responsive web applications using modern frameworks and contributed to enterprise-level projects.",
    skills: ["JavaScript", "React", "Node.js", "REST APIs"],
    color: "green"
  }
]

const certifications = [
  {
    id: 1,
    title: "AWS Academy Cloud Foundation",
    issuer: "Amazon Web Services",
    icon: "☁️",
    color: "from-orange-500/20 to-yellow-500/20"
  },
  {
    id: 2,
    title: "Generative AI",
    issuer: "Eduskills",
    icon: "🤖",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    title: "Web Development",
    issuer: "IBM",
    icon: "💻",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 4,
    title: "Flutter Development",
    issuer: "CSC Organization",
    icon: "📱",
    color: "from-cyan-500/20 to-teal-500/20"
  }
]

function TimelineItem({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const colorClasses: Record<string, { dot: string; border: string; text: string }> = {
    primary: { dot: "bg-primary", border: "border-primary/30", text: "text-primary" },
    accent: { dot: "bg-accent", border: "border-accent/30", text: "text-accent" },
    green: { dot: "bg-green-400", border: "border-green-400/30", text: "text-green-400" }
  }

  const colors = colorClasses[experience.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-center gap-8"
    >
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent -translate-x-1/2" />

      {/* Content */}
      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
        <div className={`glass p-6 rounded-2xl border ${colors.border} relative`}>
          {/* Timeline dot */}
          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${colors.dot} ${index % 2 === 0 ? '-right-10' : '-left-10'}`}>
            <div className={`absolute inset-0 rounded-full ${colors.dot} animate-ping opacity-50`} />
          </div>

          <span className={`text-sm font-semibold ${colors.text}`}>{experience.period}</span>
          <h3 className="text-xl font-bold mt-2">{experience.role}</h3>
          <p className={`${colors.text} font-medium mb-3`}>{experience.company}</p>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {experience.description}
          </p>
          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function CertificationCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative glass p-6 rounded-2xl border border-white/5 group-hover:border-primary/30 transition-colors h-full">
        <div className="text-4xl mb-4">{cert.icon}</div>
        <h3 className="font-bold text-lg mb-2 group-hover:gradient-text transition-all">
          {cert.title}
        </h3>
        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Internships Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-semibold">
            Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Internships and hands-on experiences that shaped my expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12 mb-24">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm uppercase tracking-widest font-semibold">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
