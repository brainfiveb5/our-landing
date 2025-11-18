import { Users, Lightbulb, Code, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Nossa História
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Somos cinco amigos que se conheceram na faculdade de Engenharia de Software, em 2022. Compartilhamos a vontade de inovar em tecnologia e, juntos, decidimos fundar a Brain Five.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nosso nome representa a união de cinco mentes que transformam ideias simples em soluções incríveis.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1">Trabalho em equipe</h4>
                  <p className="text-sm text-gray-600">Cinco mentes, um objetivo</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1">Inovação</h4>
                  <p className="text-sm text-gray-600">Sempre buscando o novo</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1">Tecnologia</h4>
                  <p className="text-sm text-gray-600">Expertise em software</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1">Agilidade</h4>
                  <p className="text-sm text-gray-600">Entregas rápidas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-2xl blur-3xl opacity-20"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1752650735943-d0fbf1edce21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM0MTE4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Time Brain Five"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
