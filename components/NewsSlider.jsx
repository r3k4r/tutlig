'use client'

import  { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useMotionValue } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"


export const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1) 
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
              <Image
                src={newsItems[currentSlide].image || "/placeholder.svg"}
                alt={newsItems[currentSlide].title}
                width={800}
                height={400}
                className="w-full h-full object-cover"
                priority
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
    </div>
  )
}