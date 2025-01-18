import Image from 'next/image'
import React from 'react'
import joinTeam from "@/assets/Home/joinTeam.webp"

function JoinTeam() {
  return (
    <div className="relative w-full ">
      {/* Image with original size */}
      <Image 
        src={joinTeam} 
        alt="join-our-team"
        className="w-full h-full" // Ensures the image maintains its aspect ratio
      />

      {/* Content (Centered Text and Button) */}
      <div className="absolute inset-0 flex left-1/4 flex-col items-center justify-center z-10 text-center text-black  ">
        <h1 className="text-xl font-semibold mb-4">
          Welcome Your Baby into Your Home
        </h1>
        <button className="bg-[#173366] text-white px-8 py-3 rounded-lg hover:bg-[#142e51] transition-colors">
          Book a Free Appointment Now
        </button>
      </div>
    </div>
  )
}

export default JoinTeam
