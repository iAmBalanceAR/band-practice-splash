/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="relative w-full min-h-[600px] overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/features.jpg"
          alt="Music industry background"
          fill
          className="object-right-top"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 pb-16 flex items-center justify-center min-h-[600px]">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-mono mb-4 text-center text-shadow-md text-shadow-black text-white">Who <span className="text-5xl line-through">We Are</span> I am</h1>
            <p className="text-xl text-white"><span className="text-shadow-black text-shadow-sm">From Stage to Software: A Music Industry Veteran's Mission</span></p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#030817]/50 border border-blue-700 rounded-md backdrop-blur-sm p-8"
          >
            <div className="prose prose-invert mx-auto">
              <p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
                Behind every piece of software is a story. Band Practice CRM wasn't born in a boardroom or dreamed up by investors—it emerged from decades in the trenches of the music industry. Here's how it happened.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
                The early 2000s: The bass thumps through packed nightclubs across the deep South. That's where I—Jason Haynie—found my first home in music. For 12 years, I orchestrated dance floors like a conductor, transforming packed rooms into living, breathing organisms through sound. Each night was a mathematical equation of beats, drops, and crowd psychology.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
                When the DJ booth couldn't contain my ambitions anymore, I built a production company from scratch. Armed with secondhand gear and relentless determination, I scaled up to producing fashion shows, festivals, and everything in between. Every technical disaster and logistical nightmare became a lesson I'd later need.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
                Then 2021 hit me with the ultimate curveball—a severe infection that took both my legs below the knee. Overnight, my days of hauling gear and running shows vanished. But you can't erase decades of music industry DNA that easily.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
                While running sound at local venues during my recovery, I witnessed something that lit a fire in me. Night after night, brilliant independent artists would pour their souls into performances, only to be sabotaged by preventable logistical chaos. Wrong gear lists. Missing stage plots. Venue details lost in email threads. The music was transcendent—but the business side was breaking them.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
                That's when lightning struck. I couldn't tour anymore, but I could transform every hard-earned lesson from my career into something that could save these artists from the same pitfalls. Drawing on my technical background and decades in the trenches, Band Practice CRM was born.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
                This isn't software—it's survival gear for independent musicians. Every feature addresses a real disaster I've witnessed or experienced firsthand. Every workflow solves a problem that's derailed countless shows. It handles the chaos so you can focus on creating magic.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
                From generating professional stage plots to managing the complex logistics of touring, Band Practice CRM is the road-hardened crew member you've always needed—one that fits in your pocket and never asks for a per diem.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
                I'm not asking for your sympathy—I'm offering you the culmination of my 20+ year odyssey through every level of the music industry. Take it for a 7-day test drive, completely free. If it doesn't transform how you manage your music career, walk away. But I suspect you'll find it's the missing piece that turns your passion into a sustainable reality.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black">
                This isn't just business for me—it's my way of staying connected to the industry that shaped my life. When you succeed, I succeed. Questions or feedback? Hit me directly at jason@bandpracticecrm.com. Let's keep the music playing, together.
              </p>
            </div>
          </motion.div>
          <div className="flex justify-center">
            <Link href="https://app.bandpracticecrm.com/auth/signup">
              <Button size="lg" className="text-lg pl-4 pr-4 items-center mt-8 bg-green-700 text-white hover:bg-green-600 border-blue-500 border">
                <span className="text-white text-shadow-sm text-shadow-blur-1 text-shadow-black">
                  Start Free Trial
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}