'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="relative w-full min-h-[600px] overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/slide1.jpg"
          alt="Music industry background"
          fill
          className="object-cover"
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
            <h1 className="text-6xl md:text-8xl font-mono mb-4 text-center text-shadow-md text-shadow-black text-white">Who We Are</h1>
            <p className="text-xl text-white"><span className="text-shadow-black text-shadow-sm">Built by industry professionals, for industry professionals</span></p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#030817]/70 border border-blue-700 rounded-md backdrop-blur-sm p-8"
          >
            <div className="prose prose-invert mx-auto">
              <p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black">
                Band Practice CRM is designed and developed by Jason Haynie, former owner of Balance Lighting Systems, a turnkey production company in Arkansas. With over 25 years of experience in the music industry, his behind-the-scenes perspective as a lighting designer has given him a unique understanding of the essential needs of touring acts, venue operators, and technical staff.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed mt-4 text-shadow-md text-shadow-black">
                Jason created Band Practice CRM to solve the complex challenges of tour logistics for independent artists and managers. Our platform streamlines everything from tour and gig workflow to financial analytics, production documentation, venue research, and lead management. As we grow, we'll continue to expand our toolset to better serve the evolving needs of touring professionals.<br />
                <br />
                We look forward to being part of your success story.
              </p>
            </div>
          </motion.div>
            <div className="flex justify-center">
                <Link href="https://app.bandpracticecrm.com/auth/signup">
                    <Button className="w-32 items-center mt-8 bg-green-700 text-white hover:bg-green-600 border-blue-500 border">
                        <span className="text-white text-shadow-sm text-shadow-blur-1 text-shadow-black">
                            Sign Up Now!
                        </span>
                    </Button>
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
} 