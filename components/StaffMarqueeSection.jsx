'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const StaffMarqueeSection = () => {
  const { t } = useTranslation()
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

  const sponsors = [
    { id: 1, image: '/fol.png', alt: 'FOL Sponsor' },
    { id: 2, image: '/itt.png', alt: 'ITTT Sponsor' },
    { id: 3, image: '/orange2.png', alt: 'Orange Sponsor' },
    { id: 4, image: '/tesol2.png', alt: 'TESOL Sponsor' },
  ];
  // Duplicate for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <motion.section
      className="py-12 sm:py-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="w-full">
        <div className="text-center mb-8 sm:mb-12 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
            {t('staffMarquee.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            {t('staffMarquee.subtitle')}
          </p>
        </div>
        <div className="items-center max-w-7xl mx-auto overflow-hidden relative group">
          {/* Left/Right fade based on RTL */}
          <div className={`pointer-events-none absolute top-0 h-full w-16 z-10 ${isRTL ? 'right-0' : 'left-0'}`} style={{background: isRTL ? 'linear-gradient(to left, white 70%, transparent)' : 'linear-gradient(to right, white 70%, transparent)'}} />
          <div className={`pointer-events-none absolute top-0 h-full w-16 z-10 ${isRTL ? 'left-0' : 'right-0'}`} style={{background: isRTL ? 'linear-gradient(to right, white 70%, transparent)' : 'linear-gradient(to left, white 70%, transparent)'}} />
          <div
            className={`flex py-6 w-max gap-8 ${isRTL ? 'animate-marquee-rtl' : 'animate-marquee'}`}
            style={{ animationPlayState: 'running' }}
            onMouseEnter={e => { e.currentTarget.style.animationPlayState = 'paused' }}
            onMouseLeave={e => { e.currentTarget.style.animationPlayState = 'running' }}
          >
            {duplicatedSponsors.map((sponsor, idx) => (
              <div
                key={`${sponsor.id}-${idx}`}
                className="flex-shrink-0 flex items-center justify-center w-40 sm:w-56 h-24 sm:h-32"
              >
                <Image
                  src={sponsor.image}
                  alt={sponsor.alt}
                  width={sponsor.id === 1 ? 160 : 180}
                  height={80}
                  className="w-auto h-16 sm:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}