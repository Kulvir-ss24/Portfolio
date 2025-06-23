"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kulvirsingh.s2411@gmail.com",
      href: "mailto:kulvirsingh.s2411@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7814095709",
      href: "tel:+917814095709",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Phagwara, Punjab, India",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Kulvir-ss24",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kulvir-singh-saggu-a40660233/",
      color: "hover:text-blue-400",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology and development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="block"
                  >
                    <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg`}>
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="text-white/60 text-sm">{info.label}</p>
                            <p className="text-white font-medium">{info.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 text-white ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-white/10"
            >
              <h4 className="text-xl font-semibold text-white mb-3">Let's Work Together</h4>
              <p className="text-white/80">
                I'm currently looking for new opportunities and interesting projects. Whether you have a project in mind
                or just want to connect, I'd love to hear from you!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 py-3"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/60">© 2024 Kulvir Singh Saggu. Built with Next.js, TypeScript, and lots of ☕</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
