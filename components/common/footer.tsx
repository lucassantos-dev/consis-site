// import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <div className="bg-[#405546] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-1 xl:gap-8 mx-10">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Empresa</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <span  className="text-base text-white hover:text-white cursor-pointer">
                      Sobre Nós
                    </span>
                  </li>
                  <li>
                    <span className="text-base text-white hover:text-white cursor-pointer">
                      Serviços
                    </span>
                  </li>
                  <li>
                    {/* <span className="text-base text-white hover:text-white cursor-pointer">
                      Vagas
                    </span> */}
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Suporte</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    {/* <Link href="/contato" className="text-base text-white hover:text-white">
                      Contato
                    </Link> */}
                  </li>
                  <li>
                    {/* <span className="text-base text-white hover:text-white cursor-pointer">
                      FAQ
                    </span> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Entre em contato
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-white mr-2" />
                <span className="text-base text-white">+55 (88) 9 9408-7030</span>
              </li>
              {/* <li className="flex items-center">
                <Mail className="h-6 w-6 text-white mr-2" />
                <a href="mailto:contato@consisconsultoria.com.br" className="text-base text-white hover:text-white">
                  contato@consisconsultoria.com.br
                </a>
              </li> */}
              <li className="flex items-center">
                <MapPin className="h-6 w-6 text-white mr-2" />
                <span className="text-base text-white">Juazeiro do Norte, CE</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-witext-white pt-8 md:flex md:items-center md:justify-between mx-10">
          <div className="flex space-x-6 md:order-2">
            <a href="https://www.facebook.com/consisconsultoriaeassessoria/" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/consis.consultoria/" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            {/* <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a> */}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Consis Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}