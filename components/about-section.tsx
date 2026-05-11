"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm uppercase tracking-widest font-semibold"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold mt-4 mb-6"
            >
              Crafting <span className="gradient-text">Intelligent Systems</span>
            </motion.h2>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3 text-primary">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m an AI Automation & Workflow Operations Specialist passionate about 
                  transforming complex business processes into streamlined, intelligent systems. 
                  With expertise spanning cloud platforms, API integrations, and generative AI, 
                  I bridge the gap between cutting-edge technology and practical business solutions.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3 text-accent">What I Do</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From designing end-to-end automation workflows with n8n and Make.ai to 
                  building scalable applications on AWS, I specialize in creating systems 
                  that work smarter, not harder. My focus is on operational optimization 
                  that delivers measurable business impact.
                </p>
              </div>
            </motion.div>

            {/* Right column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3 text-green-400">My Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in building systems that are not just functional but elegant. 
                  Every automation I design considers scalability, maintainability, and 
                  the human experience. Technology should amplify human potential, not 
                  complicate it.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Workflow Automation",
                    "AI Integration",
                    "CRM Systems",
                    "API Development",
                    "Cloud Architecture",
                    "Chatbot Systems",
                    "Process Optimization"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { value: "10+", label: "Projects Completed" },
              { value: "5+", label: "Technologies Mastered" },
              { value: "4", label: "Certifications" },
              { value: "3", label: "Internships" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
