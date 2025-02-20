"use client"

import { motion } from 'framer-motion'
import {  BarChart3, MapPin, Pin, Wrench, Workflow, FolderCode, Brain, TramFront } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const features = [
  {
    icon: <Pin className="w-12 h-12" />,
    title: "Map Your Route",
    description: "The Tour Route Managment tool lets you visualize your tour as it develops."
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: "Professional Tools",
    description: "Easy to use tools for Riders, Stage Plosts, Setlists, Inputs, Tech Requiremetns and more!"
  },
  {
    icon: <Workflow className="w-12 h-12" />,
    title: "FLow State",
    description: "Every feature contributes to other features. You'll love the work flow from lead to gig."
  },
  {
    icon: <FolderCode className="w-12 h-12" />,
    title: "Active Development",
    description: "New features and imporoved funnctinality using a rapid iterationn ideology.  Enhancing your productivity."
  },
  {
    icon: <MapPin className="w-12 h-12" />,
    title: "Multi-Tour Dashboard",
    description: "Keep every tour organized in one place - no more scattered spreadsheets or missed details."
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: "Venue Intelligence",
    description: "Instant access to over 45,000 venues. Create leads and track your progress from discovery to stage."
  },
  {
    icon: <TramFront className="w-12 h-12" />,
    title: "Tour Smart",
    description: "Track every detail from load-in to payout. Never miss a soundcheck or settlement again."
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: "Tour Analytics",
    description: "Real-time insights into your tour's performance. Make data-driven decisions that boost your bottom line."
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-[url('/images/slide1.jpg')] bg-cover bg-right-bottom relative h-screen w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 items-center justify-center h-full relative z-10 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-mono mb-4 text-center text-shadow-md text-shadow-black text-white">Features</h1>
          <p className="text-xl text-white"><span className="text-shadow-black text-shadow-sm">Everything you need to manage your tours</span></p>
        </motion.div>
        <div className="grid md:grid-cols-2 grid-rows-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#030817] p-6 rounded-lg text-center border-blue-700 border"
            >
              <div className="text-[#008ffb] mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                <span className="text-shadow-black text-shadow-blur-2 text-shadow-sm">
                  {feature.title}
                </span>
              </h3>
              <p className="text-white"><span className="text-shadow-black text-shadow-blur-2 text-shadow-sm">{feature.description}</span></p>
            </motion.div>
          ))}
        </div>
        <div className='pt-16'>
        <Link href="https://app.bandpracticecrm.com/auth/signup">
            <Button size="lg" className="text-lg bg-blue-700  text-white hover:bg-blue-600 border-green-600 border">
                <span className="text-white text-shadow-sm text-shadow-blur-1 text-shadow-black">
                  Create Your Account
                </span>
              </Button>
          </Link> 
        </div>
      </div>
    </section>
  )
} 