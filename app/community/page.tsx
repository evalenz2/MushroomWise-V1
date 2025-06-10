import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MouseIcon as Mushroom } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityPage() {
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
            <Link href="/community" className="text-sm font-medium text-amber-700 transition-colors">
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
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                    Coming Soon
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-amber-900">
                    Join Our Circle Community
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                    A vibrant, supportive space where mushroom enthusiasts connect, share experiences, and learn from
                    experts in the field.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-amber-700 hover:bg-amber-800">Join the Waitlist</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Community illustration"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">What to Expect</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our Circle community platform will offer exclusive benefits to help you on your mushroom wellness
                  journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-amber-900">Expert Q&A Sessions</CardTitle>
                  <CardDescription>Direct access to mushroom experts</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Regular live sessions with mycologists, herbalists, and wellness practitioners to answer your
                    specific questions.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-amber-900">Member Discounts</CardTitle>
                  <CardDescription>Save on quality products</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Exclusive discounts on vetted, high-quality mushroom products from our trusted partner brands.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-amber-900">Private Forums</CardTitle>
                  <CardDescription>Connect with like-minded people</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Dedicated discussion spaces organized by topics like specific mushroom varieties, wellness goals,
                    and preparation methods.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-amber-900">Early Access</CardTitle>
                  <CardDescription>Be the first to know</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get early access to new educational content, research findings, and community events before they're
                    publicly available.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-amber-900">Resource Library</CardTitle>
                  <CardDescription>Comprehensive knowledge base</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Access our growing library of guides, research summaries, recipes, and preparation techniques.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-amber-900">Community Support</CardTitle>
                  <CardDescription>Share experiences and insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Connect with others on similar wellness journeys to share experiences, challenges, and successes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">Join the Waitlist</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be the first to know when our community platform launches and receive exclusive early access.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg space-y-4 py-12">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="border-amber-200 focus-visible:ring-amber-700"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    className="border-amber-200 focus-visible:ring-amber-700"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="interests"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    What interests you most about mushroom wellness?
                  </label>
                  <Textarea
                    id="interests"
                    placeholder="Tell us about your interests or goals"
                    className="min-h-[100px] border-amber-200 focus-visible:ring-amber-700"
                  />
                </div>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">Join Waitlist</Button>
              </form>
              <p className="text-xs text-center text-gray-500">
                We respect your privacy and will never share your information with third parties.
              </p>
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
