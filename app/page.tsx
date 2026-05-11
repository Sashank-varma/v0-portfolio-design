"use client"

import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

// Dynamically import 3D scene to avoid SSR issues
const Scene3D = dynamic(
  () => import("@/components/scene-3d").then((mod) => mod.Scene3D),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 3D Background */}
      <Scene3D />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
