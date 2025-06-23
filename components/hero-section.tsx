"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import TypewriterEffect from "@/components/typewriter-effect"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Kulvir Singh
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90"
          >
            Saggu
          </motion.h2>

          <div className="h-16 flex items-center justify-center">
            <TypewriterEffect
              texts={[
                "UI/UX Designer",
                "Frontend Developer",
                "Creative Problem Solver",
                "Design Enthusiast",
                "Web Designer",
              ]}
              className="text-xl sm:text-2xl lg:text-3xl text-purple-300"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Recent B.Tech graduate in Computer Science with expertise in web development, Angular, Firebase, and cloud
            technologies. Passionate about creating innovative solutions and user-centric designs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Kulvir-ss24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Github className="h-6 w-6 text-white" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/kulvir-singh-saggu-a40660233/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Linkedin className="h-6 w-6 text-white" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:kulvirsingh.s2411@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Mail className="h-6 w-6 text-white" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="tel:+917814095709"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Phone className="h-6 w-6 text-white" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            onClick={scrollToAbout}
            className="p-2 text-white/60 hover:text-white transition-colors"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
