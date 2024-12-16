import { Card } from "@/components/ui/card"
import Link from "next/link"
import { FileText } from 'lucide-react'

export default function EditalPage() {
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
          <Card className="p-6">
            <h3 className="text-[#405546] text-xl font-semibold mb-4">
              Documentos do Edital
            </h3>
            <div className="space-y-4">
              {[
                { name: "Edital Completo", size: "13.8 MB", link: '/Edital-001-2024.pdf' },
                { name: "Aditivo - 001 2024", size: "668 KB", link: '/Aditivo-001-2024-processo-seletivo-para-agente-comunitário-de-saúde-ACS-e-ACE.pdf' },
                { name: "Resultado Preliminar Isenção Seleção", size: "188 KB", link: '/Aditivo-001-2024-processo-seletivo-para-agente-comunitário-de-saúde-ACS-e-ACE.pdf' },
              ].map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#405546]" />
                    <span className="text-[#405546]">{doc.name}</span>
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
        </div>
      </main>
    </div>
  )
}

