"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 h-screen w-full bg-[url('/images/cta.jpg')] bg-cover bg-right-bottom">
      <div className="max-w-7xl mx-auto px-4  items-center justify-center h-full relative z-10 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        <h1 className="text-6xl md:text-8xl font-mono mb-4 text-center text-shadow-md text-shadow-black text-white">Easy Tour Management!
        </h1>
          <p className="text-xl text-white mb-2 text-center">
          <span className="text-shadow-black text-shadow-blur-2 text-shadow-sm">Join all the other bands and artists who are already using Band Practice CRM. <br />
          Get back to what you&apos;re passionate about - Making Great Music.<br />
          </span>
          </p>
          <div className="font-bold text-2xl text-white text-center mb-8">
            <span className="text-shadow-black text-shadow-blur-2 text-shadow-sm">Tour Smart.</span>
          </div>
          <div className="space-x-4 text-center">
          <Link href="https://app.bandpracticecrm.com/auth/signup">
            <Button size="lg" className="text-lg bg-blue-700  text-white hover:bg-blue-600 border-green-600 border">
                <span className="text-white text-shadow-sm text-shadow-blur-1 text-shadow-black">Get Started</span>
                </Button>
            </Link>
            <Link href="https://app.bandpracticecrm.com/auth/signup">
              <Button size="lg" variant="outline"className="text-white  bg-green-700 border-blue-600 hover:border-blue-500 hover:text-white hover:bg-green-600  text-lg">
                <span className="text-white text-shadow-sm text-shadow-blur-1 text-shadow-black">Sign In</span>
                </Button>
            </Link> 
          </div>
        </motion.div>
      </div>
    </section>
  )
} 