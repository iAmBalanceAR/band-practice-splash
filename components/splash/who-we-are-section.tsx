"use client";

import Image from"next/image";
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
            <p className="text-xl text-white"><span className="text-shadow-black text-shadow-sm">From Nightclubs to Notebooks: A Roadie&aposs Revolution</span></p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#030817]/50 border border-blue-700 rounded-md backdrop-blur-sm p-8"
          >
            <div className="prose prose-invert mx-auto">
              <p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
              I had originally planned on filling this section with dry facts about my history in the music business. But the more I read it, the more I realized it missed the heart of my story. So, let me take you on a journey instead.
              </p><p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
              Picture this: It&aposs the early 2000s, and the nightclubs of the deep South are pulsing with energy. That&aposs where you&aposd find me, Jason Haynie, a college dropout with nothing but a passion for music and a knack for reading crowds. For 12 years, I was the puppet master of the dance floor, using beats and rhythms to orchestrate the ebb and flow of partygoers. It wasn&apost just a job; it was a science, a mathematical equation of sound and movement.
              </p><p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
              But the late nights took their toll, and I found myself craving a new challenge. With nothing but grit and a cobbled-together set of equipment, I launched my own production company. Fashion shows, festivals, you name it – I dove in headfirst, learning on the fly and soaking up every experience like a sponge.
              </p><p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
              Life has a way of throwing curveballs, though. In 2021, a severe infection cost me both my legs below the knee. Just like that, my days of hauling gear and running shows came to an abrupt end. But here&aposs the thing about the music industry – it gets in your blood. So, I adapted. I started running sound at local venues, and that&aposs when I noticed something.
              </p><p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
              Night after night, I watched talented, independent bands pour their hearts out on stage. These were the road warriors, cramming into old vans, living gig to gig, fueled by nothing but passion and dreams. But there was a problem. For all their musical talent, they were drowning in a sea of logistical nightmares. Missed opportunities, botched gigs, all because the right information wasn&apost in the right place at the right time.
              </p><p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
              That&aposs when it hit me. I couldn&apost tour anymore, but I could use my experience to help those who could. Drawing on my tech background and years in the trenches, I set out to create a solution. The result? Band Practice CRM.
              </p><p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
              This isn&apost just another app. It&aposs a lifeline for independent artists, born from real-world experience and late-night brainstorming sessions. It&aposs every lesson I&aposve learned, every mistake I&aposve made, distilled into a powerful tool that handles the boring stuff so bands can focus on what matters – the music.
              </p><p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
              From creating killer stage plots to managing complex tour logistics, Band Practice CRM is the silent roadie every band wishes they had. It&aposs the culmination of my journey, from DJ booths to production rigs to coding marathons.
              </p><p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black pb-2">
              I&aposm not asking for your sympathy. I&aposm offering you a chance to revolutionize the way you manage your music career. Give it a shot – scroll down to the pricing section and grab a 7-day all-access pass on me. If it doesn&apost blow your mind, walk away. But I have a feeling you&aposll find it&aposs the missing piece in your rock &aposn&apos roll puzzle.
              </p><p className="text-gray-200 text-lg leading-relaxed text-shadow-md text-shadow-black">
              This is more than just a product launch for me. It&aposs a way to give back to the industry that&aposs been my home for decades. So take it for a spin, and if you need anything, drop me a line at jason@bandpracticecrm.com. Let&aposs keep the music playing, together.
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