"use client"

import { useState } from 'react'
import Link from 'next/link'
import PrivacyModal from './privacy-modal'

export default function FooterSection() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const footerLinks = [
    { name: "PRIVACY POLICY", action: () => setShowPrivacyModal(true), isExternal: false },
    { name: "LOGIN", href: "https://app.bandpracticecrm.com/auth/signin", isExternal: true },
    { name: "SIGN UP", href: "http://app.bandpracticecrm.com/auth/signup", isExternal: true }
  ]

  return (
    <footer className="bg-black/90 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Copyright */}
        <div className="mb-6 text-center">
          <span className="text-gray-400">Band Practice CRM © {new Date().getFullYear()}</span>
        </div>
        
        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-md">
          {footerLinks.map((link, index) => (
            link.isExternal ? (
              <Link 
                key={index}
                href={link.href as string} 
                className="text-gray-400 hover:text-white transition-colors text-center text-sm font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={index}
                onClick={link.action}
                className="text-gray-400 hover:text-white transition-colors text-center text-sm font-medium"
              >
                {link.name}
              </button>
            )
          ))}
        </div>
      </div>
      
      <PrivacyModal 
        isOpen={showPrivacyModal} 
        onClose={() => setShowPrivacyModal(false)} 
      />
    </footer>
  )
} 