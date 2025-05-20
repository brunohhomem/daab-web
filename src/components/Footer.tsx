import Image from 'next/image'
import { Instagram } from 'lucide-react'
import whatsapp from '../../public/whatsapp.svg'

export default function Footer() {
  return (
    <footer className="mt-20 py-10 px-4 bg-primary text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">
                DAAB Perícias
              </h3>
              <p className="text-white/80 leading-relaxed">
                Excelência em perícias técnicas com rigor científico,
                confidencialidade e entrega ágil.
              </p>
            </div>
            <div className='flex justify-center align-middle items-center mt-4 gap-4'>
              <a
                href="https://www.instagram.com/daabpericias1/"
                target="_blank"
              >
                <Instagram className="size-10" />
              </a>
                <a
                  href="https://wa.me/+551199405478?text=Olá, ví seu site e gostaria de mais informações sobre seus serviços"
                  className="flex gap-2"
                  target='_blank'
                >
                <Image
                  src={whatsapp}
                  alt="Whatsapp"
                  width={40}
                  height={40}
                  suppressHydrationWarning
                />
                </a>
              
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Contato</h3>
            <ul className="space-y-2 text-white/80">
              <li>Email: contato@daab.com.br</li>
              <li>Telefone: 
                <a
                  href="https://wa.me/+551199405478?text=Olá, ví seu site e gostaria de mais informações sobre seus serviços"
                  className="flex gap-2"
                  target='_blank'
                >
                  (11) 99940-5478
                <Image
                  src={whatsapp}
                  alt="Whatsapp"
                  width={20}
                  height={20}
                  className="mb-5"
                  suppressHydrationWarning
                />
                </a></li>
              <li>São Paulo - SP</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">
              Áreas de Atuação
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>Grafotécnica e Documentoscopia</li>
              <li>Documentos e Contratos Digitais</li>
              <li>Identificação de Áudio e Imagens</li>
              <li>Joalheria e Gemologia</li>
              <li>Computação Forense e Perícia Digital</li>
              <li>Obras de Arte</li>
              <li>Merceologia</li>
              <li>Perícia Ambiental</li>
              <li>Acidentes de Trânsito</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-white/60">
          <p>
            <span className="block md:inline">
              © 2025 DAAB Perícias – Todos os direitos reservados
            </span>
            {/* <span className="hidden md:inline mx-2">|</span>
            <span className="block md:inline">CNPJ: XX.XXX.XXX/0001-XX</span> */}
          </p>
          <p className="mt-2 text-sm">
            Leitura de Dados Pessoais e Consentimento de Cookies em conformidade
            com a LGPD (Lei nº 13.709/2018)
          </p>
          <p className="mt-2 text-sm">@brunohhomem</p>
        </div>
      </div>
    </footer>
  )
}
