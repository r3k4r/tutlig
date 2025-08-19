'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail,  } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
    { name: "General English", href: "/generalenglish" },
    { name: "Academic English", href: "/academicenglish" },
    { name: "Business English", href: "/businessbnglish" },
    { name: "Preparation Test", href: "/preparationtest" },
    { name: "ESP", href: "/esp" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/share/1EXoYc3xG4/" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/tutelage.esl?igsh=MWhhZmhlZzJ1MTB2ZA==" },
  ]

  return (
    <footer className="bg-black text-white relative overflow-hidden border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">
        {/* Main Footer Content */}
        <div className="py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 lg:gap-20">
            {/* Institute Info */}
            <div className="lg:col-span-1 flex flex-col justify-between h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className='flex items-center space-x-4 mb-4'>
                  <Image className='mb-2' src={'/logo.png'} alt='logo' width={56} height={56} />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Tutelage</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base max-w-xs">
                  Empowering students worldwide with innovative English learning solutions.<br />Join thousands who have achieved their language goals with us.
                </p>
                {/* Social Media Links */}
                <div className="flex space-x-3 mt-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-800 hover:bg-yellow-400 hover:text-black p-2.5 rounded-full transition-all duration-300 shadow-sm"
                      aria-label={social.name}
                      target="_blank"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links (section intentionally left as comment for future use)
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
            </div> */}

            {/* Courses */}
            <div className="md:col-span-1">
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
            <div className="md:col-span-1">
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
                      <p className="text-gray-300 text-sm sm:text-base">Suli Innovation house</p>
                      <p className="text-gray-300 text-sm sm:text-base">Sulaimaniyah - Kurdistan Region</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <div className="flex flex-col">
                      <a
                        href="tel:+9647501534240"
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                      >
                        (964+) 07501534240
                      </a>
                      <a
                        href="tel:+9647701946364"
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                      >
                        (964+) 07701946364
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <a
                      href="mailto:Info@tutelage.krd"
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                    >
                      Info@tutelage.krd
                    </a>
                  </div>
                </div>
                {/* Office Hours */}
                <div className="mt-6">
                  <h5 className="text-base sm:text-lg font-medium text-white mb-3">Office Hours</h5>
                  <div className="text-gray-300 text-sm sm:text-base space-y-1">
                    <p>Sunday : 1:00 PM - 5:00 PM</p>
                    <p>Tuesday: 1:00 PM - 5:00 PM</p>
                    <p>Thursday: 1:00 PM - 5:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-5 sm:py-7">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-500 text-xs sm:text-sm text-center md:text-left"
            >
              © {currentYear} Tutelage. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-xs sm:text-sm"
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