"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  const experience = {
    company: "O7 Services",
    position: "Frontend Development & Design Trainee",
    location: "Punjab, India",
    duration: "July 2023 – August 2024",
    type: "Design & Development Training",
    description:
      "Comprehensive training program focusing on frontend development and UI/UX design principles. Gained hands-on experience in creating user-centered web applications with modern design practices.",
    responsibilities: [
      "Designed and developed responsive user interfaces with focus on user experience",
      "Created wireframes and prototypes for web applications",
      "Implemented modern CSS techniques and responsive design patterns",
      "Collaborated on design systems and component libraries",
      "Conducted user research and usability testing",
      "Optimized interfaces for performance and accessibility",
      "Learned industry design tools and development workflows",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Figma", "Adobe XD", "Firebase", "Responsive Design"],
    achievements: [
      "Successfully designed and developed 2 major web applications",
      "Gained expertise in modern UI/UX design principles",
      "Learned to balance aesthetics with functionality",
      "Developed strong eye for visual design and user experience",
    ],
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Experience & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-b border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-white mb-2">{experience.position}</CardTitle>
                    <div className="flex items-center space-x-4 text-white/80">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20 w-fit">
                      <Calendar className="h-3 w-3 mr-1" />
                      {experience.duration}
                    </Badge>
                    <Badge variant="outline" className="bg-purple-500/20 border-purple-400/30 text-purple-300 w-fit">
                      {experience.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8 space-y-8">
                <div>
                  <p className="text-white/80 text-lg leading-relaxed">{experience.description}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3" />
                    Key Responsibilities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {experience.responsibilities.map((responsibility, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 text-white/70"
                      >
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-3 text-yellow-400" />
                    Key Achievements
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {experience.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 text-white/70"
                      >
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="outline"
                          className="bg-white/5 border-white/20 text-white/80 hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
