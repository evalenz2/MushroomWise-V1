import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MouseIcon as Mushroom } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function StoriesPage() {
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
            <Link href="/stories" className="text-sm font-medium text-amber-700 transition-colors">
              Stories
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-amber-700 transition-colors">
              Community
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-amber-700 transition-colors">
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-amber-900">
                  Real Stories from Our Community
                </h1>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Authentic experiences and transformations from people just like you who have embraced mushroom
                  wellness.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-amber-900">My Journey with Lion's Mane</CardTitle>
                  <CardDescription>A story of cognitive recovery and mental clarity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-md mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Person holding Lion's Mane mushroom"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-gray-600">
                    "After struggling with brain fog and concentration issues for years following a concussion, I
                    discovered Lion's Mane mushroom. Within weeks of consistent use, I noticed significant improvements
                    in my memory, focus, and overall cognitive function..."
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-amber-100 text-amber-800">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">James D.</p>
                      <p className="text-xs text-gray-500">Software Engineer</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-amber-700 hover:text-amber-800 hover:bg-amber-50">
                    Read Full Story
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-amber-900">Reishi Changed My Sleep</CardTitle>
                  <CardDescription>From insomnia to restful nights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-md mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Person sleeping peacefully"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-gray-600">
                    "I've struggled with insomnia for over a decade, trying everything from prescription medications to
                    meditation. When I started taking Reishi mushroom extract in the evenings, I noticed a gradual but
                    significant improvement in both falling asleep and staying asleep..."
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-amber-100 text-amber-800">SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Sarah M.</p>
                      <p className="text-xs text-gray-500">Yoga Instructor</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-amber-700 hover:text-amber-800 hover:bg-amber-50">
                    Read Full Story
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-amber-900">Turkey Tail for Immune Support</CardTitle>
                  <CardDescription>Building resilience through natural wellness</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-md mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Turkey Tail mushrooms growing on wood"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-gray-600">
                    "After recovering from a serious illness, I was looking for natural ways to support my immune
                    system. Turkey Tail mushroom became an essential part of my daily routine. Not only did I experience
                    fewer seasonal illnesses, but my energy levels improved significantly..."
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-amber-100 text-amber-800">RL</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Robert L.</p>
                      <p className="text-xs text-gray-500">Retired Teacher</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-amber-700 hover:text-amber-800 hover:bg-amber-50">
                    Read Full Story
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold tracking-tighter text-amber-900 mb-6">Founder's Story</h2>
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
                  <div className="md:w-1/3">
                    <Avatar className="h-32 w-32 mx-auto">
                      <AvatarFallback className="bg-amber-100 text-amber-800 text-2xl">EV</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="md:w-2/3 text-left">
                    <h3 className="text-xl font-bold text-amber-900">Emanuel Valenzuela</h3>
                    <p className="text-gray-600 mt-2">
                      "My journey with medicinal mushrooms began after years of struggling with chronic stress and poor
                      sleep. Traditional approaches weren't working, and I found myself diving deep into research on
                      natural alternatives. What started as a personal quest for wellness evolved into a passion for
                      sharing knowledge and building a community around these incredible natural remedies.
                    </p>
                    <p className="text-gray-600 mt-4">
                      I founded MushroomWise with a simple mission: to make reliable, science-backed information about
                      mushroom wellness accessible to everyone, and to create a supportive community where people can
                      share experiences and learn together. I believe in transparency, education, and the power of
                      natural healing."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold tracking-tighter text-amber-900 mb-6">Share Your Story</h2>
              <p className="max-w-2xl mx-auto text-gray-600 mb-8">
                Has mushroom wellness made a difference in your life? We'd love to hear about your experience and
                potentially feature your story on our platform.
              </p>
              <Button className="bg-amber-700 hover:bg-amber-800">Submit Your Story</Button>
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
