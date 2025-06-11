import Carrossel from './Carrossel'
import { Button } from './ui/button'

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col items-center max-w-[60rem] scroll-mt-20"
    >
      <h2 className="text-2xl font-bold mb-10">Nossos Serviços</h2>

      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-4 rounded-lg mb-8 text-center flex items-center justify-center">
        <p className="italic text-text-secondary">
          <span className="text-primary font-semibold">Em breve:</span> Cursos e
          Workshops – Cadastre-se na lista de espera dos nossos Cursos.

        </p>
        <Button className="text-secondary font-semibold ml-2 bg-blue-950 hover:bg-amber-400">
          <a
            href="https://forms.gle/xTHjg3LnSu5GbtcG9"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            Entrar na Lista de Espera
          </a>
        </Button>
      </div>

      <Carrossel />
    </section>
  )
}
