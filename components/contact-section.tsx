"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import Script from "next/script"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView && typeof window !== "undefined" && (window as unknown as { VismeEmbed?: { init: () => void } }).VismeEmbed) {
      (window as unknown as { VismeEmbed: { init: () => void } }).VismeEmbed.init()
    }
  }, [isInView])

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Section header */}
          <motion.div 
            className="text-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block text-primary text-xs uppercase tracking-[0.2em] font-semibold mb-3 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Passionate B.Tech student focused on AI, development, and creative digital experiences. 
              Open to collaborations, internships, and exciting opportunities.
            </p>
          </motion.div>

          {/* Form container with premium glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Outer neon glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 rounded-2xl blur-xl opacity-60" />
            
            {/* Animated border */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/60 via-accent/40 to-primary/60 animate-pulse" style={{ animationDuration: '3s' }} />
            
            {/* Main glass container */}
            <div className="relative rounded-2xl bg-[oklch(0.1_0.02_260/0.9)] backdrop-blur-xl border border-white/10 overflow-hidden">
              {/* Inner ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              
              {/* Form embed wrapper with blending */}
              <div className="relative p-3 md:p-4">
                <div 
                  className="relative rounded-xl overflow-hidden"
                  style={{
                    boxShadow: 'inset 0 0 60px oklch(0.1 0.02 260 / 0.8)',
                  }}
                >
                  {/* Dark overlay for top/bottom edges to blend form */}
                  <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[oklch(0.1_0.02_260)] to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[oklch(0.1_0.02_260)] to-transparent z-10 pointer-events-none" />
                  
                  {/* Visme Form Embed */}
                  <div 
                    className="visme_d"
                    data-title="Custom Contact Form"
                    data-url="koejper3-custom-contact-form"
                    data-domain="forms"
                    data-full-page="false"
                    data-min-height="480px"
                    data-form-id="179806"
                    style={{
                      width: "100%",
                      minHeight: "480px",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">Or connect with me on</p>
            <div className="flex justify-center gap-3">
              {[
                { name: "LinkedIn", icon: "in", href: "#" },
                { name: "GitHub", icon: "gh", href: "#" },
                { name: "Twitter", icon: "tw", href: "#" }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-[oklch(0.15_0.02_260/0.8)] backdrop-blur-sm flex items-center justify-center border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="font-semibold text-xs text-foreground/80">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Visme Forms Script */}
      <Script
        src="https://static-bundles.visme.co/forms/vismeforms-embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as unknown as { VismeEmbed?: { init: () => void } }).VismeEmbed) {
            (window as unknown as { VismeEmbed: { init: () => void } }).VismeEmbed.init()
          }
        }}
      />
    </section>
  )
}
