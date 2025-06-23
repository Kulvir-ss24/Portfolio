"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Gym Haven & Nutrition",
      description:
        "A modern fitness web application focused on user experience and clean design. Features intuitive navigation, responsive layouts, and engaging visual elements to help users manage their fitness journey effectively.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Firebase", "UI/UX Design"],
      date: "July 2023",
      type: "Web Design & Development",
      features: [
        "Modern, clean UI design",
        "Responsive mobile-first approach",
        "Intuitive user experience",
        "Visual fitness tracking",
        "Engaging animations",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Strategix - Notes App",
      description:
        "A student-focused notes application with emphasis on usability and accessibility. Designed with a clean, distraction-free interface that makes studying and resource sharing effortless for college students.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "User Research"],
      date: "August 2024",
      type: "UX/UI Design Project",
      features: [
        "Student-centered design",
        "Clean, minimal interface",
        "Easy resource discovery",
        "Mobile-optimized experience",
        "Accessibility focused",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, animated portfolio showcasing design skills and creative vision. Features smooth animations, interactive elements, and a carefully crafted user experience that tells a compelling story.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "UI/UX Design"],
      date: "Current",
      type: "Portfolio Design",
      features: [
        "Creative visual storytelling",
        "Smooth micro-interactions",
        "Responsive design system",
        "Performance optimized",
        "Accessibility compliant",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden group">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 space-y-6">
                    <CardHeader className="p-0">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                          <Calendar className="h-3 w-3 mr-1" />
                          {project.date}
                        </Badge>
                        <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                          <Code className="h-3 w-3 mr-1" />
                          {project.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <p className="text-white/80 leading-relaxed">{project.description}</p>

                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="text-white/70 flex items-center"
                            >
                              <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-white/5 border-white/20 text-white/80 hover:bg-white/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </Button>
                        <Button className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0`}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </div>

                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="h-full min-h-[400px] bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center"
                    >
                      <div
                        className={`w-32 h-32 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl`}
                      >
                        {project.title
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
