"use client"

import { useEffect, useState } from "react"
import { useScroll } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import ParticlesBackground from "@/components/particles-background"
import ScrollProgress from "@/components/scroll-progress"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
        <ParticlesBackground />
        <ScrollProgress />
        <Navigation />

        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  )
}
