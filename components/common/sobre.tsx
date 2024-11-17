import { Shield, Users, Zap } from 'lucide-react'

export default function SobreNos() {
  return (
    <section id='sobre' className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Consis Consultoria: Sua parceira em soluções de TI
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Há mais de uma década, a Consis Consultoria oferece soluções inovadoras em tecnologia da informação, 
            ajudando empresas a alcançarem seu potencial máximo no mundo digital.
          </p>
        </div>

        <div className="mt-14">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#405546] text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    name: 'Experiência Comprovada',
    description:
      'Nossa equipe possui anos de experiência no mercado de TI, garantindo soluções eficientes e confiáveis.',
    icon: Shield,
  },
  {
    name: 'Foco no Cliente',
    description:
      'Priorizamos as necessidades específicas de cada cliente, oferecendo soluções personalizadas e suporte dedicado.',
    icon: Users,
  },
  {
    name: 'Inovação Constante',
    description:
      'Mantemo-nos atualizados com as últimas tecnologias para oferecer soluções inovadoras e competitivas.',
    icon: Zap,
  },
]