"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useAnimation } from "framer-motion"
import {
  ChevronDown,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Users,
  Globe,
  Award,
  Target,
  Zap,
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

const Navbar = () => {
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
              Touring Institute
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

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for right-to-left, -1 for left-to-right
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const intervalRef = useRef(null)
  const x = useMotionValue(0)

  const newsItems = [
    {
      id: 1,
      title: "New IELTS Preparation Course Launched",
      description: "Join our comprehensive IELTS preparation program with expert instructors and proven strategies.",
      image: "/placeholder.svg?height=400&width=800",
      date: "March 15, 2024",
    },
    {
      id: 2,
      title: "Student Success: 95% Pass Rate Achievement",
      description:
        "Our students continue to excel with outstanding results in international English proficiency tests.",
      image: "/placeholder.svg?height=400&width=800",
      date: "March 10, 2024",
    },
    {
      id: 3,
      title: "Online Learning Platform Now Available",
      description: "Access our courses from anywhere with our new interactive online learning platform.",
      image: "/placeholder.svg?height=400&width=800",
      date: "March 5, 2024",
    },
    {
      id: 4,
      title: "Corporate English Training Programs",
      description: "Enhance your team's communication skills with our specialized corporate training solutions.",
      image: "/placeholder.svg?height=400&width=800",
      date: "February 28, 2024",
    },
    {
      id: 5,
      title: "Summer Intensive Courses Registration Open",
      description: "Accelerate your English learning with our intensive summer programs starting June 2024.",
      image: "/placeholder.svg?height=400&width=800",
      date: "February 20, 2024",
    },
  ]

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying && !isDragging) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const nextSlide =
            direction === 1 ? (prev + 1) % newsItems.length : prev === 0 ? newsItems.length - 1 : prev - 1
          return nextSlide
        })
      }, 4000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, isDragging, direction, newsItems.length])

  const handleDragEnd = (event, info) => {
    setIsDragging(false)
    const threshold = 50

    if (info.offset.x > threshold) {
      // Dragged right - go to previous slide
      setCurrentSlide((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1))
    } else if (info.offset.x < -threshold) {
      // Dragged left - go to next slide
      setCurrentSlide((prev) => (prev + 1) % newsItems.length)
    }
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1))
  }

  const toggleDirection = () => {
    setDirection((prev) => prev * -1)
  }

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 bg-black overflow-hidden">
      {/* News Slides */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: direction === 1 ? 300 : -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -300 : 300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative w-full h-full">
              <img
                src={newsItems[currentSlide].image || "/placeholder.svg"}
                alt={newsItems[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4 sm:px-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4"
                  >
                    {newsItems[currentSlide].title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 text-gray-200"
                  >
                    {newsItems[currentSlide].description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-yellow-400 font-medium text-sm sm:text-base"
                  >
                    {newsItems[currentSlide].date}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Circular Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-yellow-400 scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Direction Toggle Button - Hidden on mobile */}
      <button
        onClick={toggleDirection}
        className="hidden sm:block absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full text-sm transition-all duration-200"
      >
        {direction === 1 ? "← Auto" : "Auto →"}
      </button>

      {/* Auto-play Indicator - Hidden on mobile */}
      <div className="hidden sm:flex absolute top-4 left-4 items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-400" : "bg-red-400"}`} />
        <span className="text-white text-sm">{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
      </div>
    </div>
  )
}

const AboutUsSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0)

  const timelineItems = [
    {
      year: "2010",
      title: "Foundation",
      description:
        "Touring Institute was established with a vision to revolutionize English learning through innovative teaching methods.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description:
        "Launched our first online learning platform, making quality English education accessible worldwide.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      year: "2018",
      title: "Recognition",
      description: "Achieved international accreditation and recognition for excellence in English language education.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Innovation Leader",
      description:
        "Today, we continue to lead with cutting-edge teaching methods and personalized learning experiences.",
      icon: <Target className="w-6 h-6" />,
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-black rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6"
          >
            Our Journey of Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From humble beginnings to global recognition, discover how we've transformed English learning for thousands
            of students worldwide.
          </motion.p>
        </div>

        {/* Interactive Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Timeline Navigation */}
          <div className="space-y-4 sm:space-y-6">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`cursor-pointer p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeTimeline === index
                    ? "border-yellow-400 bg-yellow-50 shadow-lg"
                    : "border-gray-200 bg-white hover:border-yellow-300 hover:shadow-md"
                }`}
                onClick={() => setActiveTimeline(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div
                    className={`p-2 sm:p-3 rounded-full ${
                      activeTimeline === index ? "bg-yellow-400 text-black" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2">
                      <span className="text-xl sm:text-2xl font-bold text-yellow-600">{item.year}</span>
                      <h3 className="text-lg sm:text-xl font-semibold text-black">{item.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Content */}
          <div className="relative">
            <motion.div
              key={activeTimeline}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-black rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
                <div className="relative z-10">
                  <div className="text-4xl sm:text-6xl font-bold text-yellow-400 mb-4">
                    {timelineItems[activeTimeline].year}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">{timelineItems[activeTimeline].title}</h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    {timelineItems[activeTimeline].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6 sm:mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-2">10,000+</div>
                <div className="text-sm sm:text-base text-gray-600">Students Taught</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-2">95%</div>
                <div className="text-sm sm:text-base text-gray-600">Success Rate</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      id: 1,
      title: "IELTS & TOEFL Prep",
      description: "Comprehensive test preparation with proven strategies and expert guidance.",
      icon: <Target className="w-8 h-8" />,
      features: ["Mock Tests", "Score Prediction", "Personal Coaching", "Study Materials"],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: 2,
      title: "Business English",
      description: "Professional communication skills for corporate success and career advancement.",
      icon: <Users className="w-8 h-8" />,
      features: ["Presentation Skills", "Email Writing", "Meeting Facilitation", "Negotiation"],
      color: "from-black to-gray-800",
    },
    {
      id: 3,
      title: "Online Learning",
      description: "Flexible, interactive courses accessible from anywhere in the world.",
      icon: <Globe className="w-8 h-8" />,
      features: ["Live Sessions", "Recorded Lessons", "Interactive Exercises", "Progress Tracking"],
      color: "from-yellow-500 to-yellow-700",
    },
    {
      id: 4,
      title: "Private Tutoring",
      description: "One-on-one personalized instruction tailored to your specific needs.",
      icon: <Heart className="w-8 h-8" />,
      features: ["Custom Curriculum", "Flexible Schedule", "Personal Attention", "Rapid Progress"],
      color: "from-gray-700 to-black",
    },
    {
      id: 5,
      title: "Intensive Courses",
      description: "Accelerated learning programs for rapid English proficiency improvement.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Fast-Track Learning", "Immersive Experience", "Daily Practice", "Quick Results"],
      color: "from-yellow-600 to-yellow-800",
    },
    {
      id: 6,
      title: "Academic Writing",
      description: "Master academic writing skills for university success and research excellence.",
      icon: <BookOpen className="w-8 h-8" />,
      features: ["Essay Structure", "Research Methods", "Citation Styles", "Thesis Writing"],
      color: "from-gray-800 to-black",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover our comprehensive range of English learning services designed to meet every student's unique needs
            and goals.
          </motion.p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 h-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: hoveredService === service.id ? 1 : 0.7,
                          x: hoveredService === service.id ? 0 : -10,
                        }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400 transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

const StaffMarqueeSection = () => {
  const staffMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Director & Lead Instructor",
      image: "/placeholder.svg?height=120&width=120",
      specialization: "IELTS & Academic English",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business English Specialist",
      image: "/placeholder.svg?height=120&width=120",
      specialization: "Corporate Training",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "ESL Coordinator",
      image: "/placeholder.svg?height=120&width=120",
      specialization: "Beginner & Intermediate",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "TOEFL Expert",
      image: "/placeholder.svg?height=120&width=120",
      specialization: "Test Preparation",
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Conversation Coach",
      image: "/placeholder.svg?height=120&width=120",
      specialization: "Speaking & Pronunciation",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Academic Writing Tutor",
      image: "/placeholder.svg?height=120&width=120",
      specialization: "Research & Essays",
    },
    {
      id: 7,
      name: "Maria Garcia",
      role: "Online Learning Manager",
      image: "/placeholder.svg?height=120&width=120",
      specialization: "Digital Education",
    },
    {
      id: 8,
      name: "Robert Kim",
      role: "Curriculum Developer",
      image: "/placeholder.svg?height=120&width=120",
      specialization: "Course Design",
    },
  ]

  // Duplicate staff for seamless loop
  const duplicatedStaff = [...staffMembers, ...staffMembers]

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Dedicated professionals committed to your English learning success
          </p>
        </div>

        {/* Staff Marquee */}
        <div className="relative group">
          <div
            className="flex w-max animate-marquee gap-4 sm:gap-8"
            style={{ animationPlayState: 'running' }}
            onMouseEnter={e => { e.currentTarget.style.animationPlayState = 'paused' }}
            onMouseLeave={e => { e.currentTarget.style.animationPlayState = 'running' }}
          >
            {duplicatedStaff.map((staff, index) => (
              <div
                key={`${staff.id}-${index}`}
                className="flex-shrink-0 w-64 sm:w-80 hover:scale-105 transition-transform duration-300"
              >
                <div className="rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-yellow-400/30">
                  {/* Staff Image */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto relative">
                      <img
                        src={staff.image || "/placeholder.svg"}
                        alt={staff.name}
                        className="w-full h-full rounded-full object-cover border-4 border-yellow-400"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Staff Info */}
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{staff.name}</h3>
                    <p className="text-yellow-600 font-semibold mb-3 text-sm sm:text-base">{staff.role}</p>
                    <div className="inline-block bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                      <span className="text-xs sm:text-sm text-gray-700">{staff.specialization}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interaction Hint */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-gray-500">
            Hover to pause • Infinite auto-scrolling
          </p>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-32 h-32 border border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-400 rounded-full"></div>
      </div>

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
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 sm:mb-6">Touring Institute</h3>
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
              © {currentYear} Touring Institute. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center sm:justify-end space-x-6 text-sm"
            >
              <a href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* News Slider Section */}
      <NewsSlider />

      {/* About Us section with interactive timeline */}
      <AboutUsSection />

      {/* Services section with hexagonal grid and hover effects */}
      <ServicesSection />

      {/* Staff Marquee Section */}
      <StaffMarqueeSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
