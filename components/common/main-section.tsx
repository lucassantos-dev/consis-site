// import { Button } from "@/components/ui/button"
// import { ArrowRight, CheckCircle } from 'lucide-react'

export default function MainSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-5 md:py-2 w-full">
      <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#405546] sm:text-5xl md:text-6xl">
            Consis Consultoria
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Soluções em tecnologia e informática para impulsionar o seu negócio
          </p>
        </div>

        {/* <div  className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="inline-flex items-center bg-[#405546]">
            Ver todos os serviços
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </section>
  )
}

// const services = [
//   {
//     title: "Consultoria em TI",
//     description: "Orientação estratégica para otimizar seus processos de tecnologia da informação."
//   },
//   {
//     title: "Desenvolvimento de Software",
//     description: "Criação de soluções personalizadas para atender às necessidades específicas do seu negócio."
//   },
//   {
//     title: "Suporte Técnico",
//     description: "Assistência especializada para manter seus sistemas funcionando sem interrupções."
//   },
//   {
//     title: "Segurança da Informação",
//     description: "Proteção abrangente para seus dados e infraestrutura digital."
//   },
//   {
//     title: "Gestão de Projetos",
//     description: "Planejamento e execução eficiente de projetos de tecnologia."
//   },
//   {
//     title: "Treinamento e Capacitação",
//     description: "Programas de formação para manter sua equipe atualizada com as últimas tecnologias."
//   }
// ]