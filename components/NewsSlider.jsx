'use client'

import  { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useMotionValue } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslation } from 'react-i18next'

export const NewsSlider = () => {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1) 
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [isRTL, setIsRTL] = useState(false)
  const intervalRef = useRef(null)
  const x = useMotionValue(0)

  // Check for RTL direction changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setIsRTL(document.body.classList.contains('rtl'))
        }
      })
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    })

    // Initial check
    setIsRTL(document.body.classList.contains('rtl'))

    return () => observer.disconnect()
  }, [])

  const newsItems = [
    {
      id: 2,
      title: t('hero.slide2Title'),
      description: t('hero.slide2Description'),
      image: "https://yeira-panel.s3.amazonaws.com/posts/March2023/Bh0ilVMZUzUxEXJECgks.png",
      date: t('hero.slide2Date'),
    },
    {
      id: 3,
      title: t('hero.slide3Title'),
      description: t('hero.slide3Description'),
      image: "https://www.shutterstock.com/image-vector/online-learning-home-during-outbreak-260nw-1747453175.jpg",
      date: t('hero.slide3Date'),
    },
    {
      id: 4,
      title: t('hero.slide4Title'),
      description: t('hero.slide4Description'),
      image: "https://thumbs.dreamstime.com/b/remote-learning-virtual-class-kids-teleconference-online-education-stay-home-watching-female-teacher-book-points-to-flipchart-196343666.jpg",
      date: t('hero.slide4Date'),
    },
    {
      id: 5,
      title: t('hero.slide5Title'),
      description: t('hero.slide5Description'),
      image: "/news.jpg",
      date: t('hero.slide5Date'),
    },
  ]

  // // Auto-scroll functionality
  // useEffect(() => {
  //   if (isAutoPlaying && !isDragging) {
  //     intervalRef.current = setInterval(() => {
  //       setCurrentSlide((prev) => {
  //         const nextSlide =
  //           direction === 1 ? (prev + 1) % newsItems.length : prev === 0 ? newsItems.length - 1 : prev - 1
  //         return nextSlide
  //       })
  //     }, 4000)
  //   }

  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current)
  //     }
  //   }
  // }, [isAutoPlaying, isDragging, direction, newsItems.length])

  const handleDragEnd = (event, info) => {
    setIsDragging(false)
    const threshold = 50

    if (isRTL) {
      // RTL: Dragged left - go to previous slide, right - go to next slide
      if (info.offset.x < -threshold) {
        setCurrentSlide((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1))
      } else if (info.offset.x > threshold) {
        setCurrentSlide((prev) => (prev + 1) % newsItems.length)
      }
    } else {
      // LTR: Dragged right - go to previous slide, left - go to next slide
      if (info.offset.x > threshold) {
        setCurrentSlide((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1))
      } else if (info.offset.x < -threshold) {
        setCurrentSlide((prev) => (prev + 1) % newsItems.length)
      }
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
            initial={{ opacity: 0, x: (direction === 1 ? (300) : (-300)) }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: (direction === 1 ? (-300) : (300)) }}
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
                <div className={`text-center text-white max-w-5xl px-4 sm:px-6`}>
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
        className={`absolute top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110 ${isRTL ? 'right-2 sm:right-4' : 'left-2 sm:left-4'}`}
      >
        {isRTL ? <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" /> : <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />}
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110 ${isRTL ? 'left-2 sm:left-4' : 'right-2 sm:right-4'}`}
      >
        {isRTL ? <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" /> : <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />}
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