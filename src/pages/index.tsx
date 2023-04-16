import { Inter } from 'next/font/google'
import React from 'react'
import Commandot from '@/components/Commandot'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Commandot/>
    </div>
  )
}
