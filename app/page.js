"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
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
import Navbar from "@/components/Navbar"
import { NewsSlider } from "@/components/NewsSlider"
import { AboutUsSection } from "@/components/AboutUsSection"
import { ServicesSection } from "@/components/ServicesSection"
import { StaffMarqueeSection } from "@/components/StaffMarqueeSection"
import { Footer } from "@/components/Footer"



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
