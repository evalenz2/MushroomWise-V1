import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MouseIcon as Mushroom } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LearnPage() {
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
            <Link href="/learn" className="text-sm font-medium text-amber-700 transition-colors">
              Learn
            </Link>
            <Link href="/stories" className="text-sm font-medium hover:text-amber-700 transition-colors">
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
                  Learn About Mushroom Wellness
                </h1>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Free educational resources to help you navigate the world of medicinal mushrooms safely and
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="guides" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="guides">Beginner Guides</TabsTrigger>
                <TabsTrigger value="dosage">Dosage Charts</TabsTrigger>
                <TabsTrigger value="mistakes">Common Mistakes</TabsTrigger>
              </TabsList>
              <TabsContent value="guides" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="group relative overflow-hidden rounded-lg border">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        width={400}
                        height={300}
                        alt="Introduction to Medicinal Mushrooms"
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-amber-900">Introduction to Medicinal Mushrooms</h3>
                      <p className="line-clamp-2 text-sm text-gray-600 mt-2">
                        Learn about the history, benefits, and science behind the most popular medicinal mushrooms.
                      </p>
                      <Link
                        href="/learn/introduction"
                        className="mt-4 inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-800"
                      >
                        Read More
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
                          className="ml-1 h-4 w-4"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-lg border">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        width={400}
                        height={300}
                        alt="Getting Started with Lion's Mane"
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-amber-900">Getting Started with Lion's Mane</h3>
                      <p className="line-clamp-2 text-sm text-gray-600 mt-2">
                        Everything you need to know about Lion's Mane mushroom for cognitive health and nervous system
                        support.
                      </p>
                      <Link
                        href="/learn/lions-mane"
                        className="mt-4 inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-800"
                      >
                        Read More
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
                          className="ml-1 h-4 w-4"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-lg border">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        width={400}
                        height={300}
                        alt="Reishi for Stress and Sleep"
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-amber-900">Reishi for Stress and Sleep</h3>
                      <p className="line-clamp-2 text-sm text-gray-600 mt-2">
                        How to use Reishi mushroom to support stress management, better sleep, and overall wellness.
                      </p>
                      <Link
                        href="/learn/reishi"
                        className="mt-4 inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-800"
                      >
                        Read More
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
                          className="ml-1 h-4 w-4"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="dosage" className="space-y-8">
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Comprehensive Dosage Charts</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="font-medium text-amber-800">Lion's Mane (Hericium erinaceus)</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Form</th>
                              <th className="text-left p-2">Beginner Dose</th>
                              <th className="text-left p-2">Standard Dose</th>
                              <th className="text-left p-2">Frequency</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-2">Powder</td>
                              <td className="p-2">500mg</td>
                              <td className="p-2">1000-2000mg</td>
                              <td className="p-2">1-2 times daily</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">Capsules</td>
                              <td className="p-2">1 capsule (500mg)</td>
                              <td className="p-2">2-4 capsules</td>
                              <td className="p-2">1-2 times daily</td>
                            </tr>
                            <tr>
                              <td className="p-2">Tincture</td>
                              <td className="p-2">0.5ml</td>
                              <td className="p-2">1-2ml</td>
                              <td className="p-2">1-3 times daily</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-amber-800">Reishi (Ganoderma lucidum)</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Form</th>
                              <th className="text-left p-2">Beginner Dose</th>
                              <th className="text-left p-2">Standard Dose</th>
                              <th className="text-left p-2">Frequency</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-2">Powder</td>
                              <td className="p-2">500mg</td>
                              <td className="p-2">1500-3000mg</td>
                              <td className="p-2">1-2 times daily</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">Capsules</td>
                              <td className="p-2">1 capsule (500mg)</td>
                              <td className="p-2">3-6 capsules</td>
                              <td className="p-2">1-2 times daily</td>
                            </tr>
                            <tr>
                              <td className="p-2">Tincture</td>
                              <td className="p-2">0.5ml</td>
                              <td className="p-2">1-3ml</td>
                              <td className="p-2">1-3 times daily</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/learn/dosage-charts"
                      className="inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-800"
                    >
                      View Complete Dosage Guide
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
                        className="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="mistakes" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border p-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-4">Top 5 Mistakes to Avoid</h3>
                    <ol className="space-y-4 list-decimal list-inside">
                      <li className="text-gray-600">
                        <span className="font-medium text-amber-800">Using low-quality products</span>
                        <p className="mt-1 ml-6">
                          Always choose mushroom supplements from reputable sources with third-party testing for quality
                          and potency.
                        </p>
                      </li>
                      <li className="text-gray-600">
                        <span className="font-medium text-amber-800">Inconsistent usage</span>
                        <p className="mt-1 ml-6">
                          Medicinal mushrooms work best when taken consistently over time. Results may take 2-4 weeks to
                          become noticeable.
                        </p>
                      </li>
                      <li className="text-gray-600">
                        <span className="font-medium text-amber-800">Ignoring extraction method</span>
                        <p className="mt-1 ml-6">
                          Look for dual-extracted products (both water and alcohol extraction) to get the full spectrum
                          of beneficial compounds.
                        </p>
                      </li>
                      <li className="text-gray-600">
                        <span className="font-medium text-amber-800">Taking too much too soon</span>
                        <p className="mt-1 ml-6">
                          Start with a lower dose and gradually increase to allow your body to adjust and minimize
                          potential side effects.
                        </p>
                      </li>
                      <li className="text-gray-600">
                        <span className="font-medium text-amber-800">Not checking for interactions</span>
                        <p className="mt-1 ml-6">
                          Some mushrooms may interact with medications. Always consult with a healthcare provider before
                          starting any supplement.
                        </p>
                      </li>
                    </ol>
                  </div>
                  <div className="rounded-lg border p-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-4">How to Choose Quality Products</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-amber-800">Look for:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Organic certification</li>
                          <li>Third-party testing</li>
                          <li>Fruiting body (not mycelium on grain)</li>
                          <li>Beta-glucan content listed</li>
                          <li>Transparent sourcing information</li>
                          <li>Proper extraction methods</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-amber-800">Red flags:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Extremely low prices</li>
                          <li>"Myceliated brown rice" as main ingredient</li>
                          <li>No mention of extraction method</li>
                          <li>Exaggerated health claims</li>
                          <li>No testing information available</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">
                    Want Personalized Guidance?
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                    Join our upcoming community platform for access to expert Q&As, personalized recommendations, and a
                    supportive network of mushroom enthusiasts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-amber-700 hover:bg-amber-800">Join the Waitlist</Button>
                  <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Community illustration"
                  className="rounded-lg object-cover"
                />
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
