import AirportSearchController from '@/components/organism/AirportSearchController'
import { Navbar } from '@/components/organism/Navbar'
import React from 'react'

// hazme un lazy load 



export default function page() {
  return (
    <main>
      <Navbar />
      <AirportSearchController/>
    </main>
  )
}
