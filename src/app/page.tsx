import About from '@/components/About'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <Services />
    </main>
  )
}
