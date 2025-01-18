import Image from 'next/image'
import React from 'react'
import joinTeam from "@/assets/Home/joinTeam.webp"

function JoinTeam() {
  return (
    <div className="relative w-full px-32">
      {/* Image with original size */}
      <Image 
        src={joinTeam} 
        alt="join-our-team"
        className="w-full"
      />

      {/* Content (Centered Text and Button) */}
      <div className="absolute top-0 left-1/3 right-0 bottom-0 flex flex-col items-center justify-center z-10 text-center text-black ">
        <h1 className="text-4xl md:text-3xl font-semibold mb-4">
          Welcome Your Baby into Your Home
        </h1>
        <button className="bg-[#173366] text-white px-8 py-3 rounded-lg  transition-colors">
          Book a Free Appointment Now
        </button>
      </div>
    </div>
  )
}

export default JoinTeam
