import Image from 'next/image'
import logo from '../../public/logo.png'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center max-w-[60rem] py-12 sm:py-16 scroll-mt-20 -mb-12"
    >
      <Image
        src={logo}
        alt="DAAB Perícias Logo"
        width={300}
        height={200}
        className="mb-5"
        suppressHydrationWarning
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">
        Deborah Aparecida Assad Bazo
        <span className="block text-2xl md:text-3xl mt-2 text-text-secondary">
          Excelência em Perícia e Assistência Técnica
        </span>
      </h1>

      <h2 className="text-xl text-text-secondary text-center max-w-2xl leading-relaxed">
        Laudos e Pareceres técnicos com{' '}
        <span className="text-primary font-semibold">rigor científico</span>,
        <span className="text-primary font-semibold"> confidencialidade</span> e
        <span className="text-primary font-semibold"> entrega ágil</span>.
      </h2>

      <div className="mt-10 flex gap-4">
        <a href="#services">
          <Button className="bg-blue-950 shadow-accent-foreground cursor-pointer hover:bg-amber-400">
            Nossos Serviços
          </Button>
        </a>
        <a href="#contact">
          <Button variant={'outline'} className='border-1 border-black shadow-accent-foreground cursor-pointer'>Entre em Contato</Button>
        </a>
      </div>
    </section>
  )
}
