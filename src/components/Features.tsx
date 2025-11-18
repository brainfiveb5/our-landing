import { Server, Layers, FileText, Database, Monitor } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Soluções Backend",
    description: "Desenvolvimento de APIs robustas, integrações entre sistemas e arquitetura escalável para garantir performance e segurança nas aplicações."
  },
  {
    icon: Layers,
    title: "Sistemas de Pequenos a Médio Porte",
    description: "Projetos personalizados para empresas, incluindo sistemas de gestão, plataformas colaborativas e automação de processos."
  },
  {
    icon: FileText,
    title: "Landing Page",
    description: "Criação de páginas web otimizadas para apresentação de produtos/serviços, geração de leads e captação de clientes."
  },
  {
    icon: Database,
    title: "Administração de Banco de Dados",
    description: "Gerenciamento, manutenção e otimização de bancos de dados, assegurando integridade, disponibilidade e segurança das informações."
  },
  {
    icon: Monitor,
    title: "Soluções Front-end",
    description: "Desenvolvimento de interfaces interativas e responsivas, com foco em usabilidade, experiência do usuário e identidade visual."
  }
];

export function Features() {
  return (
    <section id="servicos" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Serviços
          </h2>
          <p className="text-xl text-gray-600">
            Soluções completas em tecnologia para transformar seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}