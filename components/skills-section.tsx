"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend & Design",
      icon: Code,
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "UI/UX Design", level: 80 },
        { name: "Bootstrap", level: 80 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Design Tools & Frameworks",
      icon: Database,
      skills: [
        { name: "Figma", level: 75 },
        { name: "Adobe XD", level: 70 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Responsive Design", level: 85 },
        { name: "Prototyping", level: 75 },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Development & Cloud",
      icon: Cloud,
      skills: [
        { name: "Firebase", level: 70 },
        { name: "Git", level: 75 },
        { name: "AWS Basics", level: 60 },
        { name: "Angular (Learning)", level: 50 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Creative & Soft Skills",
      icon: Wrench,
      skills: [
        { name: "Creative Problem Solving", level: 85 },
        { name: "User Research", level: 70 },
        { name: "Wireframing", level: 80 },
        { name: "Visual Design", level: 85 },
      ],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-white text-xl">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white/90 font-medium">{skill.name}</span>
                        <span className="text-white/60 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-white/10 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Certifications & Achievements</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-purple-300">Professional Certifications</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• Full Stack Development Certification</li>
                    <li>• AWS Data Center Technician</li>
                    <li>• AWS Cloud Foundation</li>
                    <li>• Excel Skills for Business: Essentials</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-pink-300">Key Achievements</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• 6-weeks Industrial Training at O7 Services</li>
                    <li>• Developed multiple web applications</li>
                    <li>• Expertise in Angular & Firebase integration</li>
                    <li>• Strong foundation in cloud technologies</li>
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
