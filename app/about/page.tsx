import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MouseIcon as Mushroom } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Mushroom className="h-6 w-6 text-amber-700" />
            <span className="font-semibold text-xl">MushroomWise</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-amber-700 transition-colors">
              Home
            </Link>
            <Link href="/learn" className="text-sm font-medium hover:text-amber-700 transition-colors">
              Learn
            </Link>
            <Link href="/stories" className="text-sm font-medium hover:text-amber-700 transition-colors">
              Stories
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-amber-700 transition-colors">
              Community
            </Link>
            <Link href="/about" className="text-sm font-medium text-amber-700 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-amber-700 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex border-amber-700 text-amber-700 hover:bg-amber-50">
              Join Waitlist
            </Button>
            <Button className="hidden md:flex bg-amber-700 hover:bg-amber-800">Start Learning</Button>
            <Button variant="ghost" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-amber-900">About MushroomWise</h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                    We're on a mission to make mushroom wellness education accessible, transparent, and
                    community-driven.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Mushroom illustration"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 mx-auto max-w-3xl">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter text-amber-900">Our Story</h2>
                <p className="text-gray-600">
                  MushroomWise was born from founder Emanuel Valenzuela's personal journey with medicinal mushrooms.
                  After experiencing the transformative benefits of mushroom supplements for his own health challenges,
                  Emanuel discovered a significant gap in accessible, reliable information for beginners.
                </p>
                <p className="text-gray-600">
                  What started as personal research notes and a small online community has evolved into MushroomWise—a
                  platform dedicated to demystifying mushroom wellness through education, authentic storytelling, and
                  community support.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter text-amber-900">Our Mission</h2>
                <p className="text-gray-600">
                  At MushroomWise, we believe that everyone deserves access to clear, science-backed information about
                  natural wellness options. Our mission is to empower individuals to make informed decisions about
                  mushroom supplements through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                  <li>Providing accessible, jargon-free educational resources</li>
                  <li>Sharing authentic experiences and testimonials</li>
                  <li>Building a supportive community of mushroom enthusiasts</li>
                  <li>Promoting transparency in product selection and usage</li>
                  <li>Bridging traditional wisdom with modern scientific research</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter text-amber-900">Our Values</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-amber-800">Transparency</h3>
                    <p className="text-gray-600">
                      We believe in complete honesty about what we know, what we don't know, and the current state of
                      research in mushroom wellness.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-amber-800">Simplicity</h3>
                    <p className="text-gray-600">
                      We break down complex information into clear, actionable guidance that anyone can understand and
                      apply.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-amber-800">Community-First</h3>
                    <p className="text-gray-600">
                      We prioritize building a supportive network where experiences and knowledge are freely shared.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-amber-800">Education</h3>
                    <p className="text-gray-600">
                      We're committed to ongoing learning and sharing evidence-based information that empowers informed
                      decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter text-amber-900">Meet the Founder</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="rounded-full bg-amber-100 p-2">
                      <div className="h-40 w-40 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 text-2xl font-bold">
                        EV
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-amber-900">Emanuel Valenzuela</h3>
                    <p className="text-gray-600 mt-2">
                      Emanuel's background spans wellness coaching, herbal studies, and community building. His personal
                      experience with chronic stress and sleep issues led him to discover the benefits of medicinal
                      mushrooms, sparking a passion for making this knowledge accessible to others.
                    </p>
                    <p className="text-gray-600 mt-4">
                      "I believe that natural wellness should be approachable for everyone. My goal with MushroomWise is
                      to create the resource I wish I had when I first started exploring mushroom supplements—clear,
                      honest, and community-supported."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">Join Our Community</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of our growing network of mushroom enthusiasts and wellness seekers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-amber-700 hover:bg-amber-800">Join the Waitlist</Button>
                <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-100">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-amber-50 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Mushroom className="h-6 w-6 text-amber-700" />
            <p className="text-sm font-medium">© {new Date().getFullYear()} MushroomWise. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="text-xs hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-xs hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs hover:underline underline-offset-4">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
