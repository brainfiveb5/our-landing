import { Button } from "./ui/button";
import logo from "@assets/b153337a0e6671f5ef3eb7cb82b2e2017d29540e.png";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Brain Five" className="w-10 h-10" />
          <span>Brain Five</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-gray-600 hover:text-gray-900 transition-colors">
            Sobre Nós
          </a>
          <a href="#projetos" className="text-gray-600 hover:text-gray-900 transition-colors">
            Projetos
          </a>
          <a href="#servicos" className="text-gray-600 hover:text-gray-900 transition-colors">
            Serviços
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button>Fale Conosco</Button>
        </div>
      </div>
    </header>
  );
}