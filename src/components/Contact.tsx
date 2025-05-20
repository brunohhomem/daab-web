"use client"

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from './ui/button'
import Image from 'next/image'
import whatsapp from '../../public/whatsapp.svg'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    const serviceId = 'service_9nbbbuk'
    const templateId = 'template_inmy07e'
    const publicKey = 'SHlfC4uD6MrqVVz5H'

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text)
        alert('Mensagem enviada com sucesso!')
        form.current?.reset()
      }, (error) => {
        console.log(error.text)
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
      })
  }

  return (
    <section
      id="contact"
      className="flex flex-col items-center max-w-[50rem] scroll-mt-20"
    >
      <h2 className="text-2xl font-bold mb-10">Contato</h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card flex flex-col">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Informações de Contato
          </h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="text-accent mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:contato@daab.com.br"
                  className="text-primary hover:text-blue-950 transition-colors"
                >
                  contato@daab.com.br
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-accent mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium">Telefone</p>
                <a
                  href="https://wa.me/+551199405478?text=Olá, ví seu site e gostaria de mais informações sobre seus serviços"
                  className="text-primary hover:text-blue-950 transition-colors flex gap-2 align-middle justify-center"
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
                </a>

              </div>
            </div>

            <div className="flex items-start">
              <div className="text-accent mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <p className="font-medium">Endereço</p>
                <p className="text-text-secondary">São Paulo - SP</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-text-tertiary italic">
            Entre em contato para agendar uma consulta ou solicitar mais
            informações sobre nossos serviços.
          </p>
        </div>

      <div className="bg-card rounded-lg border border-border p-6 transition-all duration-300 shadow-md">
        <h3 className="text-xl font-semibold mb-4">Solicite um Orçamento</h3>
        <p className="mb-6">
          Preencha o formulário abaixo e entraremos em contato em até 24
          horas.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Nome</label>
            <input
              type="text"
              name="user_name"
              required
              className="px-3 py-2 bg-zinc-100 border border-white/20 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="px-3 py-2 bg-zinc-100 border border-white/20 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Serviço de Interesse
            </label>
            <select 
              name="service"
              required
              className="px-3 py-2 bg-zinc-100 border border-white/20 rounded-md"
            >
              <option className="text-sm font-medium mb-1">
                  Selecione um serviço
                </option>
                <option>Grafotécnica & Documentoscopia</option>
                <option>Identificação de Áudio & Imagens</option>
                <option>Joalheria & Gemologia</option>
                <option>Computação Forense & Perícia Digital</option>
                <option>Obras de Arte</option>
                <option>Merceologia</option>
                <option>Perícia Ambiental</option>
                <option>Acidentes de Trânsito</option>
                <option>Outros</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Mensagem</label>
            <textarea 
              name="message"
              required
              className="px-3 py-2 bg-zinc-100 border border-white/20 rounded-md"
            ></textarea>
          </div>

          <Button 
            type="submit"
            className="bg-blue-950 hover:bg-amber-400 px-4 py-2 rounded-md transition-all duration-200 font-semibold w-full"
          >
            Enviar Solicitação
          </Button>
        </form>
      </div>
      </div>
    </section>
  )
}
