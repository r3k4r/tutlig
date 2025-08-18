'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail,  } from 'lucide-react'
import { motion } from 'framer-motion'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  const courses = [
    { name: "IELTS Preparation", href: "/courses/ielts" },
    { name: "TOEFL Preparation", href: "/courses/toefl" },
    { name: "Business English", href: "/courses/business" },
    { name: "Academic Writing", href: "/courses/writing" },
    { name: "ESL Programs", href: "/courses/esl" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
  ]

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Institute Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 sm:mb-6">Tutelage</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  Empowering students worldwide with innovative English learning solutions. Join thousands who have
                  achieved their language goals with us.
                </p>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-800 hover:bg-yellow-400 hover:text-black p-3 rounded-full transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 4 }}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Courses */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Popular Courses</h4>
                <ul className="space-y-3">
                  {courses.map((course) => (
                    <li key={course.name}>
                      <motion.a
                        href={course.href}
                        whileHover={{ x: 4 }}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                      >
                        {course.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Contact Us</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-sm sm:text-base">123 Education Street</p>
                      <p className="text-gray-300 text-sm sm:text-base">Learning City, LC 12345</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <a
                      href="tel:+1234567890"
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <a
                      href="mailto:info@touringinstitute.com"
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                    >
                      info@touringinstitute.com
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="mt-6">
                  <h5 className="text-base sm:text-lg font-medium text-white mb-3">Office Hours</h5>
                  <div className="text-gray-300 text-sm sm:text-base space-y-1">
                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm sm:text-base text-center sm:text-left"
            >
              © {currentYear} Tutelage. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center sm:justify-end space-x-6 text-sm"
            >
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}