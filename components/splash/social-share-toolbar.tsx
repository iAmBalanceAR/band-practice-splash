"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Facebook, 
  Linkedin
} from 'lucide-react'

// Custom X (Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className} 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

interface ShareCount {
  [key: string]: number
}

export function SocialShareToolbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [shareCounts, setShareCounts] = useState<ShareCount>({
    facebook: 623,
    twitter: 446,
    linkedin: 283
  })

  const shareUrl = "https://bandpracticecrm.com"
  const shareText = "Simplify your band's tour management with Band Practice CRM. Built by musicians, for musicians."

  useEffect(() => {
    // Delay the appearance slightly after page load
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleShare = async (platform: string) => {
    let shareLink = ''
    
    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
        break
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        break
    }

    setShareCounts(prev => ({
      ...prev,
      [platform]: prev[platform] + 1
    }))

    window.open(shareLink, '_blank', 'width=600,height=400')
  }

  const socialPlatforms = [
    { 
      platform: 'facebook', 
      icon: Facebook, 
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-500',
      shadowColor: 'shadow-blue-600/50'
    },
    { 
      platform: 'twitter', 
      icon: XIcon,
      color: 'bg-black',
      hoverColor: 'hover:bg-zinc-800',
      shadowColor: 'shadow-black/50'
    },
    { 
      platform: 'linkedin', 
      icon: Linkedin, 
      color: 'bg-blue-700',
      hoverColor: 'hover:bg-blue-600',
      shadowColor: 'shadow-blue-700/50'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: 20,
      rotate: -10
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: [0, -3, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }
    }
  }

  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50"
        >
          <motion.div 
            className="bg-black/20 backdrop-blur-sm rounded-full p-2 space-y-1"
            animate={{
              boxShadow: [
                "0 0 0 rgba(0,0,0,0.2)",
                "0 0 20px rgba(0,0,0,0.3)",
                "0 0 0 rgba(0,0,0,0.2)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {socialPlatforms.map(({ platform, icon: Icon, color, hoverColor, shadowColor }, index) => (
              <motion.div 
                key={platform} 
                className="relative group"
                variants={itemVariants}
                custom={index}
                whileHover="hover"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    ${color} ${hoverColor} transition-all duration-300
                    shadow-lg ${shadowColor}
                    relative
                  `}
                  onClick={() => handleShare(platform)}
                >
                  <Icon className="w-6 h-6 text-white/90 group-hover:text-white" />
                  <motion.div 
                    variants={pulseVariants}
                    initial="initial"
                    animate="pulse"
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center shadow-md"
                  >
                    {shareCounts[platform]}
                  </motion.div>
                </motion.button>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <div className="bg-black/90 text-white text-sm py-1.5 px-3 rounded-full whitespace-nowrap backdrop-blur-sm">
                    Share on {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 