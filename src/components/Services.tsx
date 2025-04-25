import Carrossel from './Carrossel'

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col items-center flex-grow max-w-[50rem] sm:mb-0 scroll-mt-20"
    >
      <h2 className="text-zinc-700 text-2xl font-bold tracking-tight mb-4 text-center">
        Serviços
      </h2>
      <p className="italic mb-4">
        Em breve: Cursos e Workshops – Cadastre-se na lista de espera dos nossos
        Cursos em Perícias Técnicas.
      </p>

      <Carrossel />
    </section>
  )
}
