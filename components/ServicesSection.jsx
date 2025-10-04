'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Globe, Heart, Zap, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const ServicesSection = () => {
  const { t } = useTranslation()
  const [hoveredService, setHoveredService] = useState(null)
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

  const services = [
    {
      id: 1,
      title: t('services.ieltsTitle'),
      description: t('services.ieltsDescription'),
      icon: <Target className="w-8 h-8" />,
      features: [t('services.ieltsFeature1'), t('services.ieltsFeature2'), t('services.ieltsFeature3'), t('services.ieltsFeature4')],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: 2,
      title: t('services.businessTitle'),
      description: t('services.businessDescription'),
      icon: <Users className="w-8 h-8" />,
      features: [t('services.businessFeature1'), t('services.businessFeature2'), t('services.businessFeature3'), t('services.businessFeature4')],
      color: "from-black to-gray-800",
    },
    {
      id: 3,
      title: t('services.onlineTitle'),
      description: t('services.onlineDescription'),
      icon: <Globe className="w-8 h-8" />,
      features: [t('services.onlineFeature1'), t('services.onlineFeature2'), t('services.onlineFeature3'), t('services.onlineFeature4')],
      color: "from-yellow-500 to-yellow-700",
    },
    {
      id: 4,
      title: t('services.privateTitle'),
      description: t('services.privateDescription'),
      icon: <Heart className="w-8 h-8" />,
      features: [t('services.privateFeature1'), t('services.privateFeature2'), t('services.privateFeature3'), t('services.privateFeature4')],
      color: "from-gray-700 to-black",
    },
    {
      id: 5,
      title: t('services.intensiveTitle'),
      description: t('services.intensiveDescription'),
      icon: <Zap className="w-8 h-8" />,
      features: [t('services.intensiveFeature1'), t('services.intensiveFeature2'), t('services.intensiveFeature3'), t('services.intensiveFeature4')],
      color: "from-yellow-600 to-yellow-800",
    },
    {
      id: 6,
      title: t('services.academicTitle'),
      description: t('services.academicDescription'),
      icon: <BookOpen className="w-8 h-8" />,
      features: [t('services.academicFeature1'), t('services.academicFeature2'), t('services.academicFeature3'), t('services.academicFeature4')],
      color: "from-gray-800 to-black",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse ${isRTL ? 'right-10' : 'left-10'}`}></div>
        <div className={`absolute top-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1000 ${isRTL ? 'left-20' : 'right-20'}`}></div>
        <div className={`absolute bottom-20 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-500 ${isRTL ? 'right-1/4' : 'left-1/4'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('services.subtitle')}
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
              <div className={`relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 h-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl ${isRTL ? 'text-right' : 'text-left'}`}>
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div className={`relative z-10 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div
                    className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        animate={{
                          opacity: hoveredService === service.id ? 1 : 0.7,
                          x: hoveredService === service.id ? 0 : (isRTL ? 10 : -10),
                        }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-3 text-right gap-2' : 'space-x-3 text-left'}`}
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
            {t('services.exploreButton')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}