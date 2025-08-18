'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'


export default function Navbar (){
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    {
      name: "Home",
      href: "/",
      dropdown: null,
    },
    {
      name: "Tests",
      href: "/tests",
      dropdown: [
        { name: "IELTS Preparation", href: "/tests/ielts" },
        { name: "TOEFL Preparation", href: "/tests/toefl" },
        { name: "Practice Tests", href: "/tests/practice" },
        { name: "Mock Exams", href: "/tests/mock" },
      ],
    },
    {
      name: "ESL",
      href: "/esl",
      dropdown: [
        { name: "Beginner Level", href: "/esl/beginner" },
        { name: "Intermediate Level", href: "/esl/intermediate" },
        { name: "Advanced Level", href: "/esl/advanced" },
        { name: "Business English", href: "/esl/business" },
      ],
    },
    {
      name: "Courses",
      href: "/courses",
      dropdown: [
        { name: "General English", href: "/courses/general" },
        { name: "Academic English", href: "/courses/academic" },
        { name: "Conversation Classes", href: "/courses/conversation" },
        { name: "Writing Workshop", href: "/courses/writing" },
      ],
    },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Private Tutoring", href: "/services/tutoring" },
        { name: "Group Classes", href: "/services/group" },
        { name: "Online Learning", href: "/services/online" },
        { name: "Corporate Training", href: "/services/corporate" },
      ],
    },
    {
      name: "Contact",
      href: "/contact",
      dropdown: null,
    },
  ]

  return (
    <nav className="bg-black border-b border-yellow-400/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} className="text-yellow-400 font-bold text-xl">
              Tutelage
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.a
                    href={item.href}
                    className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors duration-200"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                    {item.dropdown && (
                      <motion.div
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    )}
                  </motion.a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-sm border border-yellow-400/20 rounded-lg shadow-xl overflow-hidden"
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem, index) => (
                            <motion.a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-sm text-white hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ x: 4 }}
                            >
                              {dropdownItem.name}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-yellow-400 p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-sm border-t border-yellow-400/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-sm transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}