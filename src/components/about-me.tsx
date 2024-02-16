/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/8YT8XLyfuUa
 */
import Link from 'next/link'
import Image from 'next/image'

export function AboutMe() {
  return (
    <section className="w-full py-12 lg:py-16 xl:py-20">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_600px]">
        <Image
          alt="Photo"
          className="rounded-full w-full max-w-[250px] border aspect-square object-cover object-center justify-self-start"
          height="600"
          src="/placeholder.svg"
          width="600"
        />
        <div className="grid gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {"Hi, I'm Benjamin"}
            </h2>
            <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Passionate about creating elegant solutions to complex problems.
              I&apos;m a frontend developer with experience in a variety of
              modern web technologies. I believe in writing clean, maintainable
              code and love diving into new frameworks and libraries. When
              I&apos;m not coding, you can find me exploring new board games,
              hanging out with friends or chilling in Summoners Rift.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="rounded-full bg-gray-100/30 px-3 py-1 text-sm dark:bg-gray-800/30">
              JavaScript
            </div>
            <div className="rounded-full bg-gray-100/30 px-3 py-1 text-sm dark:bg-gray-800/30">
              React
            </div>
            <div className="rounded-full bg-gray-100/30 px-3 py-1 text-sm dark:bg-gray-800/30">
              Node.js
            </div>
            <div className="rounded-full bg-gray-100/30 px-3 py-1 text-sm dark:bg-gray-800/30">
              TypeScript
            </div>
            <div className="rounded-full bg-gray-100/30 px-3 py-1 text-sm dark:bg-gray-800/30">
              MongoDB
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 h-10 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View Projects
            </Link>
            <Link
              className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 h-10 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
