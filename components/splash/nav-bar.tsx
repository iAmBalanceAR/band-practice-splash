'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    // Wait for initial slide duration (8000ms) before showing nav
    const timer = setTimeout(() => {
      setShowNav(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' as const
    });
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      scrollToTop();
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { name: 'Home', href: 'hero', isExternal: false },
    { name: 'Features', href: 'features', isExternal: false },
    { name: 'Who We Are', href: 'who-we-are', isExternal: false },
    { name: 'Pricing', href: 'pricing', isExternal: false },
    { name: 'Contact', href: 'https://app.bandpracticecrm.com/support/contact', isExternal: true }
  ];

  if (!showNav) return null;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-40 bg-[#030817]/70 backdrop-blur-sm border-b border-[#030817]"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-end">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          className="hidden md:flex items-center space-x-8"
        >
          {navItems.map((item) => (
            item.isExternal ? (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-400 hover:underline transition-all text-shadow-md text-shadow-black cursor-pointer"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-blue-400 hover:underline transition-all text-shadow-md text-shadow-black cursor-pointer"
              >
                {item.name}
              </button>
            )
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
} 