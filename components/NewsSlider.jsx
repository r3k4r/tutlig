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
      title: "Tutelage collaborated with TESOL Spain one of the most well-known International TESOL Associations",
      description: "Tutelage is proud to announce our collaboration with TESOL Spain, enhancing our commitment to providing top-notch English language education.",
      image: "https://www.21kschool.com/gh/wp-content/uploads/sites/33/2022/09/12-Advantages-to-Learning-Online.jpg",
      date: "June 15, 2025",
    },
    {
      id: 2,
      title: "Register now for this month’s VIP group classes",
      description:
        "Join our exclusive VIP group classes this month to experience personalized English learning with expert instructors.",
      image: "https://yeira-panel.s3.amazonaws.com/posts/March2023/Bh0ilVMZUzUxEXJECgks.png",
      date: "July 10, 2025",
    },
    {
      id: 3,
      title: "Your personalized AI tutor is here to help",
      description: "Experience the future of learning with our AI-powered personalized tutor, designed to enhance your English language skills.",
      image: "https://www.shutterstock.com/image-vector/online-learning-home-during-outbreak-260nw-1747453175.jpg",
      date: "Aug 5, 2025",
    },
    {
      id: 4,
      title: "Tutelage now operates its services both locally and globally",
      description: "Tutelage expands its reach! We are now offering our English language services both locally and globally, making quality education accessible to everyone.",
      image: "https://thumbs.dreamstime.com/b/remote-learning-virtual-class-kids-teleconference-online-education-stay-home-watching-female-teacher-book-points-to-flipchart-196343666.jpg",
      date: "February 28, 2025",
    },
    {
      id: 5,
      title: "Read the success Stories of our talented students",
      description: "Discover the inspiring success stories of our talented students who have transformed their English language skills with Tutelage.",
      image: "/news.jpg",
      date: "February 20, 2025",
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