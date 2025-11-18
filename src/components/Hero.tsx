import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@assets/b153337a0e6671f5ef3eb7cb82b2e2017d29540e.png";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Brain Five" className="w-32 h-32 md:w-40 md:h-40" />
          </div>

          <h1 className="text-5xl md:text-6xl">
            Transformando ideias em soluções inovadoras
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Somos a Brain Five, uma startup de tecnologia fundada por cinco amigos apaixonados por inovação. Juntos, criamos soluções que fazem a diferença.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Conheça Nossos Projetos <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Fale Conosco
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-12 text-center">
            <div>
              <div className="text-3xl text-blue-600">5</div>
              <p className="text-gray-600">Fundadores</p>
            </div>
            <div>
              <div className="text-3xl text-blue-600">2024</div>
              <p className="text-gray-600">Fundação</p>
            </div>
            <div>
              <div className="text-3xl text-blue-600">∞</div>
              <p className="text-gray-600">Possibilidades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}