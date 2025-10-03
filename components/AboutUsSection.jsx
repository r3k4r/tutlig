'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Globe, Award, Target } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const AboutUsSection = () => {
  const { t } = useTranslation()
  const [activeTimeline, setActiveTimeline] = useState(0)
  const [isRTL, setIsRTL] = useState(false)

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

  const timelineItems = [
    {
      year: t('aboutUs.timeline1Year'),
      title: t('aboutUs.timeline1Title'),
      description: t('aboutUs.timeline1Description'),
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      year: "",
      title: t('aboutUs.timeline2Title'),
      description: t('aboutUs.timeline2Description'),
      icon: <Globe className="w-6 h-6" />,
    },
    {
      year: "",
      title: t('aboutUs.timeline3Title'),
      description: t('aboutUs.timeline3Description'),
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "",
      title: t('aboutUs.timeline4Title'),
      description: t('aboutUs.timeline4Description'),
      icon: <Target className="w-6 h-6" />,
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-20 w-32 h-32 border-2 border-yellow-400 rounded-full ${isRTL ? 'right-10' : 'left-10'}`}></div>
        <div className={`absolute bottom-20 w-24 h-24 border-2 border-black rounded-full ${isRTL ? 'left-10' : 'right-10'}`}></div>
        <div className={`absolute top-1/2 w-16 h-16 bg-yellow-400 rounded-full ${isRTL ? 'right-1/4' : 'left-1/4'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6"
          >
            {t('aboutUs.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('aboutUs.subtitle')}
          </motion.p>
        </div>

        {/* Interactive Timeline */}
        <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Timeline Navigation */}
          <div className={`space-y-4 sm:space-y-6 ${isRTL ? 'lg:col-start-2' : ''}`}>
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
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
                <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-3 sm:space-x-4' : 'space-x-3 sm:space-x-4'}`}>
                  <div
                    className={`p-2 sm:p-3 rounded-full ${
                      activeTimeline === index ? "bg-yellow-400 text-black" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className={`flex flex-col sm:flex-row sm:items-center mb-2 ${isRTL ? 'sm:flex-row-reverse sm:space-x-3' : 'sm:space-x-3'}`}>
                      {item.year && <span className="text-xl sm:text-2xl font-bold text-yellow-600">{item.year}</span>}
                      <h3 className="text-lg sm:text-xl font-semibold text-black">{item.title}</h3>
                    </div>
                    <p className={`text-sm sm:text-base text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Content */}
          <div className={`relative ${isRTL ? 'lg:col-start-1' : ''}`}>
            <motion.div
              key={activeTimeline}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-black rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
                <div className={`absolute top-0 w-32 h-32 bg-yellow-400 rounded-full -translate-y-16 opacity-20 ${isRTL ? 'left-0 -translate-x-16' : 'right-0 translate-x-16'}`}></div>
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
                <div className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-2">{t('aboutUs.studentsCount')}</div>
                <div className="text-sm sm:text-base text-gray-600">{t('aboutUs.studentsLabel')}</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-2">{t('aboutUs.successRateCount')}</div>
                <div className="text-sm sm:text-base text-gray-600">{t('aboutUs.successRateLabel')}</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}