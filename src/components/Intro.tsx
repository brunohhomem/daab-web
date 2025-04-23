import Image from 'next/image'
import logo from '../../public/logo.png'

export default function Intro() {
  return (
    <section
      id="home"
      className="flex flex-col items-center mb-28 max-w-[50rem] sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="m-20">
        <Image src={logo} alt="Logo" sizes="20" suppressHydrationWarning />
      </div>
      <h1 className="text-zinc-700 text-2xl font-bold tracking-tight mb-4 text-center">
        DEBORAH APARECIDA ASSAD BAZO: EQUIPE DE PERITOS e ASSISTENTES TÉCNICOS À
        SUA DISPOSIÇÃO
      </h1>
    </section>
  )
}
