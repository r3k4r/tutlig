'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Globe, Award, Target } from 'lucide-react'



export const AboutUsSection = () => {
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
            From humble beginnings to global recognition, discover how we&apos;ve transformed English learning for thousands
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