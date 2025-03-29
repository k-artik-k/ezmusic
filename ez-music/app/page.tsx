"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Music, Guitar, Drum, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Music className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold tracking-tight">EZ MUSIC</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <Link href="#instruments" className="text-sm hover:text-purple-400 transition-colors">
                Instruments
              </Link>
              <Link href="#how-it-works" className="text-sm hover:text-purple-400 transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="text-sm hover:text-purple-400 transition-colors">
                Pricing
              </Link>
              <Link href="#faq" className="text-sm hover:text-purple-400 transition-colors">
                FAQ
              </Link>
            </nav>
            <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                <Link
                  href="#instruments"
                  className="text-sm py-2 hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Instruments
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-sm py-2 hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="#pricing"
                  className="text-sm py-2 hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="#faq"
                  className="text-sm py-2 hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full">Sign Up</Button>
              </nav>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-purple-900/20 z-10" />
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Music instruments background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Rent Music Instruments <span className="text-purple-500">Hassle-Free</span> on Campus
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8">
              Access quality instruments without the commitment. Perfect for classes, bands, or just jamming with
              friends.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Browse Instruments
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                How It Works
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
            >
              <motion.div
                animate={{ height: [0, 8, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="w-1 bg-purple-500 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Instrument Categories */}
      <section id="instruments" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Perfect <span className="text-purple-500">Instrument</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">
              Browse our extensive collection of high-quality instruments available for rent on your campus.
            </motion.p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-5 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="string">String</TabsTrigger>
              <TabsTrigger value="percussion">Percussion</TabsTrigger>
              <TabsTrigger value="keyboard">Keyboard</TabsTrigger>
              <TabsTrigger value="recording">Recording</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {instruments.map((instrument, index) => (
                  <InstrumentCard key={index} instrument={instrument} variants={fadeInUp} />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="string">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {instruments
                  .filter((i) => i.category === "string")
                  .map((instrument, index) => (
                    <InstrumentCard key={index} instrument={instrument} variants={fadeInUp} />
                  ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="percussion">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {instruments
                  .filter((i) => i.category === "percussion")
                  .map((instrument, index) => (
                    <InstrumentCard key={index} instrument={instrument} variants={fadeInUp} />
                  ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="keyboard">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {instruments
                  .filter((i) => i.category === "keyboard")
                  .map((instrument, index) => (
                    <InstrumentCard key={index} instrument={instrument} variants={fadeInUp} />
                  ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="recording">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {instruments
                  .filter((i) => i.category === "recording")
                  .map((instrument, index) => (
                    <InstrumentCard key={index} instrument={instrument} variants={fadeInUp} />
                  ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              How <span className="text-purple-500">EZ MUSIC</span> Works
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">
              Renting an instrument has never been easier. Follow these simple steps to get started.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <StepCard
              number="01"
              title="Browse & Select"
              description="Browse our collection and select the instrument you want to rent."
              icon={<Music className="h-10 w-10 text-purple-500" />}
              variants={fadeInUp}
            />

            <StepCard
              number="02"
              title="Reserve Online"
              description="Reserve your instrument online and choose your rental period."
              icon={<Guitar className="h-10 w-10 text-purple-500" />}
              variants={fadeInUp}
            />

            <StepCard
              number="03"
              title="Pick Up on Campus"
              description="Pick up your instrument at our convenient campus location."
              icon={<Drum className="h-10 w-10 text-purple-500" />}
              variants={fadeInUp}
            />
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Simple <span className="text-purple-500">Pricing</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">
              Flexible rental periods to fit your schedule and budget.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <PricingCard
              title="Daily"
              price="$15"
              description="Perfect for one-time performances or quick projects."
              features={[
                "24-hour rental period",
                "Basic accessories included",
                "On-campus pickup & return",
                "No deposit required with student ID",
              ]}
              buttonText="Rent Daily"
              popular={false}
              variants={fadeInUp}
            />

            <PricingCard
              title="Weekly"
              price="$49"
              description="Ideal for short-term projects and practice sessions."
              features={[
                "7-day rental period",
                "All accessories included",
                "On-campus pickup & return",
                "Free basic maintenance",
                "One-time exchange option",
              ]}
              buttonText="Rent Weekly"
              popular={true}
              variants={fadeInUp}
            />

            <PricingCard
              title="Semester"
              price="$199"
              description="Best value for music students and semester-long courses."
              features={[
                "Full semester rental (4 months)",
                "All accessories included",
                "On-campus pickup & return",
                "Free maintenance & repairs",
                "Unlimited exchanges",
                "Option to purchase at discount",
              ]}
              buttonText="Rent for Semester"
              popular={false}
              variants={fadeInUp}
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              What <span className="text-purple-500">Students</span> Say
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">
              Hear from students who have used EZ MUSIC for their musical needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <TestimonialCard
              quote="EZ MUSIC saved me when I needed a guitar for my music composition class. The process was super simple!"
              name="Alex Johnson"
              role="Music Major, Junior"
              image="/placeholder.svg?height=100&width=100"
              variants={fadeInUp}
            />

            <TestimonialCard
              quote="Being able to rent a keyboard for the semester was perfect for my dorm room practice sessions. Highly recommend!"
              name="Sophia Chen"
              role="Computer Science, Sophomore"
              image="/placeholder.svg?height=100&width=100"
              variants={fadeInUp}
            />

            <TestimonialCard
              quote="The quality of instruments is excellent, and the staff is super helpful. Made my band project so much easier!"
              name="Marcus Williams"
              role="Business Major, Senior"
              image="/placeholder.svg?height=100&width=100"
              variants={fadeInUp}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make Some <span className="text-purple-500">Music?</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-300 mb-8">
              Join hundreds of students who are already enjoying hassle-free instrument rentals on campus.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music className="h-6 w-6 text-purple-500" />
                <span className="text-lg font-bold">EZ MUSIC</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Making music accessible to all students on campus.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Instruments</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    String Instruments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Percussion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Keyboards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Recording Equipment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Rental Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} EZ MUSIC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component for instrument card
const InstrumentCard = ({ instrument, variants }) => {
  return (
    <motion.div variants={variants} className="group">
      <Card className="overflow-hidden bg-gray-900 border-gray-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={instrument.image || "/placeholder.svg"}
            alt={instrument.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-500/80 text-white rounded-full">
              {instrument.category}
            </span>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1">{instrument.name}</h3>
          <p className="text-gray-400 text-sm mb-3">{instrument.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-purple-400 font-bold">${instrument.price}/day</span>
            <Button size="sm" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
              Rent Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Component for step card
const StepCard = ({ number, title, description, icon, variants }) => {
  return (
    <motion.div variants={variants}>
      <Card className="bg-gray-900 border-gray-800 h-full">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 font-bold">
              {number}
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl">{title}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="p-4 rounded-full bg-gray-800">{icon}</div>
            <p className="text-gray-400">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Component for pricing card
const PricingCard = ({ title, price, description, features, buttonText, popular, variants }) => {
  return (
    <motion.div variants={variants} className="relative">
      {popular && (
        <div className="absolute -top-4 inset-x-0 flex justify-center">
          <span className="px-3 py-1 text-xs font-medium bg-purple-500 text-white rounded-full">Most Popular</span>
        </div>
      )}
      <Card
        className={`h-full bg-gray-900 border-gray-800 transition-all duration-300 ${popular ? "border-purple-500 shadow-lg shadow-purple-500/10" : ""}`}
      >
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className="mt-4">
            <span className="text-3xl font-bold">{price}</span>
            {title !== "Daily" && <span className="text-gray-400 ml-2">/period</span>}
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className={`w-full ${popular ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-800 hover:bg-gray-700"}`}
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

// Component for testimonial card
const TestimonialCard = ({ quote, name, role, image, variants }) => {
  return (
    <motion.div variants={variants}>
      <Card className="bg-gray-900 border-gray-800 h-full">
        <CardContent className="pt-6">
          <div className="mb-4">
            <svg className="h-8 w-8 text-purple-500 opacity-50" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>
          <p className="text-gray-300 mb-6">{quote}</p>
          <div className="flex items-center gap-4">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div>
              <h4 className="font-medium">{name}</h4>
              <p className="text-sm text-gray-400">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Sample instrument data
const instruments = [
  {
    name: "Acoustic Guitar",
    description: "Perfect for beginners and experienced players alike.",
    price: 12,
    category: "string",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Electric Guitar",
    description: "Rock out with this professional-grade electric guitar.",
    price: 15,
    category: "string",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Drum Kit",
    description: "Complete drum set for practice or performance.",
    price: 25,
    category: "percussion",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Digital Piano",
    description: "88-key weighted keyboard with realistic piano feel.",
    price: 20,
    category: "keyboard",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Violin",
    description: "Classical instrument with beautiful tone quality.",
    price: 18,
    category: "string",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Bass Guitar",
    description: "Lay down the groove with this quality bass guitar.",
    price: 14,
    category: "string",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Microphone Set",
    description: "Professional recording microphone with stand and pop filter.",
    price: 10,
    category: "recording",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Synthesizer",
    description: "Create electronic music with this versatile synth.",
    price: 22,
    category: "keyboard",
    image: "/placeholder.svg?height=400&width=400",
  },
]

