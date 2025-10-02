'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Language from './Language'
import { useTranslation } from 'react-i18next'

export default function Navbar (){
  const { t } = useTranslation()
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

  const navItems = [
    {
      name: t('nav.home'),
      href: "/",
      dropdown: null,
    },
    {
      name: t('nav.eslResources'),
      href: "/eslresources ",
      dropdown: [
        { name: t('nav.shortStory'), href: "/shortstory" },
        { name: t('nav.blog'), href: "/blogs" },
        { name: t('nav.video'), href: "/Video" },
        { name: t('nav.authenticMaterial'), href: "/authenticmaterial" },
      ],
    },
    {
      name: t('nav.courses'),
      href: "/courses",
      dropdown: [
        { name: t('nav.generalEnglish'), href: "/generalenglish" },
        { name: t('nav.academicEnglish'), href: "/academicenglish" },
        { name: t('nav.languagePreparationTest'), href: "/languagepreparationtest" },
        { name: t('nav.esp'), href: "/esp" },
        { name: t('nav.businessEnglish'), href: "/businessenglish" },
        { name: t('nav.entrepreneurship'), href: "/entrepreneurship" },
      ],
    },
     {
      name: t('nav.services'),
      href: "/services",
      dropdown: [
        { name: t('nav.groupVipClasses'), href: "/vipclasses" },
        { name: t('nav.privateTutoring'), href: "/privatetouring" },
        { name: t('nav.virtualClasses'), href: "/virtualclasses, " },
        { name: t('nav.physicalClasses'), href: "/physicalclasses" },
        { name: t('nav.corporateTraining'), href: "/corporatetraining " }
      ],
    },
    {
      name: t('nav.tutelageTests'),
      href: "/tutelagetests ",
      dropdown: [
        { name: t('nav.practiceTests'), href: "/practicetests" },
        { name: t('nav.ieltsPreparation'), href: "/IELTS-preparation" },
        { name: t('nav.mockExams'), href: "/mockexams" },
      ],
    },
    {
      name: t('nav.contact'),
      href: "/contact",
      dropdown: null,
    },
  ]

  return (
    <nav className="bg-black border-b border-yellow-400/20 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <div className={`flex-shrink-0 flex items-center space-x-4 md:space-x-10 ${isRTL ? 'space-x-reverse flex-row-reverse gap-6' : ''}`}>
            <motion.div whileHover={{ scale: 1.05 }} className="text-yellow-400 font-bold text-lg md:text-xl">
              <div className={`flex items-center space-x-2 md:space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse gap-2' : ''}`}>
                  <Image src={'/logo.png'} className='w-[35px] h-[35px] md:w-[40px] md:h-[40px]' alt='logo' width={40} height={40} />
                  <h3 className="font-bold text-white">Tutelage</h3>
              </div>
            </motion.div>

            <div className={`flex items-center justify-center gap-2 text-md md:text-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className='text-white font-bold cursor-pointer'>
                  <h1>Tutelage</h1>
                </div>

                <p className='text-white'>|</p>

                <div className='text-gray-500 font-bold cursor-pointer'>
                  <h1>Tutelage AI</h1>
                </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden xl:flex xl:items-center xl:justify-between xl:gap-10  ${isRTL ? 'flex-row-reverse 2xl:gap-10' : '2xl:gap-20'}`}>
            <div className={`ml-10 flex items-baseline space-x-8 ${isRTL ? 'ml-0 mr-10 space-x-reverse' : ''}`}>
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.a
                    href={item.href}
                    className={`text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors duration-200 ${isRTL ? 'flex-row-reverse' : ''}`}
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
                        className={`absolute top-full mt-2 w-56 bg-black/95 backdrop-blur-sm border border-yellow-400/20 rounded-lg shadow-xl overflow-hidden ${isRTL ? 'right-0' : 'left-0'}`}
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem, index) => (
                            <motion.a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className={`block px-4 py-3 text-sm text-white hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200 ${isRTL ? 'text-right' : 'text-left'}`}
                              initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ x: isRTL ? -4 : 4 }}
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
              <Language />
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
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
            className="xl:hidden bg-black/95 backdrop-blur-sm border-t border-yellow-400/20 overflow-y-auto"
            style={{ maxHeight: 'calc(100dvh - 4rem)' }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className={`text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className={`space-y-1 ${isRTL ? 'mr-4' : 'ml-4'}`}>
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className={`text-gray-300 hover:text-yellow-400 block px-3 py-2 text-sm transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}
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