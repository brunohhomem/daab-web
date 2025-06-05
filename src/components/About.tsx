export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center max-w-[50rem] scroll-mt-20"
    >
      <h2 className="text-2xl font-bold mb-10">Sobre Nós</h2>

      <div className="flex flex-col items-center gap-6 text-justify">
        <p className="leading-relaxed">
          Com mais de{' '}
          <strong className="text-primary">
            20 anos de experiência em Perícias e Pareceres Técnicos
          </strong>
          , a <strong className="text-primary">DAAB Perícias</strong> foi
          fundada por{' '}
          <strong className="text-primary">Deborah Aparecida Assad Bazo</strong>
          , especialista em <em> Acidentes de Trânsito, Áudio e Imagens, Bens de luxo (Merceologia), Computação Forense, Contratos Digitais, Documentoscopia, Grafotécnica, Gemologia e Geociências, Identificação de I.A e Fake News, Identificação Humana Forense, Leitura Labial, Leitura Comportamental e Psicologia</em>. Desde o início, nossa missão tem sido oferecer{' '}
          <strong className="text-primary">laudo pericial</strong> de
          alto padrão científico, aplicando metodologias validadas e tecnologia
          de ponta para cada análise.
        </p>

        <div className="w-full p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
          <p className="leading-relaxed">
            Inspirada pela paixão por investigação e pelo compromisso com a{' '}
            <strong className="text-primary">verdade técnica</strong>, Deborah
            reuniu uma equipe multidisciplinar de peritos nas áreas mencionadas, e cada projeto é tratado com rigor, confidencialidade e agilidade —
            assegurando resultados sólidos para processos judiciais,
            corporativos e administrativos.
          </p>
        </div>

        <div className="w-full">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Ao escolher a DAAB Perícias, você conta com:
          </h3>
          <ul className="space-y-3">
            {[
              'Atendimento e análises online',
              'Laudo pericial e parecer técnico de excelência e qualidade',
              'Perícia grafotécnica no Brasil e América Latina.',
              'Perícia, consultoria e relatórios com entrega dentro do prazo',
              'Valores acessíveis e facilitados'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="navy"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>
                  {item.includes('online') ? (
                    <>
                      {item.split('online')[0]}
                      <em>online</em>
                      {item.split('online')[1]}
                    </>
                  ) : (
                    item
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="leading-relaxed bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-lg">
          Nossa atuação, presencial e remota, permite atender clientes em todo o
          Brasil, garantindo{' '}
          <strong className="text-primary">perícia <i>online</i></strong> ou
          presencial, com total segurança e <i>compliance</i> à{' '}
          <strong className="text-primary">LGPD</strong>. Descubra como podemos
          ajudar a esclarecer questões complexas e proteger seus direitos com
          excelência técnica.
        </p>
      </div>
    </section>
  )
}
