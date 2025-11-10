"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`relative ${
                isScrolled ? "" : "bg-white/80 backdrop-blur-sm"
              } rounded-xl p-2 shadow-lg transform transition-all duration-500 hover:scale-105`}
            >
              <Image src="/logo1.png" alt="NAQ's Services logo1" width={180} height={90} className="h-14 w-auto" />
              {!isScrolled && (
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 rounded-xl blur opacity-30 -z-10 group-hover:opacity-50 transition duration-1000"></div>
              )}
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Projects", "Testimonials", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium text-lg hover:text-blue-600 transition-colors relative group ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-base px-6 py-5 transform hover:scale-105 hover:-translate-y-1 active:scale-95">
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <X className={isScrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 py-6 px-4 bg-white/95 backdrop-blur-md rounded-xl shadow-xl"
          >
            <nav className="flex flex-col space-y-5">
              {["Home", "About", "Services", "Projects", "Testimonials", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-gray-800 hover:text-blue-600 transition-colors text-lg"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 w-full py-6 text-base transform hover:scale-[1.02] active:scale-95">
                <Link href="#contact" onClick={toggleMenu}>
                  Get a Quote
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
