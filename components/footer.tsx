"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="text-center md:text-left">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text"
            >
              Sashank Varma Sagiraju
            </motion.span>
            <p className="text-muted-foreground text-sm mt-2">
              AI Automation & Workflow Operations Specialist
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {[
              { name: "LinkedIn", href: "#" },
              { name: "GitHub", href: "#" },
              { name: "Twitter", href: "#" }
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">{social.name}</span>
                <span className="text-xs font-bold">
                  {social.name.slice(0, 2)}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Built with badge */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-muted-foreground text-sm">
            Built with <span className="text-primary">Next.js</span>, <span className="text-accent">Three.js</span>, and <span className="text-green-400">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
