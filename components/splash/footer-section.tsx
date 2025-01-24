"use client"

import { useState } from 'react'
import Link from 'next/link'
import PrivacyModal from './privacy-modal'

export default function FooterSection() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  return (
    <footer className="bg-black/90 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
        <span>Band Practice CRM © {new Date().getFullYear()}</span>
        <button 
          onClick={() => setShowPrivacyModal(true)}
          className="hover:text-white transition-colors"
        >
          PRIVACY POLICY
        </button>
        {/* <Link href="/login" className="hover:text-white transition-colors">
          LOGIN
        </Link> */}
        <span className="text-white text-shadow-sm text-shadow-blur-1 text-shadow-black">
          Coming Soon!
        </span>
      </div>

      <PrivacyModal 
        isOpen={showPrivacyModal} 
        onClose={() => setShowPrivacyModal(false)} 
      />
    </footer>
  )
} 