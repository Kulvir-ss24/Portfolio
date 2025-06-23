"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, GraduationCap, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import DesignShowcase from "@/components/design-showcase"

export default function AboutSection() {
  const personalInfo = [
    { icon: Calendar, label: "Date of Birth", value: "November 24, 2003" },
    { icon: MapPin, label: "Location", value: "Phagwara, Punjab, India" },
    { icon: GraduationCap, label: "Education", value: "B.Tech in Computer Science" },
    { icon: Target, label: "Focus", value: "Full Stack Development & UI/UX" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center"
              >
                <div className="w-72 h-72 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-6xl font-bold">
                  KS
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Career Objective</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                A passionate B.Tech graduate in Computer Science with a strong focus on UI/UX design and frontend
                development. Currently specializing in creating beautiful, user-centered digital experiences through
                modern design principles and clean code. Eager to grow as a designer-developer hybrid, combining
                technical skills with creative vision to build engaging web applications that users love.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                          <info.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white/60 text-sm">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-white/10"
            >
              <h4 className="text-xl font-semibold text-white mb-3">Contact Information</h4>
              <div className="space-y-2 text-white/80">
                <p>📧 kulvirsingh.s2411@gmail.com</p>
                <p>📱 +91 7814095709</p>
                <p>📍 New Sukhchain Nagar, Phagwara, Punjab, India 144401</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <DesignShowcase />
      </div>
    </section>
  )
}
