'use client'

import Image from 'next/image'



export const StaffMarqueeSection = () => {
  const staffMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Director & Lead Instructor",
      image: "/staff.jpg",
      specialization: "IELTS & Academic English",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business English Specialist",
      image: "/staff.jpg",
      specialization: "Corporate Training",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "ESL Coordinator",
      image: "/staff.jpg",
      specialization: "Beginner & Intermediate",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "TOEFL Expert",
      image: "/staff.jpg",
      specialization: "Test Preparation",
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Conversation Coach",
      image: "/staff.jpg",
      specialization: "Speaking & Pronunciation",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Academic Writing Tutor",
      image: "/staff.jpg",
      specialization: "Research & Essays",
    },
    {
      id: 7,
      name: "Maria Garcia",
      role: "Online Learning Manager",
      image: "/staff.jpg",
      specialization: "Digital Education",
    },
    {
      id: 8,
      name: "Robert Kim",
      role: "Curriculum Developer",
      image: "/staff.jpg",
      specialization: "Course Design",
    },
  ]

  // Duplicate staff for seamless loop
  const duplicatedStaff = [...staffMembers, ...staffMembers]

  return (
    <section className="py-12 sm:py-16">
      <div className="w-full ">
        <div className="text-center mb-8 sm:mb-12 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Dedicated professionals committed to your English learning success
          </p>
        </div>

        {/* Staff Marquee */}
        <div className="overflow-hidden relative group">
          <div
            className="flex py-6 w-max animate-marquee gap-4 sm:gap-8"
            style={{ animationPlayState: 'running' }}
            onMouseEnter={e => { e.currentTarget.style.animationPlayState = 'paused' }}
            onMouseLeave={e => { e.currentTarget.style.animationPlayState = 'running' }}
          >
            {duplicatedStaff.map((staff, index) => (
              <div
                key={`${staff.id}-${index}`}
                className="flex-shrink-0 w-64 sm:w-80 hover:scale-105 transition-transform duration-300"
              >
                <div className="rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-yellow-400/30">
                  {/* Staff Image */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto relative">
                      <Image
                        src={staff.image || "/placeholder.svg"}
                        alt={staff.name}
                        width={120}
                        height={120}
                        className="w-full h-full rounded-full object-cover border-4 border-yellow-400"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Staff Info */}
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{staff.name}</h3>
                    <p className="text-yellow-600 font-semibold mb-3 text-sm sm:text-base">{staff.role}</p>
                    <div className="inline-block bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                      <span className="text-xs sm:text-sm text-gray-700">{staff.specialization}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}