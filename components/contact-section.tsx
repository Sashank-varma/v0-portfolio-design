"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import Script from "next/script"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const formContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Re-initialize Visme form when component mounts or becomes visible
    if (isInView && typeof window !== "undefined" && (window as unknown as { VismeEmbed?: { init: () => void } }).VismeEmbed) {
      (window as unknown as { VismeEmbed: { init: () => void } }).VismeEmbed.init()
    }
  }, [isInView])

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-primary text-sm uppercase tracking-widest font-semibold">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Passionate B.Tech student focused on AI, development, and creative digital experiences. 
              Open to collaborations, internships, and exciting opportunities.
            </p>
          </motion.div>

          {/* Glassmorphism container for the form */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Animated border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-30 blur-sm animate-pulse" />
            
            <div 
              ref={formContainerRef}
              className="relative glass rounded-3xl p-6 md:p-10 shadow-2xl"
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
              
              {/* Visme Form Embed */}
              <div className="relative w-full">
                <div 
                  className="visme_d"
                  data-title="Custom Contact Form"
                  data-url="koejper3-custom-contact-form"
                  data-domain="forms"
                  data-full-page="false"
                  data-min-height="500px"
                  data-form-id="179806"
                  style={{
                    width: "100%",
                    minHeight: "500px"
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Social links below form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground text-sm mb-4">Or connect with me on</p>
            <div className="flex justify-center gap-4">
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
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center border border-white/5 hover:border-primary/30 transition-colors"
                  aria-label={social.name}
                >
                  <span className="font-bold text-sm">{social.icon}</span>
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
