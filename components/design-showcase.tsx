"use client"

import { motion } from "framer-motion"
import { Palette, Figma, Smartphone, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DesignShowcase() {
  const designSkills = [
    {
      icon: Palette,
      title: "Visual Design",
      description: "Creating beautiful, cohesive visual experiences with attention to color, typography, and layout",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Eye,
      title: "User Experience",
      description: "Designing intuitive user journeys and interactions that solve real problems",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Crafting responsive experiences that work seamlessly across all devices",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Figma,
      title: "Design Tools",
      description: "Proficient in modern design tools for prototyping and collaboration",
      color: "from-purple-500 to-violet-500",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Design Philosophy
          </h3>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            I believe great design is invisible - it should feel natural and effortless while solving complex problems.
            My approach combines creativity with functionality to create meaningful digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full group">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 text-center leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-white/10 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-white mb-4">Currently Learning & Growing</h4>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-purple-300">Design Tools</h5>
                  <ul className="space-y-2 text-white/80">
                    <li>• Figma (Advanced)</li>
                    <li>• Adobe XD</li>
                    <li>• Framer</li>
                    <li>• Principle</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-pink-300">Development</h5>
                  <ul className="space-y-2 text-white/80">
                    <li>• Advanced CSS/SCSS</li>
                    <li>• JavaScript (Improving)</li>
                    <li>• React Basics</li>
                    <li>• Angular (Learning)</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-blue-300">Focus Areas</h5>
                  <ul className="space-y-2 text-white/80">
                    <li>• User Research</li>
                    <li>• Interaction Design</li>
                    <li>• Design Systems</li>
                    <li>• Accessibility</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
