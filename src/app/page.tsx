import DotBackground from '@/components/DotBackground'
import { AboutMe } from '@/components/about-me'
import { Projects } from '@/components/projects'

export default function Home() {
  return (
    <div>
      <section id="home">
        <DotBackground>
          <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Hello, world!
          </h1>
        </DotBackground>
      </section>
      <AboutMe />
      <Projects />
    </div>
  )
}
