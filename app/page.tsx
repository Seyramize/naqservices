"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import ContactForm from "@/components/contact-form"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  ChevronRight,
  Code,
  PenTool,
  Headphones,
  BarChart3,
  CheckCircle,
  Star,
  ExternalLink,
  Quote,
  MessageCircle,
  Ghost,
  Music2,
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

// Project data
const projects = [
  {
    id: 1,
    title: "Graphic Design Portfolio",
    category: "Graphic Design",
    image: "/projects/graphic-design-services.jpeg",
    description:
      "A comprehensive collection of our graphic design works including logo1s, business cards, brochures, flyers, posters, and more.",
    link: "https://drive.google.com/drive/folders/1GPRW3GusW0_ATQaxbEc7u3oMnBOmPLBo",
  },
  {
    id: 3,
    title: "Healthcare Management System",
    category: "Software Development",
    image: "/placeholder.svg?key=ysrv2",
    description: "Custom healthcare management system for tracking patient records and appointments.",
    link: "#",
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "Digital Marketing",
    image: "/placeholder.svg?key=c9eab",
    description: "Comprehensive social media campaign that increased client engagement by 200%.",
    link: "#",
  },
  {
    id: 5,
    title: "Mobile Banking Application",
    category: "App Development",
    image: "/placeholder.svg?key=y54fj",
    description:
      "Secure and intuitive mobile banking application with biometric authentication and real-time notifications.",
    link: "#",
  },
  {
    id: 6,
    title: "Educational Platform UI/UX",
    category: "UI/UX Design",
    image: "/placeholder.svg?key=lyz9v",
    description:
      "User-centered design for an educational platform that improved student engagement and learning outcomes.",
    link: "#",
  },
  {
    id: 7,
    title: "Restaurant Ordering System",
    category: "Web Development",
    image: "/placeholder.svg?key=jr0zr",
    description: "Contactless ordering system for restaurants with QR code menus and kitchen management interface.",
    link: "#",
  },
]

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "NAQ's Services transformed our digital presence completely. Their attention to detail and creative approach helped us stand out in a competitive market.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director, GrowthBrand",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Working with Godfred and his team was a game-changer for our business. Their graphic design work consistently exceeds our expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amara Okafor",
    position: "Founder, Bloom Boutique",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "From website development to ongoing IT support, NAQ's Services has been an invaluable partner in our business growth journey.",
    rating: 5,
  },
]

// Section component for animations
const Section = ({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode
  id: string
  className?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      {children}
    </section>
  )
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black to-gray-900"
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-yellow-400/30 blur-[100px] animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-cyan-400/30 blur-[100px] animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-fuchsia-500/30 blur-[100px] animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 relative"
            >
              <div className="relative">
                <Image src="/logo1.png" alt="NAQ's Services logo1" width={250} height={125} className="mx-auto" />
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 rounded-3xl blur-xl opacity-30 -z-10 animate-pulse"></div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            >
              Digital Excellence Redefined
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-3xl text-blue-400 font-light mb-4 tracking-wide"
            >
              Transforming Ideas into Digital Realities
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-300 max-w-3xl mb-6 text-lg leading-relaxed"
            >
              We are a dynamic IT and Graphic Design company delivering creative, tech-savvy solutions for individuals,
              startups, and businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 mt-2"
            >
              <Link href="#services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg px-8 py-5 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 rounded-xl relative overflow-hidden group transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="flex items-center relative z-10">
                    Explore Our Services{" "}
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link href="#contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg px-8 py-5 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 rounded-xl relative overflow-hidden group transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="flex items-center relative z-10">
                    Contact Us Today{" "}
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <Link href="#about" className="text-white/70 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <Section id="about" className="bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed">
              NAQs Services was born out of passion and perseverance. Founded by Godfred Nii Aryee Quaye in 2017 and officially registered in 2024, the journey began with nothing but a phone and a dream. From designing graphics and writing code on a mobile phone due to the inability to afford a laptop, Godfred built NAQs Services into a professional brand that empowers businesses with digital tools.

The name NAQs reflects this personal story — derived from his own names: Nii (N), Aryee (A), Quaye (Q). It is more than a name; it represents heritage, resilience, and authenticity.

The bold black “N” and “A” in the logo stand for structure, reliability, and technical expertise — the foundation of IT solutions. The sweeping red “S” flows like a flame, symbolizing creativity, energy, and transformation. Together, black and red balance strength with imagination:
	•	Black = professionalism and trust
	•	Red = vision and boldness

At the heart of it all is our promise: “Making your idea visual.” Our logo and brand story are not just about design — they reflect a journey where technology meets creativity, and where perseverance turns ideas into impactful solutions.

This is who we are.
This is NAQs Services.
              </p>
              {/* <h3 className="text-3xl font-bold text-gray-900">Who We Are</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                We are not just tech experts or designers—we are storytellers, problem solvers, and visionaries. Our
                mission is to help brands stand out and scale up using intelligent design and robust IT solutions.
              </p> */}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl shadow-xl relative overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative">
                <div className="mb-8 flex justify-center">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl">
                    <div className="absolute inset-0 -z-10 animate-spin-slow bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 rounded-full blur-md opacity-70"></div>
                    <div className="absolute inset-2 bg-white rounded-full z-0"></div>
                    <div className="absolute inset-3 overflow-hidden rounded-full z-10">
                      <Image
                        src="/founder2.jpg"
                        alt="Godfred Nii Aryee Quaye - Founder of NAQ's Services"
                        fill
                        className="object-cover object-center scale-105"
                        sizes="(max-width: 768px) 100vw, 256px"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Founder: Godfred Nii Aryee Quaye</h3>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  With a strong foundation in IT and Visual Arts, Godfred combines technical depth with creative
                  brilliance. He has worked as a teacher, data analyst, gym instructor, and IT intern, all while
                  building NAQ's Services from the ground up.
                </p>
                <h4 className="font-semibold text-xl text-gray-900 mb-5">His skills include:</h4>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <span>PHP, HTML, CSS, Python, C#, SQL</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <span>Graphic Design (Photoshop, AI Tools)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <span>Web & Software Development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <span>Digital Marketing & Branding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Service 1 */}
            <motion.div
              whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              className="bg-white rounded-2xl shadow-lg p-10 transform transition-all duration-300"
            >
              <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mb-8 transform transition-all duration-300 group-hover:scale-110">
                <PenTool className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Graphic Design</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">logo1 Design</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">Posters & Flyers</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">Business Cards</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">Social Media Content</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">Brand Identity Packages</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              className="bg-white rounded-2xl shadow-lg p-10 transform transition-all duration-300"
            >
              <div className="w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center mb-8">
                <Code className="h-10 w-10 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Web & Software Development</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">Custom Websites</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">Frontend & Backend Development</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">CMS (WordPress, etc.)</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">Web Applications</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              className="bg-white rounded-2xl shadow-lg p-10 transform transition-all duration-300"
            >
              <div className="w-20 h-20 bg-fuchsia-100 rounded-2xl flex items-center justify-center mb-8">
                <Headphones className="h-10 w-10 text-fuchsia-600" />
              </div>
              <h3 className="text-2xl font-bold mb-6">IT Support & Consulting</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">System Setup & Maintenance</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">IT Strategy & Training</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">Small Business Tech Support</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              className="bg-white rounded-2xl shadow-lg p-10 transform transition-all duration-300"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                <BarChart3 className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Digital Marketing Support</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">Social Media Strategy</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">Content Design</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg">Email Campaign Templates</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
              Our Projects
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  zIndex: 10,
                }}
                className="group relative overflow-hidden rounded-2xl shadow-xl h-[400px] transform transition-all duration-500"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>

                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 transform transition-all duration-500">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white bg-blue-600/80 hover:bg-blue-600 py-2 px-4 rounded-lg transition-all"
                  >
                    View Details <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" className="bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -top-10 -left-10 text-9xl text-blue-600/20">
              <Quote />
            </div>

            <div className="relative z-10">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeTestimonial === index ? 1 : 0,
                    x: activeTestimonial === index ? 0 : 50,
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl"
                  style={{ display: activeTestimonial === index ? "block" : "none" }}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-600">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-bold">{testimonial.name}</h4>
                          <p className="text-gray-400">{testimonial.position}</p>
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-10 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? "bg-blue-600 w-10" : "bg-gray-500"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section id="why-choose-us" className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 text-center shadow-xl transform transition-all duration-300"
            >
              <div className="w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">7+</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Years of Experience</h3>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 text-center shadow-xl transform transition-all duration-300"
            >
              <div className="w-20 h-20 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Innovative Solutions</h3>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 text-center shadow-xl transform transition-all duration-300"
            >
              <div className="w-20 h-20 bg-cyan-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-cyan-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Client-Centered Approach</h3>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 text-center shadow-xl transform transition-all duration-300"
            >
              <div className="w-20 h-20 bg-fuchsia-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-fuchsia-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Passionate Leadership</h3>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 text-center shadow-xl transform transition-all duration-300"
            >
              <div className="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">One-Stop Shop</h3>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We'd love to hear from you! Let's build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-6">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Call or WhatsApp</h3>
                  <p className="text-gray-700 text-lg">+233 277 462 371</p>
                  <p className="text-gray-700 text-lg">+233 530 934 791</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-6">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-700 text-lg">info@naqsservices.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-6">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-700 text-lg">Accra, Ghana</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="https://www.instagram.com/nii__ayi07?igsh=aHo4MmYwbnVxa25w&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  >
                    <Instagram className="h-7 w-7" />
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="https://www.linkedin.com/in/nii-aryee-5563341a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-blue-800 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  >
                    <Linkedin className="h-7 w-7" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="https://wa.me/message/PTEIDOXZHVXRG1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  >
                    <FaWhatsapp className="h-7 w-7" />
                  </motion.a>
                 
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-2xl shadow-xl relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold mb-8">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-10 md:mb-0">
              <div className="relative mb-6 inline-block">
                <div className="bg-white rounded-xl p-3 shadow-xl">
                  <Image src="/logo1.png" alt="NAQ's Services logo1" width={200} height={100} className="mb-0" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 rounded-xl blur opacity-30 -z-10"></div>
              </div>
              <p className="text-gray-400 max-w-md text-lg">Transforming Ideas into Digital Realities since 2017.</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-lg">
                &copy; {new Date().getFullYear()} NAQ's Services. All rights reserved.
              </p>
              <div className="mt-6 flex space-x-8 justify-center md:justify-end">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
