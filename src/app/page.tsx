import About from '@/components/About'
import Intro from '@/components/Intro'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <About />
    </main>
  )
}
