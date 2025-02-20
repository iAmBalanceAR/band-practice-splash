"use client";

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  // {
  //   name: "7 Day Free Trial",
  //   price: "Free",
  //   interval: "",
  //   features: [
  //     "Full Access, No Restrictions",
  //     "Standard Monthly Rate After Trial",
  //     "Cancel Anytime"
  //   ]
  // },
  
  {
    name: "Tour Manager",
    price: "$20",
    interval: " monthly",
    description: "Band Practice CRM helps independent musicians deploy tour logistics in an easy, straightforward way. Solving the problems of logistics, scheduling, and documentation with clients and venues.",
    features: [
      "Advanced Tour Management",
      "Track and Manage Unlimited Tours",
      "Research Over 45,000 Venues",
      "Advanced Lead Management",
      "Create Complete Rider Paperwork",
      "Stage Plot Generator",
      "Advanced Tour Routing",
      "Document Generation",
      "Data Tracking and Analytics"   ]
}

//   {
//     name: "Tour Manager",
//     price: "$180",
//     interval:" Yearly (25% off)",
//     description: "Band Practice CRM helps independent musicians deploy tour logistics in an easy, straightforward way. Solving the problems of logistics, scheduling, and communication with clients and venues.",
//     features: [
//       "Advanced Tour Management",
//       "Track and Manage Unlimited Tours",
//       "Research Over 45,000 Venues",
//       "Advanced Lead Management",
//       "Data Tracking and Analytics",
//       "Stage Plot Generator",
//       "Advanced Tour Routing",
//       "Document Generation"    ]
//   }
 ];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-[url('/images/pricing.jpg')] bg-cover bg-left-bottom h-auto w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4  items-center justify-center h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-mono mb-4 text-center text-shadow-md text-shadow-black text-white">Tour Smart</h1>
          <span className="text-xl text-white text-shadow-sm text-shadow-blur-4 text-shadow-black">Professional tour management at an indie band price.</span>
          <div className="mx-auto text-center w-full mt-4 text-xl text-white text-shadow-sm text-shadow-blur-4 text-shadow-black">Try everything free for 7 days.</div>
        </motion.div>
        <div className="align-center justify-center items-center w-full">
        <div className="w-[30%] min-w-[240px] mx-auto relative grid  gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#030817] p-8 rounded-lg border border-blue-700"
            >
              <h3 className="text-2xl font-bold text-white mb-2 text-shadow-sm text-shadow-blur-4 text-shadow-black">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white text-shadow-sm text-shadow-blur-4 text-shadow-black">{plan.price}</span>
                <span className=" text-gray-400 text-shadow-sm text-shadow-blur-4 text-shadow-black">/{plan.interval}</span>
              </div>
              <div>
                <p className='py-2 text-sm text-gray-300'>
                <span className="text-shadow-sm text-shadow-blur-4 text-shadow-black">{plan.description}</span> 
                </p>
              </div>
              <h3 className='text-white text-xl'>
                <span className="text-shadow-sm text-shadow-blur-4 text-shadow-black">Features:</span>
              </h3>
              <ul className="mb-12 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    <span className="text-shadow-sm text-shadow-blur-4 text-shadow-black">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="https://app.bandpracticecrm.com/auth/signup">
                <Button disabled={false} className="w-full bg-green-700 text-white hover:bg-green-600 border-blue-500 border">
                <span className="text-white text-shadow-sm text-shadow-blur-1 text-shadow-black">
                    Start 7-Day Trial!!
                    {/* Sign Up Now!
                    Coming Soon */}
                </span>
                </Button>
              </Link>

            </motion.div>
          ))}
        </div>
      </div> </div>
      <div className="mx-auto text-center w-full mt-4 text-xl text-white text-shadow-sm text-shadow-blur-4 text-shadow-black">Try everything free for 7 days.</div>
     
    </section>
  );
} 