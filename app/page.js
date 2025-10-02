"use client"

import { NewsSlider } from "@/components/NewsSlider"
import { AboutUsSection } from "@/components/AboutUsSection"
import { ServicesSection } from "@/components/ServicesSection"
import { StaffMarqueeSection } from "@/components/StaffMarqueeSection"



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* News Slider Section */}
      <NewsSlider />

      {/* About Us section with interactive timeline */}
      <AboutUsSection />

      {/* Services section with hexagonal grid and hover effects */}
      <ServicesSection />

      {/* Staff Marquee Section */}
      <StaffMarqueeSection />
    </div>
  )
}
