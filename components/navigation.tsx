'use client';

import React from "react"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  // Handle scroll for sticky behavior
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'top-4 left-4 right-4 rounded-3xl'
        : 'top-0 left-0 right-0 rounded-b-3xl'
    }`}>
      <div className={`${isScrolled ? 'glass shadow-2xl shadow-primary/10 rounded-3xl overflow-hidden' : 'bg-transparent rounded-b-3xl overflow-hidden'} border-b ${isScrolled ? 'border-white/10' : 'border-white/5'} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/icon.svg"
                    alt="Launch Digital Works"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:opacity-90 transition-opacity duration-300"
                    priority
                  />
                </div>
                <span className="hidden sm:inline text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                  Launch Digital Works
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-12">
              <div className="flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative text-base font-medium text-muted-foreground hover:text-accent transition-colors duration-300 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="relative px-8 py-3.5 bg-gradient-to-r from-primary via-primary to-accent text-white rounded-full font-semibold text-base shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 hover:bg-white/10 rounded-lg text-foreground transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-6 border-t border-white/10 mt-4">
              <div className="space-y-1 mb-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-muted-foreground hover:text-accent hover:bg-white/5 transition-all duration-300 text-sm font-medium rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                className="block mx-4 px-6 py-3.5 bg-gradient-to-r from-primary to-accent text-white rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all font-semibold text-center text-sm shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
