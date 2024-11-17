import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import ContactModal from './button-contact'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {/* <Link href="/">
              <span className="sr-only">Consis Consultoria</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/placeholder.svg?height=40&width=120"
                alt="Consis Consultoria Logo"
              />
            </Link> */}
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Início
            </Link>
            <Link href="#sobre" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Sobre
            </Link>
            <Link href="#services" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Serviços
            </Link>
            <Link href="/#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Vagas
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <ContactModal />
          </div>
        </div>
      </div>
    </header>
  )
}