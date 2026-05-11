"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const techBadges = [
  { name: "AWS", color: "from-orange-500/20 to-orange-600/10" },
  { name: "n8n", color: "from-red-500/20 to-red-600/10" },
  { name: "Make.ai", color: "from-purple-500/20 to-purple-600/10" },
  { name: "MERN", color: "from-green-500/20 to-green-600/10" },
  { name: "Flask", color: "from-gray-500/20 to-gray-600/10" },
  { name: "Gen AI", color: "from-blue-500/20 to-blue-600/10" },
]

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="gradient-text">Sashank Varma</span>
              <br />
              <span className="text-foreground">Sagiraju</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              <span className="text-primary">AI Automation</span> &{" "}
              <span className="text-accent">Workflow Operations</span> Specialist
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Building intelligent systems that automate complex workflows, integrate APIs,
              and leverage AI to transform business operations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 rounded-xl overflow-hidden font-semibold"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                <span className="relative text-primary-foreground">View Projects</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl glass border border-primary/30 hover:border-primary/60 transition-colors font-semibold"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {techBadges.map((badge, index) => (
                <motion.span
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`px-4 py-2 rounded-lg bg-gradient-to-r ${badge.color} border border-white/5 text-sm font-medium`}
                >
                  {badge.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-accent/20 rounded-3xl blur-2xl" />
              
              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-primary/30"
              />
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden animated-border">
                <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]">
                  <Image
                    src="/images/sashank-portrait.jpeg"
                    alt="Sashank Varma Sagiraju"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating labels */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-4 top-1/4 glass px-4 py-2 rounded-lg text-sm"
              >
                <span className="text-primary">AI Automation</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-1/2 glass px-4 py-2 rounded-lg text-sm"
              >
                <span className="text-accent">Cloud & APIs</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute left-1/4 -bottom-4 glass px-4 py-2 rounded-lg text-sm"
              >
                <span className="text-green-400">Generative AI</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
