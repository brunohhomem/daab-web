import Carrossel from './Carrossel'

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col items-center max-w-[60rem] scroll-mt-20"
    >
      <h2 className="text-2xl font-bold mb-10">Nossos Serviços</h2>

      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-4 rounded-lg mb-8 text-center">
        <p className="italic text-text-secondary">
          <span className="text-primary font-semibold">Em breve:</span> Cursos e
          Workshops – Cadastre-se na lista de espera dos nossos Cursos.
        </p>
      </div>

      <Carrossel />
    </section>
  )
}
