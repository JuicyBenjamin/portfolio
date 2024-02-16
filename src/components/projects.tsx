/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/6JiWFWzWjsX
 */
import Link from 'next/link'
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from '@/components/ui/card'
import Image from 'next/image'

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 h-[100vh]">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Check out some of my recent work.
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-visible relative">
            <Link
              className="absolute inset-0 z-10 rounded-lg focus:outline-none"
              href="#"
            />
            <CardContent className="p-6 flex flex-col">
              <div className="space-y-2 flex-1">
                <CardTitle className="text-xl font-semibold">
                  Project One
                </CardTitle>
                <CardDescription className="text-sm">
                  This is the first project description. It&apos;s a very cool
                  project that does a lot of things.
                </CardDescription>
              </div>
            </CardContent>
            <Image
              alt="Project One"
              className="aspect-video overflow-hidden rounded-b-lg object-cover object-center w-full"
              height="200"
              src="/placeholder.svg"
              width="400"
            />
          </Card>
          <Card className="overflow-visible relative">
            <Link
              className="absolute inset-0 z-10 rounded-lg focus:outline-none"
              href="#"
            />
            <CardContent className="p-6 flex flex-col">
              <div className="space-y-2 flex-1">
                <CardTitle className="text-xl font-semibold">
                  Project Two
                </CardTitle>
                <CardDescription className="text-sm">
                  This is the second project description. It&apos;s a very cool
                  project that does a lot of things.
                </CardDescription>
              </div>
            </CardContent>
            <Image
              alt="Project Two"
              className="aspect-video overflow-hidden rounded-b-lg object-cover object-center w-full"
              height="200"
              src="/placeholder.svg"
              width="400"
            />
          </Card>
          <Card className="overflow-visible relative">
            <Link
              className="absolute inset-0 z-10 rounded-lg focus:outline-none"
              href="#"
            />
            <CardContent className="p-6 flex flex-col">
              <div className="space-y-2 flex-1">
                <CardTitle className="text-xl font-semibold">
                  Project Three
                </CardTitle>
                <CardDescription className="text-sm">
                  This is the third project description. It&apos;s a very cool
                  project that does a lot of things.
                </CardDescription>
              </div>
            </CardContent>
            <Image
              alt="Project Three"
              className="aspect-video overflow-hidden rounded-b-lg object-cover object-center w-full"
              height="200"
              src="/placeholder.svg"
              width="400"
            />
          </Card>
        </div>
      </div>
    </section>
  )
}
