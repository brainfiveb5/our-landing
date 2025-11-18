import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl mb-6">
          Vamos criar algo incrível juntos?
        </h2>
        <p className="text-xl mb-8 text-blue-50">
          Entre em contato conosco e descubra como a Brain Five pode transformar sua ideia em realidade.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" variant="secondary" className="gap-2">
            <Mail className="w-4 h-4" /> Fale Conosco
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
            Ver Mais Projetos <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <p className="mt-8 text-sm text-blue-100">
          Estamos sempre abertos a novos desafios e parcerias
        </p>
      </div>
    </section>
  );
}