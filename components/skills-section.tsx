"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Automation & AI",
    color: "primary",
    skills: [
      { name: "Workflow Automation", level: 95 },
      { name: "AI Process Optimization", level: 90 },
      { name: "CRM Automation", level: 85 },
      { name: "Prompt Engineering", level: 88 },
      { name: "Generative AI", level: 85 },
    ]
  },
  {
    title: "Cloud & DevOps",
    color: "accent",
    skills: [
      { name: "AWS EC2", level: 85 },
      { name: "AWS S3", level: 90 },
      { name: "AWS IAM", level: 82 },
      { name: "API Integrations", level: 92 },
      { name: "Networking (TCP/IP, DNS)", level: 78 },
    ]
  },
  {
    title: "Development",
    color: "green",
    skills: [
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "Flask", level: 85 },
      { name: "MERN Stack", level: 82 },
      { name: "MySQL", level: 80 },
    ]
  },
  {
    title: "Soft Skills",
    color: "orange",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Adaptability", level: 92 },
      { name: "Remote Collaboration", level: 88 },
      { name: "Critical Thinking", level: 90 },
    ]
  }
]

const tools = [
  { name: "n8n", icon: "🔄" },
  { name: "Make.ai", icon: "⚡" },
  { name: "Twilio", icon: "📱" },
  { name: "Telegram Bot API", icon: "🤖" },
  { name: "Google Sheets API", icon: "📊" },
  { name: "REST APIs", icon: "🔌" },
]

function SkillBar({ skill, color, delay }: { skill: { name: string; level: number }; color: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const colorClasses: Record<string, string> = {
    primary: "bg-primary",
    accent: "bg-accent",
    green: "bg-green-400",
    orange: "bg-orange-400",
  }

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground">{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${colorClasses[color]}`}
          style={{
            boxShadow: `0 0 10px currentColor`
          }}
        />
      </div>
    </div>
  )
}

function CircularProgress({ value, label, color, delay }: { value: number; label: string; color: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const circumference = 2 * Math.PI * 40
  const strokeDashoffset = circumference - (value / 100) * circumference

  const colorClasses: Record<string, string> = {
    primary: "stroke-primary",
    accent: "stroke-accent",
    green: "stroke-green-400",
    orange: "stroke-orange-400",
  }

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            strokeWidth="8"
            fill="none"
            className={colorClasses[color]}
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : {}}
            transition={{ duration: 1.5, delay, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 6px currentColor)" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold">{value}%</span>
        </div>
      </div>
      <span className="mt-2 text-sm text-muted-foreground text-center">{label}</span>
    </div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-semibold">
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Skills <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional competencies
          </p>
        </motion.div>

        {/* Circular progress overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-3xl mb-12"
        >
          <h3 className="text-xl font-semibold mb-8 text-center">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CircularProgress value={92} label="Automation" color="primary" delay={0.3} />
            <CircularProgress value={88} label="AI & ML" color="accent" delay={0.4} />
            <CircularProgress value={85} label="Cloud" color="green" delay={0.5} />
            <CircularProgress value={90} label="Development" color="orange" delay={0.6} />
          </div>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + catIndex * 0.1 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    category.color === "primary" ? "bg-primary" :
                    category.color === "accent" ? "bg-accent" :
                    category.color === "green" ? "bg-green-400" : "bg-orange-400"
                  }`}
                />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    color={category.color}
                    delay={0.4 + catIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass px-6 py-4 rounded-xl flex items-center gap-3 cursor-default"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
