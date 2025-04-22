import Image from 'next/image'
import logo from '../../public/logo.png'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="m-20">
        <Image src={logo} alt="Logo" sizes="20" suppressHydrationWarning />
      </div>
      <h1>
        DEBORAH APARECIDA ASSAD BAZO: EQUIPE DE PERITOS e ASSISTENTES TÉCNICOS À
        SUA DISPOSIÇÃO
      </h1>
      <h2>🚧 Em desenvolvimento 🚧</h2>
      <h3>@brunohhomem</h3>
    </main>
  )
}
