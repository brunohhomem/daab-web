import Image from 'next/image'
import logo from '../../public/logo.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center max-w-[60rem] sm:mb-0 scroll-mt-20"
    >
      <div className="m-20">
        <Image src={logo} alt="Logo" sizes="20" suppressHydrationWarning />
      </div>
      <h1 className="text-zinc-700 text-2xl font-bold tracking-tight mb-4 text-center">
        Deborah Aparecida Assad Bazo – Excelência em Perícias Técnicas
      </h1>
      <h2 className="font-semibold">
        Laudos e pareceres periciais com rigor científico, confidencialidade e
        entrega ágil.
      </h2>
    </section>
  )
}
