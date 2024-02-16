/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/mU0SzXtcZ7E
 */
import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="absolute z-10 grid w-full border-t-2 border-gray-100/50 backdrop-blur-sm md:border-t-0/60 lg:border-t-2/50 dark:border-gray-950/50 dark:border-gray-950 backdrop-blur-sm/60">
      <div className="container grid pt-4 gap-4 text-center md:pt-12 md:grid-cols-[1fr_2fr] lg:gap-0 lg:grid-cols-[1fr_3fr]">
        <div className="flex items-center justify-center gap-4 md:justify-start md:gap-6">
          <Link
            className="flex items-center gap-2 text-base font-semibold md:gap-2 md:text-lg"
            href="#home"
          >
            <span>Home</span>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 md:justify-end md:gap-8">
          <Link
            className="inline-flex items-center gap-2 text-base font-semibold md:gap-2 md:text-lg"
            href="#"
          >
            <span>About</span>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="sr-only">About</span>
          </Link>
          <Link
            className="inline-flex items-center gap-2 text-base font-semibold md:gap-2 md:text-lg"
            href="#"
          >
            <span>Projects</span>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="sr-only">Projects</span>
          </Link>
          <Link
            className="inline-flex items-center gap-2 text-base font-semibold md:gap-2 md:text-lg"
            href="#"
          >
            <span>Skills</span>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="sr-only">Skills</span>
          </Link>
          <Link
            className="inline-flex items-center gap-2 text-base font-semibold md:gap-2 md:text-lg"
            href="#"
          >
            <span>Contact</span>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="sr-only">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
