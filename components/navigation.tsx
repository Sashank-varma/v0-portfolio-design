"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${
            isScrolled ? "glass" : ""
          }`}>
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold gradient-text"
            >
              SVS
            </motion.a>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold"
            >
              Hire Me
            </motion.a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 top-0 w-full h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? "top-2 rotate-45" : ""}`} />
                <span className={`absolute left-0 top-2 w-full h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 top-4 w-full h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? "top-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-2xl font-semibold ${
                    activeSection === item.href.slice(1)
                      ? "gradient-text"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-4 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold"
              >
                Hire Me
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
