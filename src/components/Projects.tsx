import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import coffeImg from '../assets/coffe.png';
import nestImg from '../assets/nest.png';

const projects = [
  {
    title: "Coffe Landing",
    description: "Esta é uma landing page referente a uma cafeteria. Utilizando angular, com animações e responsividade.",
    image: coffeImg,
    tags: ["Angular", "Typescript"],
    status: "Em produção",
    link: "https://github.com/brainfiveb5/coffe-landing"
  },
  {
    title: "BG Books",
    description: "Esta é uma plataforma focada no registro e reserva de livros ligada ao projeto 'Book Management'.",
    image: "../assets/book-project.png",
    tags: ["React", "Tailwind", "Vite"],
    status: "Em produção"
  },
  {
    title: "Book Management",
    description: "Esta aplicação integra APIs do Google e um banco de dados PostgreSQL para fornecer gerenciamento de dados seguro e escalável.",
    image: nestImg,
    tags: ["NestJS", "PostgreSQL", "JWT"],
    status: "Em produção",
    link: "https://github.com/Lucas-Glaydson/-Book-Management"
  }
];

export function Projects() {
  return (
    <section id="projetos" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Nossos Projetos
          </h2>
          <p className="text-xl text-gray-600">
            Conheça algumas das soluções que desenvolvemos com dedicação e inovação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="gap-2 flex-1">
                    <Github className="w-4 h-4" /> Código
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
