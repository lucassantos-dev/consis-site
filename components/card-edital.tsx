import { Button } from "@/components/ui/button"
import { FileText, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function EditalCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 border-l-4 border-[#405546] w-full">
      <div className="flex items-center mb-4">
        <FileText className="h-8 w-8 text-[#405546] mr-3" />
        <h2 className="text-2xl font-bold text-[#405546]">Edital 001/2024</h2>
      </div>
      <p className="text-gray-600 mb-6">
        Processo Seletivo Público – São José do Egito/PE
      </p>
      <div className="bg-gray-100 rounded-md p-4 mb-6">
        <h3 className="text-lg font-semibold text-[#405546] mb-2">Informações Importantes:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Inscrições abertas</li>
          <li>Vagas para diversos cargos públicos</li>
          <li>Cadastro reserva disponível</li>
        </ul>
      </div>
      <Link href="/edital" passHref>
        <Button className="w-full bg-[#405546] hover:bg-[#2e3e31] transition duration-300">
          Acessar Edital Completo
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}

