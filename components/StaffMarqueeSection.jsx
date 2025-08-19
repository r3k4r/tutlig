
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export const StaffMarqueeSection = () => {
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
            Our Trusted Sponsors
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            We are proud to be supported by these leading organizations
          </p>
        </div>
        <div className="items-center max-w-7xl mx-auto overflow-hidden relative group">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to right, white 70%, transparent)'}} />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to left, white 70%, transparent)'}} />
          <div
            className="flex py-6 w-max animate-marquee gap-8"
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