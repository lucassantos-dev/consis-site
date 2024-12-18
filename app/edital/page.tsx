'use client'
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { FileText } from 'lucide-react'
import { useState } from "react"

export default function EditalPage() {
  const [file, setFile] = useState<File | null>(null)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!file || !name || !phone || !email) {
      setMessage("Por favor, preencha todos os campos e anexe um arquivo.")
      return
    }

    setIsSubmitting(true)
    setMessage("")

    const formData = new FormData()
    formData.append("file", file)
    formData.append("name", name)
    formData.append("phone", phone)
    formData.append("email", email)

    try {
      const response = await fetch("/api/recurso", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setMessage("Recurso enviado com sucesso!")
        setFile(null)
        setName("")
        setPhone("")
        setEmail("")
      } else {
        setMessage("Falha ao enviar o recurso. Tente novamente.")
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage("Erro ao enviar o recurso. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-[#405546] text-3xl font-bold">
              EDITAL 001/2024
            </h1>
            <h2 className="text-[#405546] text-xl font-semibold">
              PROCESSO SELETIVO PÚBLICO – SÃO JOSÉ DO EGITO/PE
            </h2>
          </div>

          {/* Documents Section */}
          {/* Documents Section */}
<Card className="p-6">
  <h3 className="text-[#405546] text-xl font-semibold mb-4">
    Documentos do Edital
  </h3>
  <div className="space-y-4">
    {[
      { name: "Edital Completo", size: "13.8 MB", link: '/Edital-001-2024.pdf' },
      { name: "Aditivo - 001 2024", size: "668 KB", link: '/Aditivo-001-2024-processo-seletivo-para-agente-comunitário-de-saúde-ACS-e-ACE.pdf' },
      { name: "Resultado Preliminar Isenção Seleção", size: "188 KB", link: '/Resultado-Preliminar-Isenção-Seleção.pdf' },
      { name: "Publicação resultado candidatos pagos ace e acs - 18-12-2024", size: "166 KB", link: '/Publicação resultado candidatos pagos ace e acs 18.12.pdf' },
      { name: "Resultado concorrência para vaga PCD seleção 2024 - 18-12-2024", size: "188 KB", link: '/Resultado concorrência para vaga PCD seleção 2024.pdf' },
      { name: "ACE ACS", size: "131 KB", link: '/ACE ACS.pdf' },
    ].map((doc, index) => (
      <div
        key={index}
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
      >
        <div className="flex items-center space-x-3">
          <FileText className="h-5 w-5 text-[#405546]" />
          <span className={`text-[#405546] ${index >= 3 ? 'font-bold' : ''}`}>
            {doc.name}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">{doc.size}</span>
          <Link
            href={doc.link}
            className="px-4 py-2 text-sm border border-[#405546] text-[#405546] rounded-md hover:bg-[#405546] hover:text-white transition-colors"
          >
            Download
          </Link>
        </div>
      </div>
    ))}
  </div>
</Card>

          {/* Important Information */}
          <Card className="p-6">
            <h3 className="text-[#405546] text-xl font-semibold mb-4">
              Informações Importantes
            </h3>
            <div className="prose max-w-none text-[#405546]">
              <p>
                O PREFEITO DE SÃO JOSÉ DO EGITO, ESTADO DO PERNAMBUCO, no uso de suas
                atribuições legais, com fundamento no parágrafo 4º, do art. 198, da
                Constituição Federal de 1988, torna público a abertura de inscrições
                para o processo seletivo público para preenchimento de vagas e
                cadastro reserva.
              </p>
              <p className="mt-4">
                Organização: CONSIS-CONSULTORIA, ASSESSORIA E TECNOLOGIA DA
                INFORMAÇÃO LTDA
              </p>
              <p className="mt-2">
                CNPJ: 05.587.013/0001-22
              </p>
            </div>
          </Card>
               {/* Resource Submission Section */}
               <Card className="p-6">
            <h3 className="text-[#405546] text-xl font-semibold mb-4">
              Envio de Recurso
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#405546]">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 block w-full border rounded-md px-4 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#405546]">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 block w-full border rounded-md px-4 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#405546]">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 block w-full border rounded-md px-4 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="file" className="block text-sm font-medium text-[#405546]">
                  Anexar Arquivo
                </label>
                <input
                  type="file"
                  id="file"
                    accept="application/pdf"
                  onChange={handleFileChange}
                  className="mt-2 block w-full border rounded-md px-4 py-2"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 text-sm font-medium text-white bg-[#405546] rounded-md hover:bg-[#324435] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Enviar Recurso"}
              </button>
            </form>
            {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
          </Card>
        </div>
      </main>
    </div>
  )
}
